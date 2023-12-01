import http from "../../utils/http";
import { sales } from "../../constants/endpoints";

const postCustomer = ({
  firstName,
  lastName,
  email,
  brand,
  model,
  price,
  saledate,
}) => {
  const ENDPOINT = customers.postCustomer({
    firstName,
    lastName,
    email,
    brand,
    model,
    price,
    saledate,
  });

  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: { firstName, lastName, email, brand, model, price, saledate },
  });
};

export default postCustomer;
