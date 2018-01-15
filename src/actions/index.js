import axios from 'axios';


const API_KEY = 'f62c03360c0647f9aa7f1783a6198c52';
const ROOT_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

export function fetchNews(params){
  const url = `${ROOT_URL}&q=${params.search}&sortby=${params.sortby}&sources=${params.sources}&pageSize=49`;
  const request = axios.get(url);

  console.log(request);
  return {
    type: FETCH_ARTICLES,
    payload: request
  // Redux promise sees this incoming action, looks at the PAYLOAD property-- if the payload is a promise, redux-promise stops the action entirely and then once the request finishes, it dispatches a new action with the RESOLVED request -- then sends to the REDUCER
}
}
