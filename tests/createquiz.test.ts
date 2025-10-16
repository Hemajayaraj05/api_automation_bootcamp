import dotenv from "dotenv";
import type{ AuthResponse } from "./interfaces.js";
import { expect } from "chai";
import { authAxios } from "./axios.js";
import { loginUser } from "./index.test.js";

dotenv.config();

const quizDetails = {
  quizname: "error",
};

const updateQuizDetails={
  quizname:"no-error"
}
let quizid:string="";

describe("quiz creation", () => {
  let token: string;
  before("user should be logged in", async () => {
    token = await loginUser();
    console.log("Login token", token);
  });
  it("should create a quiz successfully", async () => {
    const response = await authAxios.post<AuthResponse>(
      "/quiz/create",
      quizDetails,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
      }
    );
    quizid=response.data.id;
    console.log("quiz created successfully");
    expect(response.status).to.equals(200);

    }); 

 it("should update the quiz name",async()=>{
    const response=await authAxios.put<AuthResponse>(
        `/quiz/update/${quizid}`,updateQuizDetails,{
             headers:{
            Authorization: `Bearer ${token}`,
          }
        }
    );
    console.log("Quiz updated successfully");
    expect(response.status).to.equals(200);
  })

   it("should delete the quiz",async()=>{
    const response=await authAxios.delete<AuthResponse>(
        `/quiz/delete/${quizid}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
    console.log("Quiz deleted successfully");
    expect(response.status).to.equals(200);
  })



 

});
