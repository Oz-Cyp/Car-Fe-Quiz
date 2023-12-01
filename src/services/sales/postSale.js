import http from "../../utils/http";
import { sales } from "../../constants/endpoints";

const postSale = ({
  firstName,
  lastName,
  brand,
  model,
  year,
  price,
  saledate,
}) => {
  const ENDPOINT = sales.postSale({
    firstName,
    lastName,
    brand,
    model,
    year,
    price,
    saledate,
  });

  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: { firstName, lastName, brand, model, year, price, saledate },
  });
};

export default postSale;
