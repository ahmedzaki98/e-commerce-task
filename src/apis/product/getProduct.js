import axios from "axios";

const getProduct = async () => {
  let url = "https://fakestoreapi.com/products";
  try {
    const res = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        lang: "ar",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default getProduct;
