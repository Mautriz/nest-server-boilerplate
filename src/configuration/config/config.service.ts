import { Injectable } from '@nestjs/common';
import { Algorithm } from 'jsonwebtoken';

type AppConfiguration = {
	mongo: {
		username: string;
		password: string;
		port: number | string;
		serviceName: string;
		db: string;
		uri?: string;
	};
	port: number | string;
	jwt: {
		secretKey: string;
		refreshSecretKey: string;
		algorithm: Algorithm;
	};
	bcrypt: {
		saltRounds: number;
	};
};

@Injectable()
export class BpConfigService {
	private static config: AppConfiguration;

	constructor() {
		BpConfigService.config = {
			mongo: {
				username: BpConfigService.getEnv('MONGO_USERNAME'),
				password: BpConfigService.getEnv('MONGO_PASSWORD'),
				db: BpConfigService.getEnv('MONGO_DB', 'nest'),
				serviceName: BpConfigService.getEnv('MONGO_SERVICE_NAME', 'localhost'),
				port: BpConfigService.getEnv('MONGO_PORT', '27020'),
				uri: BpConfigService.getEnv('MONGO_URI'),
			},
			port: BpConfigService.getEnv('JWT_REFRESH_SECRET_KEY', '3000'),
			jwt: {
				secretKey: BpConfigService.getEnv('JWT_SECRET_KEY', '2673t7c28723xtrbgdsf'),
				refreshSecretKey: BpConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'hiadiuohj8922uohdo'),
				algorithm: BpConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'HS512') as Algorithm,
			},
			bcrypt: {
				saltRounds: Number(BpConfigService.getEnv('BCRYPT_SALT_ROUNDS', '12')),
			},
		};
	}

	getMongoUri() {
		const { uri, username, password, db, port, serviceName } = this.get().mongo;
		let authString = '';
		if (username || password) authString = `${username}:${password}@`;
		const mongoUri = uri || `mongodb://${authString}${serviceName}:${port}/${db}`;
		return mongoUri;
	}

	get() {
		return BpConfigService.config;
	}

	static get() {
		return BpConfigService.config;
	}

	static getEnv(VAR: string, defaultValue?: string): string {
		return process.env[VAR] || defaultValue;
	}

	// da implementare
	static setEnv() {
		return;
	}
}
