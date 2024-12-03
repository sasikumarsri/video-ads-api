import { Test, TestingModule } from '@nestjs/testing';
import { TvDevicesController } from './tv-devices.controller';

describe('TvDevicesController', () => {
  let controller: TvDevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TvDevicesController],
    }).compile();

    controller = module.get<TvDevicesController>(TvDevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
