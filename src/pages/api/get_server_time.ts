export default function get_server_time(req, res) {
  res.status(200).json({
    message: `Hello from server! It's ${new Date().toLocaleTimeString()}`,
  })
}
