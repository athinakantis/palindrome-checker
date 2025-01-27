import { useState } from 'react'
import { isPalindrome } from './utils/utils'
import Icon from './components/Icon'
import './App.css'

function App() {
  const [phrase, setPhrase] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(e.target.value.trim())
  }

  return (
    <>
      <h1>Is it a palindrome?</h1>
      <input type="text"
        placeholder='Insert a phrase'
        onChange={handleChange}
      />
      {phrase && <p id='answer'><Icon b={isPalindrome(phrase)} />{isPalindrome(phrase) ? `${phrase} is a palindrome` : `${phrase} is not a palindrome`}</p>}
    </>
  )
}

export default App
