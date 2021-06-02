// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    message: `Hello from server! It's ${new Date().toLocaleTimeString()}`,
  })
}
