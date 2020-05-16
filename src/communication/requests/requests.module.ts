import { Module, HttpModule } from '@nestjs/common';
import { BigUiService } from './big-ui.service';

@Module({
	imports: [HttpModule],
	providers: [BigUiService],
})
export class RequestsModule {}
