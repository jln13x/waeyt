import { ClientError, request } from 'graphql-request';

export const useFetchClient = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  // const { url, headers } = React.useContext(FetchParamsContext)

  return async (variables?: TVariables) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error('No api url defined for the fetch client');
      }

      const result = await request(apiUrl, query, variables, options);
      return result;
    } catch (e) {
      // const clientError = new ClientError(e?.response, e?.request);
      // throw clientError;

      throw e;
    }
  };
};
