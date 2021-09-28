import { ClientOptions, Transport } from '@nestjs/microservices';

export const microserviceOptions: ClientOptions = {
  transport: Transport.REDIS,
  options: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
};
