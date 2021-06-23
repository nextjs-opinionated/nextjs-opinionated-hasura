import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

// create pino-logflare console stream for serverless functions and send function for browser logs
// const { stream, send } = logflarePinoVercel({
//   // sourceKey: '096f2a45-0bf9-4757-844d-481c2e7a32f1',
//   // apiKey: 'pfrmv2RuzyIM',
// })

// create pino loggger
const logger = pino(
  {
    browser: {
      // transmit: {
      //   send: send,
      // },
    },
    level: 'debug',
    prettyPrint: { colorize: true },
  }
  // stream
)

export default logger
