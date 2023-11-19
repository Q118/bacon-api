import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

/** Helpers */
export const handleCaughtError = (res: Response, error: any, method: string) => {
    logger.error(`Error in ${method} call`);
    logger.error(error);
    if (error.message) return res.status(400).json({ message: error.message });
    return res.status(500).json({ message: 'Internal Server Error' });
};