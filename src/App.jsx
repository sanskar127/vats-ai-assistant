import { useState } from 'react'
import './App.css'
import { Heading, SubHeading } from './Components/Heading'
import Query from './Components/Query'
function App() {

  return (
    <div className='App'>
      <div className="container">
        <Heading>Hello There!</Heading>
        <SubHeading>I am Darwin, How may I help You?</SubHeading>
        <Query placeholder={'What you want to ask My Friend?'} />
      </div>
    </div>
  )
}

export default App
