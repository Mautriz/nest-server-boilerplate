import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';
import { join } from 'path';

@Injectable()
export class ServeSpaMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: () => void) {
		if (req.baseUrl.includes('/api')) {
			return next();
		} else {
			return res.sendFile(join(process.cwd(), 'assets', 'index.html'));
		}
	}
}
