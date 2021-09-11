import { Module } from '@nestjs/common';
import { ListController } from './controllers';
import { InMemoryCuisineTypeProvider } from './services';

@Module({
  controllers: [ListController],
  providers: [InMemoryCuisineTypeProvider],
})
export class CuisineTypeModule {}
