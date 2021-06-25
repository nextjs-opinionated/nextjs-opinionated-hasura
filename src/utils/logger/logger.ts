import pino from 'pino'

// create pino loggger
export const logger = pino({
  level: 'debug',
  prettyPrint: { colorize: true, timestampKey: "time" },
})

export const log = (msg: unknown) => logger.info({ data: msg })

