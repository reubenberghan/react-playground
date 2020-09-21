import React, { useState } from 'react'

function Button({ children, onClick }) {
  const [clicks, setClicks] = useState(0)

  const handleOnClick = (event) => {
    const updatedClicks = clicks + 1
    setClicks(updatedClicks)
    onClick && onClick(event, { clickCount: updatedClicks })
  }

  return <button onClick={handleOnClick}>{children}</button>
}

export default Button
