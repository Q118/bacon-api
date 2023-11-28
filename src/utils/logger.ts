import { createLogger, format,transports } from "winston";

export const logger = createLogger({
    transports: [ new transports.Console() ],
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `<API>[${timestamp}] ${level}: ${message}`;
        })
    )
});