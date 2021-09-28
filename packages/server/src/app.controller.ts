import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  ParseFloatPipe,
  ParseArrayPipe,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller({
  path: 'v1',
})
export class AppController {
  constructor(@Inject('SEARCH_SERVICE') private readonly client: ClientProxy) {}

  @Get('restaurants')
  getRestaurants(
    @Query('latitude', ParseFloatPipe) latitude: number,
    @Query('longitude', ParseFloatPipe) longitude: number,
    @Query('radius', ParseIntPipe) radius: number,
    @Query('cuisineTypes', new ParseArrayPipe({ optional: true }))
    cuisineTypes: string[],
  ) {
    return this.client.send('restaurants', [
      { latitude: latitude, longitude: longitude },
      radius,
      cuisineTypes,
    ]);
  }

  @Get('cuisine-types')
  getCuisineTypes() {
    return this.client.send('cuisine-type', []);
  }
}
