import useSWR from 'swr';
import API from '../index';
async function getUserState(userId: string) {
  const res = await API.getUserState(userId);
  return res.data;
}

export function useGetUserState(userId: string) {
  const { data: userData, error } = useSWR(
    [`/api/v1/users/${userId}/state`],
    getUserState,
  );
  return {
    userData: userData && userData,
    error: error && error,
  };
}
