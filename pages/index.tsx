import * as React from 'react'
import Button from '../src/components/Button/Button'

const Home: React.FunctionComponent = () => {
  return (
    <div className="w-1/2 pt-8 m-auto text-center">
      <Button label="Hello World" onClick={() => alert('Hello World')} />
    </div>
  )
}

export default Home
