import pino from 'pino'

// create pino loggger
export const logger = pino({
  level: 'debug',
  prettyPrint: { colorize: true, timestampKey: 'time' },
})
