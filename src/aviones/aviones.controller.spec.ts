import { Test, TestingModule } from '@nestjs/testing';
import { AvionesController } from './aviones.controller';
import { AvionesService } from './aviones.service';

describe('AvionesController', () => {
  let controller: AvionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvionesController],
      providers: [AvionesService],
    }).compile();

    controller = module.get<AvionesController>(AvionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
