export type JwtPayload = {
	sub: string;
	username: string;
};

export type JwtRefreshPayload = {
	sub: string;
};
