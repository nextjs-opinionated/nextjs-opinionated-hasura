const prepObjectKeys = (headers) => {
  const keyValues = {}
  Object.keys(headers).map((key) => {
    const newKey = key.replace(/-/g, '_')
    keyValues[newKey] = headers[key]
  })

  return keyValues
}

export { prepObjectKeys }
