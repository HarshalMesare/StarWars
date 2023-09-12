import axios from 'axios';
import { FilmsActions } from '../../src/Redux/slices/Films.slice'

const API_BASE_URL = 'https://swapi.dev/api';

export const fetchFilms = (page) => async (dispatch) => {
  try {
    dispatch(FilmsActions.setLoading(true));
    const response = await axios.get(`${API_BASE_URL}/films/?page=${page}`);
   
    if (response.status === 200) {
      dispatch(FilmsActions.setFilms(response.data));
      dispatch(FilmsActions.setLoading(false));
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching people:', error);
    dispatch(FilmsActions.setLoading(false));
    throw error;
  }
};

