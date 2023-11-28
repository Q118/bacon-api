import { Response } from 'express';

import { logger } from './logger';

/** Helpers */
export const handleCaughtError = (res: Response, error: Error, method: string) => {
    logger.error(`Error in ${method} call`);
    logger.error(error);
    // PICKUP: perhaps need a custom error object so as not to leak too much info to the caller
    if (error.message) return res.status(400).json({ message: error.message });
    return res.status(500).json({ message: 'Internal Server Error' });
};