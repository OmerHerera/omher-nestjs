import { Test, TestingModule } from '@nestjs/testing';
import { CoolProvider } from './cool-provider';

describe('CoolProvider', () => {
  let provider: CoolProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoolProvider],
    }).compile();

    provider = module.get<CoolProvider>(CoolProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
