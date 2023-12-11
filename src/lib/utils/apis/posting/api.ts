import { Response } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { BodyData } from "./types";

export const getPost = async (page?: number, pagesize?: number) => {
  try {
    const response = await axiosWithConfig(`https://virtserver.swaggerhub.com/SocialMediaApps/sosmed/1.0.0/posts?page=${page}&pagesize=${pagesize}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deletePost = async (postId: number) => {
  try {
    const response = await axiosWithConfig.delete(`https://virtserver.swaggerhub.com/SocialMediaApps/sosmed/1.0.0/posts/${postId}`);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editPost = async (body: BodyData, postId: number) => {
  try {
    const formData = new FormData();
    formData.append("pesan", body.pesan);
    if (body.image !== null) {
      formData.append("image", body.image);
    }
    const response = await axiosWithConfig.put(`https://virtserver.swaggerhub.com/SocialMediaApps/sosmed/1.0.0/posts/${postId}`, formData);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
