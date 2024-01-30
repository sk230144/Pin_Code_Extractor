// FormComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, selectFormData } from './formSlice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

const FormComponent = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <div>
          <h2>Form Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      </div>
    </PersistGate>
  );
};

export default FormComponent;
