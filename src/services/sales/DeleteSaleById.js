import http from "../../utils/http";
import { sales } from "../../constants/endpoints";

const deleteSaleById = ({
  saleId,
  firstName,
  lastName,
  brand,
  model,
  year,
  price,
  saledate,
}) => {
  const ENDPOINT = sales.deleteSaleById(
    saleId,
    firstName,
    lastName,
    brand,
    model,
    year,
    price,
    saledate
  );
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.delete(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      saleId,
      firstName,
      lastName,
      brand,
      model,
      year,
      price,
      saledate,
    },
  });
};

export default deleteSaleById;
