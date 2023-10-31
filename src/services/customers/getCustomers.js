import http from "../../utils/http";
import { customers } from "../../constants/endpoints";

const getCustomers = () => {
  const ENDPOINT = customers.getCustomers();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getCustomers;
