import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-7z4n.onrender.com",
})