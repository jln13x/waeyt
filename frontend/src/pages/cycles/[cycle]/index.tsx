import { ChunksList } from 'components/chunk/ChunksList';
import { Loader } from 'components/common/Loader';
import { ChunkContextProvider } from 'components/providers/ChunkContextProvider';
import { useCycleQuery, useEntryTypesQuery } from 'graphql/generated';
import { GetServerSideProps, NextPage } from 'next';
import { isValidParam } from 'utils/isValidParam';

export const cyclePath = '/cycles/[cycle]';

interface Props {
  id: string;
}

const Cycle: NextPage<Props> = ({ id }) => {
  const { data: cycleQuery, isLoading: cycleIsLoading } = useCycleQuery({ id });
  // Prefetch
  const {} = useEntryTypesQuery(
    {},
    {
      staleTime: 5000
    }
  );

  // TODO
  if (cycleIsLoading) {
    return <Loader />;
  }

  // TODO
  if (!cycleQuery) {
    return <p className="text-rose-500">Error</p>;
  }

  return (
    <ChunkContextProvider cycle={cycleQuery.cycle}>
      <ChunksList cycle={cycleQuery.cycle} />
    </ChunkContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.cycle;

  if (!isValidParam(id)) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      id
    }
  };
};

export default Cycle;
