import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  people: [],
  loading: false,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setpeople: (state, action) => {
      state.people = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;
