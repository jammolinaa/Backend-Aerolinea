import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserClientModule } from 'src/core/user-client/user-client.module';

@Module({
  imports: [UserClientModule], // para poder usar el servicio TCP
  controllers: [UsersController], // registra el endpoint /users
})
export class UsersModule {}
