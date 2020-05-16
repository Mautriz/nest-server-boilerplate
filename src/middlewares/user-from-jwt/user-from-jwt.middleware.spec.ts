import { BpConfigService } from './../../configuration/config/config.service';
import { UserFromJwtMiddleware } from './user-from-jwt.middleware';
import { createRequest } from '../../../test/utils/express-mock.helpers';
import { BpLogger } from '../../configuration/logger/bp-logger.service';

describe('UserFromJwtMiddleware', () => {
	let middleware: UserFromJwtMiddleware;
	let jwt: string;

	beforeAll(() => {
		middleware = new UserFromJwtMiddleware(new BpConfigService(), new BpLogger());
		jwt = 'cciaooo';
	});

	it('should be defined', () => {
		expect(middleware).toBeDefined();
	});

	it('should get correct value from body', () => {
		expect(middleware.extractJwt(createRequest({ body: { tokens: { access_token: jwt } } }))).toBe(jwt);
	});

	it('should extract correct value from headers', () => {
		expect(middleware.extractJwt(createRequest({ headers: { authorization: jwt } }))).toBe(jwt);
	});

	it('should extract correct value from query', () => {
		expect(middleware.extractJwt(createRequest({ query: { access_token: jwt } }))).toBe(jwt);
	});
});
