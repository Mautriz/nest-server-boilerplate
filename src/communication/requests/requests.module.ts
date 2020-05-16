import { Module, HttpModule } from '@nestjs/common';
import { BigUiDataService } from './big-ui-data.service';

@Module({
	imports: [HttpModule],
	providers: [BigUiDataService],
})
export class RequestsModule {}
