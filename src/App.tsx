import { useState } from 'react'
import { isPalindrome } from './utils/utils'
import Icon from './components/Icon'
import './App.css'

function App() {
  const [phrase, setPhrase] = useState<string>('')

  return (
    <>
      <input type="text"
        placeholder='Insert a phrase'
        onChange={(e) => setPhrase(e.target.value)}
      />
      {phrase && <p id='answer'><Icon b={isPalindrome(phrase)} />{isPalindrome(phrase) ? `${phrase} is a palindrome` : `${phrase} is not a palindrome`}</p>}
    </>
  )
}

export default App
