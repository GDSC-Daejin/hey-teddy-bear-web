import useSWR from 'swr';
import Api from '../index';

async function getWeeklyScoreBoard(filter: string) {
  const res = await Api.getWeeklyScoreBoard(filter);
  return res.data;
}

export function useGetWeeklyScoreBoard(filter: string) {
  const { data, error } = useSWR([filter], getWeeklyScoreBoard);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
