import useSWR from 'swr';
import Api from '../index';

async function getScoreBoard(filter: string) {
  const res = await Api.getScoreBoard(filter);
  return res.data;
}

export function useGetScoreBoard({
  term,
  filter,
}: {
  term: string;
  filter: string;
}) {
  const query = `${term}/${filter}`;
  const { data, error } = useSWR([query], getScoreBoard, {
    refreshInterval: 5000,
  });
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
