import axios from "axios";
import config from "../data/config";


export const axiosClient = axios.create({
   baseURL: config.MOCK_CONECTION_STR
});