import dotenv from "dotenv";
import type{ AuthResponse } from "./interfaces.js";
import { expect } from "chai";
import { authAxios } from "./axios.js";
import { loginUser } from "./index.test.js";

dotenv.config();

const quizDetails = {
  quizname: "Tree",
};


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
    console.log("quiz created successfully");
    expect(response.status).to.equals(200);
  });

 
});
