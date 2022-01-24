import Api from '../index';
import useSWR from 'swr';

async function getMonthlyScoreBoard(filter: string) {
  const res = await Api.getMonthlyScoreBoard(filter);
  return res.data;
}

export function useGetMonthlyScoreBoard(filter: string) {
  const { data, error } = useSWR([filter], getMonthlyScoreBoard);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
