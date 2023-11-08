import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

/** Helpers */
export const handleCaughtError = (res: Response, error: any, method: string) => {
    logger.error(`Error in ${method} call`);
    logger.error(error);
    if (error && error.code === 'BlobNotFound') return res.status(404).json({ message: 'The requested blob was not found' });
    return res.status(500).json({ message: 'Internal Server Error' });
};