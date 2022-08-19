import axios from "axios";

axios.defaults.baseURL = "https://vikamade-opt.herokuapp.com";

export const getProductsList = async () => {
  const { data } = await axios.get("/vikamade");
  // console.log(data.groups);

  return data.groups;
};
