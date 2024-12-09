import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.printf(({ timestamp, level, message, errors }) => {
          if (errors instanceof Error) {
            return `[${timestamp}] ${level}: ${message} - ${errors.message}`;
          }
          return `[${timestamp}] ${level}: ${message}`;
        }),
        winston.format.colorize({ all: true })
      ),
    }),
  ],
});
