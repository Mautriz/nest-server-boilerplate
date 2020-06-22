import { SubscribeMessage, WebSocketGateway, ConnectedSocket, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { jwtBpVerify } from '../../helpers/jwt.helpers';

@WebSocketGateway()
export class UserGateway {
	@WebSocketServer()
	server: SocketIO.Server;

	@SubscribeMessage('login')
	handleMessage(@MessageBody() data: { jwt: string }, @ConnectedSocket() client: Socket): void {
		const jwtPayload = jwtBpVerify(data?.jwt);
		if (jwtPayload) {
			client.join(jwtPayload?.sub);
		}

		this.server.to(client.id).emit('prova', { cacca: 'ciau' });
	}
}
