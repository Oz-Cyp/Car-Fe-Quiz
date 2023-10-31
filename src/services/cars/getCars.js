import http from "../../utils/http";
import { cars } from "../../constants/endpoints";

const getCars = () => {
  const ENDPOINT = cars.getCars();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getCars;
