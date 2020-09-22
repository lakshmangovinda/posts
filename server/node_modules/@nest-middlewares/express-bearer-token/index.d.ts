import { NestMiddleware } from '@nestjs/common';
import * as bearerToken from 'express-bearer-token';
export declare class ExpressBearerTokenMiddleware implements NestMiddleware {
    static configure(opts: bearerToken.BearerTokenOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
