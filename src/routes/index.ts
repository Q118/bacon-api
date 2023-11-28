/**
 * @description starting point for all routes
 */

import { NextFunction, Request, Response, Router } from 'express';

import { logger } from '../utils/logger';
import { apiRouter } from './api';
// import { ErrorObject } from '../types';

export const router = Router();

/** route entrance logging on every request */
router.all('*', (req: Request, res: Response, next: NextFunction) => {
    // PICKUP: add client identifier here
    logger.info(`Method: ${req.method} | URL: ${req.originalUrl} requested.`);
    next();
});

/**
 * API Routes
 */
router.use('/api', apiRouter);


/**
 * Not Found Error
 */
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' });
});

/**
* Catch All Errors
*/
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'Internal Server Error' });
});