import handler from '../../../utils/next-connect'

export default handler.get((_, res) => {
  const response = {message: `Hello from server! It's ${new Date().toLocaleTimeString()}`}
  
  res.status(200).json(response)
})
