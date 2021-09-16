import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  ParseFloatPipe,
  ParseArrayPipe,
} from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { microserviceOptions } from '@foodby/search';

@Controller({
  path: 'v1',
})
export class AppController {
  private readonly client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(microserviceOptions);
  }

  @Get('restaurants')
  getRestaurants(
    @Query('latitude', ParseFloatPipe) latitude: number,
    @Query('longitude', ParseFloatPipe) longitude: number,
    @Query('radius', ParseIntPipe) radius: number,
    @Query('cuisineTypes', ParseArrayPipe) cuisineTypes: string[],
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
