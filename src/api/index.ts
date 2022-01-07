import axios from 'axios';
import { rowScoreBoardType, scoreBoardType } from '../types';

export class TeddyBearApi {
  private API: string;
  constructor() {
    this.API = 'https://iconic-flare-334012.du.r.appspot.com';
  }
  getMonthlyScoreBoard = (filter: string) => {
    return axios.get<rowScoreBoardType>(
      `${this.API}/api/scoreboard/monthly/${filter}/inc`,
    );
  };
  getWeeklyScoreBoard = (filter: string) => {
    return axios.get<rowScoreBoardType>(
      `${this.API}/api/scoreboard/weekly/${filter}/inc`,
    );
  };
}
export default new TeddyBearApi();
/*

export default new TeddyBearApi();
async function fetcher (type, {username,listType, scoreType}) {
  switch (type) {
    case 'scoreboard':
      const res = await fetch(`/api/scoreboard/${listType}/${scoreType}`);
      const json = await res.json();
      return json.data;
      break;
    case 'userStats':
      const res1 = await fetch(`/api/userstats/${username}`);
      const json1 = await res1.json();
      return json1.data;
      break;
    case 'userScore':
      const res2 = await fetch(`/api/userscore/${username}/${listType}/${scoreType}`);
      const json2 = await res2.json();
      const {data} = json2;
      return json2;
      break;
  // }
*/
