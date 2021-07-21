import axios from 'axios';
import { baseUrl } from './helper';

export const postApi = async () => {
  const { data } = await axios.get(`${baseUrl}/posts`);
  return data;
};
