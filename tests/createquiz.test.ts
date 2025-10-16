import axios from "axios";
import dotenv from "dotenv"
import { AuthResponse } from "./interfaces.js";
import { expect } from "chai";

dotenv.config();


const createQuizAxios=axios.create({
    baseURL:process.env.BASE_URL as string,
    headers:{
        "Content-Type":"application/json"
    }
})

const quizDetails={
    quizname:"HP"
}

describe('quiz creation',()=>{
    it("should create a quiz successfully",async()=>{
        const response=await createQuizAxios.post<AuthResponse>("/quiz/create",quizDetails);
        console.log("quiz create successfully");
        expect(response.status).to.equals(200);
    })
})