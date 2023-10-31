import http from "../../utils/http";
import { cars } from "../../constants/endpoints";

const deleteCarById = ({ carId, brand, model, year, price }) => {
  const ENDPOINT = cars.deleteCarById(carId, brand, model, year, price);
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.delete(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      carId,
      brand,
      model,
      year,
      price,
    },
  });
};

export default deleteCarById;
