import useSWR from 'swr';
import Api from '../index';

async function getScoreBoard({
  term,
  filter,
}: {
  term: string;
  filter: string;
}) {
  const res = await Api.getScoreBoard({ term, filter });
  return res.data;
}

export function useGetScoreBoard({
  term,
  filter,
}: {
  term?: string;
  filter?: string;
}) {
  const params = {
    term,
    filter,
  };
  const { data, error } = useSWR([params], getScoreBoard);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
