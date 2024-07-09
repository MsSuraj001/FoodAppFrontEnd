import axios from "axios";


const axiosInstansce = axios.create();

axiosInstansce.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

axios.defaults.withCredentials = true // allow cookies to be sent with requests


export default axiosInstansce;

