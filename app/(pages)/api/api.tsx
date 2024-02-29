import data from '@/enviroment/enviroment';
import axios from 'axios';


// Crea una instancia de Axios con la ruta base configurada
const instance = axios.create({
  baseURL: data.URL_BACKEND, // Reemplaza 'URL_DEL_BACKEND' con la URL de tu backend
});

export default instance;