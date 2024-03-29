import { ExpressErrorMiddlewareInterface, Middleware, } from 'routing-controllers';
import { NextFunction } from 'express';

@Middleware({ type: 'after', priority: 0 })
export default class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: NextFunction): void {
        if (!response.headersSent) {
            response.status((error && error.httpCode) || 500);
            response.json({
                name: error.name,
                message: error.message,
                errors: error.errors || [],
            });
        } else {
            return next(error)
        }

        if (!error.httpCode || error.httpCode === 500) {
            if (error.message && error.stack) {
                console.log('ERROR STACK: ', {
                    stack: error.stack,
                    message: error.message,
                });
            } else {
                console.log('ERR HAD NO MESSAGE OR STACK: ', error);
            }
        }
    }
}
