import pino from 'pino'

// create pino loggger
const logger = pino({
  level: 'debug',
  prettyPrint: { colorize: true, timestampKey: "time" },
})

// const log = (msg) => logger.info(msg)

export default logger
