import { Test, TestingModule } from '@nestjs/testing';
import { JsonApiService } from './json-api.service';

describe('JsonApiService', () => {
  let service: JsonApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonApiService],
    }).compile();

    service = module.get<JsonApiService>(JsonApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
