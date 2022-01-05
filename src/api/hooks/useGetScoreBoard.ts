import useSWR from 'swr';
import Api from '../index';

async function getScoreBoard(_: string) {
  const res = await Api.getScoreBoard();
  return res.data;
}

export function useGetScoreBoard() {
  const { data, error } = useSWR(
    [`api/scoreboard/weekly/to/inc`],
    getScoreBoard,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
