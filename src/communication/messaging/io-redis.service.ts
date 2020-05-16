import { Injectable, OnModuleInit } from '@nestjs/common';
// import * as IORedis from 'ioredis';

/**
 * Scommettta per un modulo funzionante con esempio di pubsub
 */
@Injectable()
export class IoRedisService implements OnModuleInit {
	// public ioredis = new IORedis(6380);
	// public pub = new IORedis(6380);

	onModuleInit() {
		// this.ioredis.subscribe('ciao');
		// this.ioredis.on('message', (...args) => {
		// 	console.log('CIAOOO');
		// 	console.log(args);
		// });
		// setTimeout(() => {
		// 	this.pub.publish('ciao', JSON.stringify({ prova: 'hello' }));
		// }, 500);
	}
}
