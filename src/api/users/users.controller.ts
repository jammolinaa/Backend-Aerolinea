import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserClientService } from 'src/core/user-client/user-client.service';
import { CreateUserDto } from 'src/core/user-client/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userClient: UserClientService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userClient.createUser(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userClient.getUser(id);
  }

  @Get()
  findAll() {
    return this.userClient.getAllUsers();
  }
  //   @Get(':id')
  //   remove(@Param('id') id: string) {
  //     return this.userClient.removeUser(id);
  //   }
}
