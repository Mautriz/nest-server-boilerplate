import { Module, NestModule, MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { UserModule } from './controllers/user/user.module';
import { UserFromJwtMiddleware } from './middlewares/user-from-jwt/user-from-jwt.middleware';
import { AuthModule } from './controllers/auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RequestsModule } from './communication/requests/requests.module';
import { MessagingModule } from './communication/messaging/messaging.module';
import { UserGateway } from './gateways/user/user.gateway';

@Module({
	imports: [
		ConfigurationModule,
		UserModule,
		AuthModule,
		RequestsModule,
		MessagingModule,
		ServeStaticModule.forRoot({
			rootPath: join(process.cwd(), 'assets'),
		}),
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_PIPE,
			useFactory: () =>
				new ValidationPipe({
					transform: true,
					whitelist: true,
				}),
		},
		UserGateway,
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(UserFromJwtMiddleware).forRoutes('*');
	}
}
