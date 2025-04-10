import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    name: "",
    },
  reducers: {
    changeFilters: (state, action) => {
        state.name = action.payload.toLowerCase();
    },
  },
});

export default filtersSlice.reducer;

export const { changeFilters } = filtersSlice.actions;