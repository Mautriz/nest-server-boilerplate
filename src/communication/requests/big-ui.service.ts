import { Injectable, HttpService } from '@nestjs/common';

type ExampleResponse = {
	ciao: string;
};

@Injectable()
export class BigUiService {
	constructor(private http: HttpService) {}

	exampleRequest() {
		return this.http.get<ExampleResponse>('');
	}
}
