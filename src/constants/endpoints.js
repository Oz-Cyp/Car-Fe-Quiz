const cars = {
  getCars: () => `/cars`,
  postCar: () => `/cars`,
  updateCarById: ({ carId }) => `/cars/${carId}`,
  deleteCarById: ({ carId }) => `/cars/${carId}`,
};
const customers = {
  getCustomers: () => `/customers`,
  postCustomer: () => `/customers`,
  updateCustomerById: ({ customerId }) => `/customers/${customerId}`,
  deleteCustomerById: ({ customerId }) => `/customers/${customerId}`,
};
const sales = {
  getSales: () => `/sales`,
  postSale: () => `/sales`,
  updateSaleById: ({ saleId }) => `/sales/${saleId}`,
  deleteSaleById: ({ saleId }) => `/sales/${saleId}`,
};

export { cars, customers, sales };
