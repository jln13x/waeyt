import { isDate } from 'date-fns';
import { useCycleChunkInDateRangeQuery } from 'graphql/generated';
import { NextPage, GetServerSideProps } from 'next';

interface Props {
  from: string;
  to: string;
}

const Foo: NextPage<Props> = ({ from, to }) => {
  const data = useCycleChunkInDateRangeQuery({
    cycleId: '0188894d-bdb3-4900-8436-c6508f6b6fb3',
    input: {
      startDate: from,
      endDate: to
    }
  });
  console.log(data);

  return <p>s</p>

};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const from = params?.from;
  const to = params?.to;

  const fromIsInvalid = Array.isArray(from) || from === undefined;
  const toIsInvalid = Array.isArray(to) || to === undefined;

  if (fromIsInvalid || toIsInvalid) {
    return {
      notFound: true
    };
  }

  const fromDate = new Date(from);
  const toDate = new Date(to);

  if (!isDate(fromDate) || !isDate(toDate))
    return {
      notFound: true
    };

  return {
    props: {
      from,
      to
    }
  };
};

export default Foo;
