import { JwtPayload } from '../../controllers/user/model/jwt.payload';
import { BpConfigService } from './../../configuration/config/config.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { BpLogger } from '../../configuration/logger/bp-logger.service';
import { jwtBpVerify } from '../../helpers/jwt.helpers';

@Injectable()
export class UserFromJwtMiddleware implements NestMiddleware {
	constructor(private logger: BpLogger) {
		logger.setContext('UserFromJwtMiddleware');
	}

	async use(req: Request, res: Response, next: NextFunction) {
		const accessToken = this.extractJwt(req);
		if (!accessToken) return next();
		const user = jwtBpVerify(accessToken);
		req.user = user;
		return next();
	}

	extractJwt(req: Request): string | undefined {
		this.logger.log('Ciaooo');
		return req.body.tokens?.access_token || req.query.access_token || req.headers.authorization;
	}
}
