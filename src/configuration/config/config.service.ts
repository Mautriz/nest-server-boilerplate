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
		accessDuration: string | number;
		refreshSecretKey: string;
		refreshDuration: string | number;
		algorithm: Algorithm;
	};
	bcrypt: {
		saltRounds: number;
	};
};

export class BpConfig {
	private static config: AppConfiguration = {
		mongo: {
			username: BpConfig.env('MONGO_USERNAME'),
			password: BpConfig.env('MONGO_PASSWORD'),
			db: BpConfig.env('MONGO_DB', 'nest'),
			serviceName: BpConfig.env('MONGO_SERVICE_NAME', 'localhost'),
			port: BpConfig.env('MONGO_PORT', '27020'),
			uri: BpConfig.env('MONGO_URI'),
		},
		port: BpConfig.env('JWT_REFRESH_SECRET_KEY', '3000'),
		jwt: {
			secretKey: BpConfig.env('JWT_SECRET_KEY', '2673t7c28723xtrbgdsf'),
			accessDuration: BpConfig.env('JWT_DURATION', '30m'),
			refreshSecretKey: BpConfig.env('JWT_REFRESH_SECRET_KEY', 'hiadiuohj8922uohdo'),
			refreshDuration: BpConfig.env('JWT_REFRESH_DURATION', '1h'),
			algorithm: BpConfig.env('JWT_ALGORITHM', 'HS512') as Algorithm,
		},
		bcrypt: {
			saltRounds: Number(BpConfig.env('BCRYPT_SALT_ROUNDS', '12')),
		},
	};

	static getMongoUri() {
		const { uri, username, password, db, port, serviceName } = this.get().mongo;
		let authString = '';
		if (username || password) authString = `${username}:${password}@`;
		const mongoUri = uri || `mongodb://${authString}${serviceName}:${port}/${db}`;
		return mongoUri;
	}

	get() {
		return BpConfig.config;
	}

	static get() {
		return BpConfig.config;
	}

	static env(VAR: string, defaultValue?: string): string {
		return process.env[VAR] || defaultValue;
	}

	// da implementare
	static setEnv() {
		return;
	}
}
