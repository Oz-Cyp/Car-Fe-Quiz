import http from "../../utils/http";
import { sales as salesEndpoints } from "../../constants/endpoints";

const getSales = () => {
  const ENDPOINT = salesEndpoints.getSales();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getSales;
