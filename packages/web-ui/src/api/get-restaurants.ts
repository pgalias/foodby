import axios, { AxiosResponse } from 'axios';
import { Restaurant, QueryString } from '@foodby/commons';

export const getRestaurants = (
  lat: number,
  lng: number,
  radius: number,
  cuisines: string[],
): Promise<Restaurant[]> => {
  const queryString = QueryString.fromObject({
    latitude: lat.toString(),
    longitude: lng.toString(),
    radius: radius.toString(),
    cuisineTypes: cuisines.toString(),
  });

  return axios
    .get(`/api/v1/restaurants?${queryString}`)
    .then((response: AxiosResponse<Restaurant[]>) => response.data);
};
