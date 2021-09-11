import { Controller } from '@nestjs/common';
import { InMemoryCuisineTypeProvider } from '../../services';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ListController {
  constructor(
    private readonly cuisineTypeProvider: InMemoryCuisineTypeProvider,
  ) {}

  @MessagePattern('cuisine-type')
  listAction() {
    return this.cuisineTypeProvider.getAll();
  }
}
