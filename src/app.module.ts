import { Module, NestModule, MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { UserModule } from './controllers/user/user.module';
import { UserFromJwtMiddleware } from './middlewares/user-from-jwt/user-from-jwt.middleware';
import { AuthModule } from './controllers/auth/auth.module';

@Module({
  imports: [ConfigurationModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     transform: true,
    //     whitelist: true,
    //   }),
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserFromJwtMiddleware).forRoutes('*');
  }
}
