export type rowScoreBoardType = {
  error: boolean;
  code: number;
  message: string;
  data: [
    {
      username: string;
      name: string;
      avatar: string;
      memberType: string;
      score: number;
    },
  ];
};
export type scoreBoardType = {
  username: string;
  name: string;
  avatar: string;
  memberType: string;
  score: number;
};
