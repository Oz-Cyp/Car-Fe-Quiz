import http from "../../utils/http";
import { customers } from "../../constants/endpoints";

const deleteCustomerById = ({
  customerId,
  firstName,
  lastName,
  email,
  brand,
  model,
  price,
}) => {
  const ENDPOINT = customers.deleteCustomerById(
    customerId,
    firstName,
    lastName,
    email,
    brand,
    model,
    price
  );
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.delete(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      customerId,
      firstName,
      lastName,
      email,
      brand,
      model,
      price,
    },
  });
};

export default deleteCustomerById;
