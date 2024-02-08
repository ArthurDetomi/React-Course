// Css
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordList, wordsList } from './data/words'

// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const generateRandomNumber = (value) => {
    return Math.floor(Math.random() * value)
  }

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[generateRandomNumber(categories.length)]

    const wordsFromCategory = words[category];

    const word = wordsFromCategory[generateRandomNumber(wordsFromCategory.length)]

    return { word, category };
  }

  // Iniciar o jogo
  const startGame = () => {
    // Selecionando a categoria e a palavra da vez 
    const { word, category } = pickWordAndCategory();

    // Criando um array de letras com a palavra
    const wordLetters = word.toLowerCase().split("");

    // Setar states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters)

    setGameStage(stages[1].name);
  }

  // Processa a letra de entrada
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // Reiniciar jogo
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
