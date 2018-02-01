import axios from 'axios';
import urlencode from 'urlencode';
import {
  FETCH_RESULTS
} from './types';

export function fetchSearchResults(searchTerm){
  console.log(searchTerm);
  const request = axios.post('/getTwitter', {searchTerm})
                            .then((res) => {console.log(res)})

  return {
    type: FETCH_RESULTS,
    payload: request
  };
}
