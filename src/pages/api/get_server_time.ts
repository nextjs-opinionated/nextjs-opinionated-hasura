import { withSentry } from '@sentry/nextjs'

const throwKnownError2 = () => Promise.reject(new Error('API Test 1'))
throwKnownError2()

async function get_server_time(req, res) {
  res.status(200).json({
    message: `Hello from server! It's ${new Date().toLocaleTimeString()}`,
  })
}

export default withSentry(get_server_time)

// export default function get_server_time(req, res) {
//   res.status(200).json({
//     message: `Hello from server! It's ${new Date().toLocaleTimeString()}`,
//   })
// }
