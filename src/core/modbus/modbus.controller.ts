// // src/modbus/modbus.controller.ts
// import { Controller, Get, Query, Post, Body } from '@nestjs/common';
// import { ModbusService } from './modbus.service';

// @Controller('modbus')
// export class ModbusController {
//   constructor(private readonly modbusService: ModbusService) {}

//   @Get('read')
//   async read(
//     @Query('address') address: number,
//     @Query('length') length: number,
//   ) {
//     return await this.modbusService.readHoldingRegisters(address, length);
//   }

//   @Post('write')
//   async write(@Body() body: { address: number; value: number }) {
//     this.modbusService.writeSingleRegister(body.address, body.value);
//     return { status: 'OK' };
//   }
// }
