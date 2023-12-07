import axiosWithConfig from "../axiosWithConfig";
import { LoginSchema, RegisterSchema } from ".";

export const postLogin = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post(`https://virtserver.swaggerhub.com/SocialMediaApps/sosmed/1.0.0/login`, body);
    console.log(response, "response");

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const postRegister = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post("https://virtserver.swaggerhub.com/SocialMediaApps/sosmed/1.0.0/register", body);
    console.log(response, "response");
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
