import axios from 'axios';
import { QueryString } from '@foodby/commons';

export const getRestaurants = async (
  lat: number,
  lng: number,
  radius: number,
  cuisines: string[],
) => {
  const queryString = QueryString.fromObject({
    latitude: lat.toString(),
    longitude: lng.toString(),
    radius: radius.toString(),
    cuisineTypes: cuisines.toString(),
  });

  const { data } = await axios.get(
    `http://localhost:7777/restaurants?${queryString}`,
  );

  return data;
};
