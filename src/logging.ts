const privateData: { logger: Logger | null } = {
    logger: null,
}

export interface LogMessage {
    message: string;
    data?: any;
}
export interface Logger {
    debug(msg: LogMessage): void;
    info(msg: LogMessage): void;
    warn(msg: LogMessage): void;
    error(msg: LogMessage): void;
}

export const setLogger = (logger: Logger): void => {
    privateData.logger = logger;
}

export abstract class Logging {
    public static getLogger(): Logger {
        if (!privateData.logger) {
            throw new Error('No logger');
        }

        return privateData.logger;
    }
}
