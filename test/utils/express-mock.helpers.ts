import { Request, Response } from 'express';
export function createRequest(obj: object) {
	return Object.assign({ body: {}, query: {}, headers: {}, url: '' }, obj) as Request;
}

export function createResponse(obj: any) {
	return obj as Response;
}
