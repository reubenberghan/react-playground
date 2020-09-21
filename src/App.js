import './App.css'
import Button from './components/Button.js'
import React, { useState } from 'react'

function App() {
  const [myList, setMyList] = useState([])

  const handleOnClick = (event, { clickCount }) => {
    // if the list is greater than or equal to five items long then remove the last item
    // otherwise just return the original list
    const newList = myList.length >= 5 ? myList.slice(0, -1) : myList

    // update the list state to add the latest item to the top of the list
    setMyList([`Item ${clickCount}`, ...newList])
  }

  return (
    <div className='App'>
      <h1>My App</h1>
      <Button onClick={handleOnClick}>Add item</Button>
      <ul>
        {myList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
