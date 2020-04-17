import axios from 'axios';
import Time from '../utils/time/time.js';

const configureApi = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5 * Time.MILLISECONDS_IN_SECOND
  });
  return api;
};

export default configureApi;
