import axios from "axios";

export const useAxios = axios.create({
    // baseURL: "http://localhost:5000/api/v1/"
    baseURL: "https://iq-back-cevq.onrender.com/api/v1/"
})