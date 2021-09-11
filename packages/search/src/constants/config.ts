import { ClientOptions, Transport } from '@nestjs/microservices';

export const microserviceOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8888,
  },
};
