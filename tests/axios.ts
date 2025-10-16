import axios from "axios";
import dotenv from "dotenv"
dotenv.config();

 export const authAxios= axios.create({
    baseURL: process.env.BASE_URL as string,
    headers:{
        "Content-Type":"application/json",
    }
 });