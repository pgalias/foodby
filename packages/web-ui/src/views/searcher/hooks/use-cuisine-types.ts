import { useQuery } from 'react-query';
import { fetchCuisineTypes } from '../../../api';

export const useCuisineTypes = () =>
  useQuery<string[], Error>('cuisineTypes', fetchCuisineTypes);
