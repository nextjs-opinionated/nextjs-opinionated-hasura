// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ message: `It is ${new Date().toLocaleTimeString()} on server.` })
}
