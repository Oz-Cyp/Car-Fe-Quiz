import http from "../../utils/http";
import { cars } from "../../constants/endpoints";

const postCar = () => {
  const ENDPOINT = cars.postCar();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  console.log(API_BASE_URL);
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default postCar;
