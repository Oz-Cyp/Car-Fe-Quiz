import http from "../../utils/http";
import { cars } from "../../constants/endpoints";

const postCar = (brand, model, year, price) => {
  console.log(brand, model, year, price, "--------");
  const ENDPOINT = cars.postCar(brand, model, year, price);
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`);
};

export default postCar;
