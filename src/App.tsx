import { useState } from 'react'
import { isPalindrome } from './utils/utils'
import './App.css'

function App() {
  const [phrase, setPhrase] = useState<string>('')

  return (
    <>
      <input type="text"
      placeholder='Insert a phrase'
      onChange={(e) => setPhrase(e.target.value)}
      />
      {phrase && <p>{isPalindrome(phrase) ? `${phrase} is a palindrome` : `${phrase} is not a palindrome`}</p>}
    </>
  )
}

export default App
