import { Injectable, HttpService } from '@nestjs/common';
import { BpConfig } from 'src/configuration/config/config.service';

type ExampleResponse = {
	ciao: string;
};

@Injectable()
export class BigUiDataService {
	constructor(private http: HttpService) {}

	exampleRequest() {
		return this.http.get<ExampleResponse>(`${BpConfig.cfg.hosts.bigui}`);
	}
}
