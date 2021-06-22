export default function get_server_error(req, res) {
  res.status(500).json({
    message: `SERVER ERROR`,
  })
}
