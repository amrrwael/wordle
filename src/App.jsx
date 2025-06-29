import React from "react"
import Header from "./Header"
import Status from './Status'
import { languages } from "./languages"


console.log(languages)
export default function Hangman() {

  const [currentWord, setCurrentWord] = React.useState("React")
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const wordChar = currentWord.split("").map((char, index) =>
    <span key={index}>{char.toUpperCase()}</span>
  )

  console.log(wordChar)

  const languageElements = languages.map(lang => {

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span className="chip" key={lang.name} style={styles}>{lang.name}</span>
    )
  })

  const keyboardElements = alphabet.split("").map(letter => (
    <button key={letter}>{letter.toUpperCase()}</button>
  ))
  console.log(keyboardElements)
    return (
        <main>
            <Header />
            <Status />
            <div className="languages-chips">
                {languageElements}
            </div>
            <div className="word">
                {wordChar}
            </div>
            <div className="keyboard">
              {keyboardElements}
            </div>
        </main> 
    )
}
