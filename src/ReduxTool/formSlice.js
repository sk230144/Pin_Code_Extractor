// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      name: '',
      email: '',
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateFormData } = formSlice.actions;
export const selectFormData = (state) => state.form.formData;

export default formSlice.reducer;
