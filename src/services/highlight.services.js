import axios from "axios";

const getHiglights = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/highlights`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const highlightServices = { getHiglights };
