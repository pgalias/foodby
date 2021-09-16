import axios from 'axios';

export const fetchCuisineTypes = (): Promise<string[]> => {
  return axios
    .get<string[]>('/api/v1/cuisine-types')
    .then((response) => response.data);
};
