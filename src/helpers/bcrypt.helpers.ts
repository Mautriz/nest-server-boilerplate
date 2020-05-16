import * as bcrypt from 'bcryptjs';
import { BpConfigService } from '../configuration/config/config.service';

export async function hashPassword(password: string): Promise<string> {
	const salt = await bcrypt.genSalt(BpConfigService.get().bcrypt.saltRounds);
	const hash = await bcrypt.hash(password, salt);

	return hash;
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
	const result = await bcrypt.compare(password, hashedPassword);
	return result;
}
