import { createSlice } from '@reduxjs/toolkit';
//import axios from 'axios';

const FilmsState = {
  Films: null,
  loading: false,
};

const FilmsSlice = createSlice({
  name: 'Films',
  initialState: FilmsState,
  reducers: {
   
    setFilms: (state, action) => {
      state.Films = action.payload;
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});


export const FilmsActions = FilmsSlice.actions;
export default FilmsSlice.reducer;
