import { Logger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class BpLogger extends Logger {
  error(message: string, trace: string) {
    super.error(message, trace);
  }
}
