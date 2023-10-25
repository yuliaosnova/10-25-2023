import axios from "axios";

const axiosBaseUrl = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = axiosBaseUrl;

export default axios;
