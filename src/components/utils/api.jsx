import axios from "axios";

const fatchDataFromApi = async (url) => {
  try {
    const response = await axios.get(
      "https://hotel-booking-u27b.onrender.com" + url
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export default fatchDataFromApi;
