import axios from 'axios';
import { peopleActions } from '../Redux/slices/peopleslices';

const API_BASE_URL = 'https://swapi.dev/api';


export const fetchPeople = (page) => async (dispatch) => {
  try {
    dispatch(peopleActions.setLoading(true));
    const response = await axios.get(`${API_BASE_URL}/people/?page=${page}`);
   
    if (response.status === 200) {
      dispatch(peopleActions.setLoading(false));
      console.log(response);
      dispatch(peopleActions.setpeople(response.data));
      return response.data; 
    }
  } catch (error) {
    console.error('Error fetching people:', error);
    dispatch(peopleActions.setLoading(false));
    throw error;
  }
};

