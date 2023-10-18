import axiosClient from "./axios";

export const getProducts = async () => {
  try {
    const res = await axiosClient.get("/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
