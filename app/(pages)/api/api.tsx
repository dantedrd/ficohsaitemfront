import data from '@/enviroment/enviroment';
import axios from 'axios';


const instance = axios.create({
  baseURL: data.URL_BACKEND,
});

export default instance;