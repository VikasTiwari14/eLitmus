import React, { useState } from 'react'
import Home from './Components/Home/Home';
import VideoStream from './Components/VideoStream/VideoStream'
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className='App'>
          {
              isOpen?
              <VideoStream setIsOpen={setIsOpen} />
              :
              <Home setIsOpen={setIsOpen} />
          }
      </div>
  )
}

export default App