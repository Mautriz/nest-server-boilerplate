import { Test, TestingModule } from '@nestjs/testing';
import { BpConfigService } from './config.service';

describe('BpConfigService', () => {
	let service: BpConfigService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BpConfigService],
		}).compile();

		service = module.get<BpConfigService>(BpConfigService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
