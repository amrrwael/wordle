import React from "react"
import Header from "./Header"
import Status from './Status'
import { languages } from "./languages"


console.log(languages)
export default function Hangman() {

  const [currentWord, setCurrentWord] = React.useState("React")
  const wordChar = Array.from(currentWord.toUpperCase())

  const wordCharrecters = wordChar.map(char =>
    <span key={char}>{char}</span>
  )

  console.log(wordCharrecters)

  const languageElements = languages.map(lang => {

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span className="chip" key={lang.name} style={styles}>{lang.name}</span>
    )
  })
    return (
        <main>
            <Header />
            <Status />
            <div className="languages-chips">
                {languageElements}
            </div>
            <div className="word">
                {wordCharrecters}
            </div>
        </main> 
    )
}
