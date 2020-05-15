
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { JwtPayload } from '../controllers/user/model/jwt.payload';

declare global {
  namespace Express {
    export interface Request {
      user: JwtPayload;
    }
  }
}
