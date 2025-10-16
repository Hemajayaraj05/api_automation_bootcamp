 
import axios from "axios";
import { expect } from "chai";
import dotenv from "dotenv"
import { AuthResponse } from "./interfaces.js";
dotenv.config();




 const authAxios= axios.create({
    baseURL: process.env.BASE_URL as string,
    headers:{
        "Content-Type":"application/json",
    }
 });


 const params= {
    emailid:'hema@gmail.com',
    password:'1234'
 }


 describe('user login',()=>{
    it("Should login with valid creds",async()=>{
        try{
            const response=await authAxios.post<AuthResponse>(
            '/login',params
        );
        console.log("LoggedIn successfully")
        expect(response.status).to.equals(200)
        console.log(response.data);

        }
        catch(err){
            console.log(err);
        }
        
    })
 })

