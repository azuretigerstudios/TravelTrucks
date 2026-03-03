import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',      // panelTruck, fullyIntegrated, alcove
  features: {},  // { AC: true, transmission: 'automatic', vb. }
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;