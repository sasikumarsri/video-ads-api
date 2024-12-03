import { Test, TestingModule } from '@nestjs/testing';
import { CampainsService } from './campaigns.service';

describe('CampaignsService', () => {
  let service: CampainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampainsService],
    }).compile();

    service = module.get<CampainsService>(CampainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
