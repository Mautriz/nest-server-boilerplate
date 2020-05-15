import { Injectable } from '@nestjs/common';
import { Algorithm } from 'jsonwebtoken';

type AppConfiguration = {
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
      jwt: {
        secretKey: ConfigService.getEnv('JWT_SECRET_KEY', '2673t7c28723xtrbgdsf'),
        refreshSecretKey: ConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'hiadiuohj8922uohdo'),
        algorithm: ConfigService.getEnv('JWT_REFRESH_SECRET_KEY', 'HS512') as Algorithm,
      },
    };
  }

  get() {
    return this.config;
  }

  static getEnv(VAR: string, defaultValue?: string): string {
    return process.env[VAR] || defaultValue;
  }
}
