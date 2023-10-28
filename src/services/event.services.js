import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;
import qs from "qs";

const getEvents = async (props) => {
  const queryString = qs.stringify(props.queryOptions);
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/events${queryString ? `?${queryString}` : ""}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getEventDetail = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/events/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const eventServices = { getEvents, getEventDetail };
