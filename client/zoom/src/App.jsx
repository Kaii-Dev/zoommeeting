import React, { useState } from 'react'

function App() {
  const [zoomURL, setZoomURL] = useState('')
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsButtonClicked(true)
    setTimeout(() => setIsButtonClicked(false), 300)
    console.log(`Your zoom URL: ${zoomURL}`);
  }
  return (
    <>
      <form style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }} onSubmit={handleSubmit}>
        <h1>Please enter Zoom meeting URL below 👇🏻</h1>
        <div>
          <input type="text" value={zoomURL}
            onChange={(event) => { setZoomURL(event.target.value) }}
            style={{ borderRadius: '5px', padding: '5px 10px', border: 'none', outline: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.2s ease-in-out' }}
            onFocus={(event) => event.target.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.4)'}
            onBlur={(event) => event.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'}
          />
          <button type="submit" style={{ background: isButtonClicked ? 'rgba(0, 128, 0, 0.5)' : 'green', color: 'white', borderRadius: '5px', padding: '5px 10px', border: 'none', margin: '10px 10px', transition: 'background 0.2s ease-in-out' }}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
