import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto'; // usa el mismo DTO o crea uno equivalente
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserClientService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  async createUser(dto: CreateUserDto) {
    return firstValueFrom(this.client.send({ cmd: 'create-user' }, dto));
  }

  async getUser(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'get-user' }, id));
  }
  async getAllUsers() {
    return firstValueFrom(this.client.send({ cmd: 'get-all-users' }, {}));
  }
}
