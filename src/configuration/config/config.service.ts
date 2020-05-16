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
export class BpConfigService {
  private readonly config: AppConfiguration;

  constructor() {
    this.config = {
      mongo: {
        username: BpConfigService.getEnv('MONGO_USERNAME', 'root'),
        password: BpConfigService.getEnv('MONGO_PASSWORD', 'example'),
        db: BpConfigService.getEnv('MONGO_DB', 'nest'),
        serviceName: BpConfigService.getEnv('MONGO_SERVICE_NAME', 'mongo'),
        port: BpConfigService.getEnv('MONGO_PORT', '27020'),
        uri: BpConfigService.getEnv('MONGO_URI'),
      },
      port: BpConfigService.getEnv('JWT_REFRESH_SECRET_KEY', '3000'),
      jwt: {
        secretKey: BpConfigService.getEnv('JWT_SECRET_KEY', '2673t7c28723xtrbgdsf'),
        refreshSecretKey: BpConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'hiadiuohj8922uohdo'),
        algorithm: BpConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'HS512') as Algorithm,
      },
    };
  }

  getMongoUri() {
    const { uri, username, password, db, port, serviceName } = this.get().mongo;
    return uri || `mongodb://${username}:${password}@${serviceName}:${port}/${db}`;
  }

  get() {
    return this.config;
  }

  static getEnv(VAR: string, defaultValue?: string): string {
    return process.env[VAR] || defaultValue;
  }

  // da implementare
  static setEnv() {
    return;
  }
}
