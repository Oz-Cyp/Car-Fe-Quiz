const cars = {
  getCars: () => `/cars`,
  postCar: () => `/cars`,
  updateCarById: ({ carId }) => `/cars/${carId}`,
  deleteCarById: ({ carId }) => `/cars/${carId}`,
};
const customers = {
  getCustomers: () => `/customers`,
};
const sales = {
  getSales: () => `/sales`,
};

export { cars, customers, sales };
