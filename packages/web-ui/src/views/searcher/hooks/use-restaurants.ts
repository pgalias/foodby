import { useQuery, UseQueryOptions, QueryKey } from 'react-query';
import { Restaurant } from '@foodby/commons';
import { getRestaurants } from '../../../api';
import { FiltersState } from '../contexts/filters/state';

export const useRestaurants = (
  filters: FiltersState,
  options?: UseQueryOptions<Restaurant[], Error, Restaurant[], QueryKey>,
) =>
  useQuery<Restaurant[], Error>(
    ['restaurants', filters],
    () =>
      getRestaurants(
        filters.location.latitude,
        filters.location.longitude,
        filters.radius,
        filters.cuisineTypes,
      ),
    options,
  );
