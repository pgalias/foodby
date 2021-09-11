import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InMemoryCuisineTypeProvider } from '../../services/cuisine-type';

@Controller()
export class CuisineTypesController {
  constructor(
    private readonly cuisineTypeProvider: InMemoryCuisineTypeProvider,
  ) {}

  @MessagePattern('cuisine-type')
  getCuisineTypes() {
    return this.cuisineTypeProvider.getAll();
  }
}
