type MessageType = 'log' | 'debug' | 'warn' | 'info' | 'error'

class Logger {
    log(message: string, ...supportingDetails: unknown[]): void {
        this.emitLogMessage('log', message, supportingDetails)
    }

    debug(message: string, ...supportingDetails: unknown[]): void {
        this.emitLogMessage('debug', message, supportingDetails)
    }

    warn(message: string, ...supportingDetails: unknown[]): void {
        this.emitLogMessage('warn', message, supportingDetails)
    }

    info(message: string, ...supportingDetails: unknown[]): void {
        this.emitLogMessage('info', message, supportingDetails)
    }

    error(message: string, ...supportingDetails: unknown[]): void {
        this.emitLogMessage('error', message, supportingDetails)
    }

    emitLogMessage(messageType: MessageType, message: string, supportingDetails: unknown[]) {
        // TODO: don't log anything if production

        if (supportingDetails.length > 0) {
            console[messageType](message, supportingDetails)
        } else {
            console[messageType](message)
        }
    }
}

export const logger = new Logger()
