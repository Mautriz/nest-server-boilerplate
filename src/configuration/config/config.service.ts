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
};

@Injectable()
export class ConfigService {
  private readonly config: AppConfiguration;

  constructor() {
    this.config = {
      mongo: {
        username: ConfigService.getEnv('MONGO_USERNAME', 'root'),
        password: ConfigService.getEnv('MONGO_PASSWORD', 'example'),
        db: ConfigService.getEnv('MONGO_DB', 'nest'),
        serviceName: ConfigService.getEnv('MONGO_SERVICE_NAME', 'mongo'),
        port: ConfigService.getEnv('MONGO_PORT', '27020'),
        uri: ConfigService.getEnv('MONGO_URI'),
      },
      port: ConfigService.getEnv('JWT_REFRESH_SECRET_KEY', '3000'),
      jwt: {
        secretKey: ConfigService.getEnv('JWT_SECRET_KEY', '2673t7c28723xtrbgdsf'),
        refreshSecretKey: ConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'hiadiuohj8922uohdo'),
        algorithm: ConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'HS512') as Algorithm,
      },
    };
  }

  mongoUri() {
    const { uri, username, password, db, port, serviceName } = this.get().mongo;
    return uri || `mongodb://${username}:${password}@${serviceName}:${port}/${db}`;
  }

  get() {
    return this.config;
  }

  static getEnv(VAR: string, defaultValue?: string): string {
    return process.env[VAR] || defaultValue;
  }
}
