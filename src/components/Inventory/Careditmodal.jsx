import React, { useState } from "react";

const CarEditModal = ({ car, onClose, onUpdate }) => {
  const [editedCar, setEditedCar] = useState({ ...car });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    onUpdate(editedCar);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Car</h2>
        <form>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={editedCar.brand}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              value={editedCar.model}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              name="year"
              value={editedCar.year}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={editedCar.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-container">
            <button className="save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarEditModal;
