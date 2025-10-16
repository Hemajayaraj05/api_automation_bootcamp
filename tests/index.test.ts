
import { expect } from "chai";
import dotenv from "dotenv";
import type { AuthResponse } from "./interfaces.js";
import { authAxios } from "./axios.js";
dotenv.config();

const params = {
  emailid: "hema@gmail.com",
  password: "1234",
};

export const loginUser = async (): Promise<string> => {
  const response = await authAxios.post<AuthResponse>("/login", params);
  console.log("LoggedIn successfully");
  expect(response.status).to.equals(200);
  console.log(response.data);
  return response.data.token;
};
