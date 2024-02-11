// Css
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/words'

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
  const GUESSES_QTD_TOTAL = 3;
  const LETTER_SCORE = 10;
  const WORD_SCORE = 100;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // Letras adivinhadas
  const [guessedLetters, setGuessedLetters] = useState([])
  // Letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);
  // Quantidade de chances
  const [guesses, setGuesses] = useState(GUESSES_QTD_TOTAL);
  // Pontuação
  const [score, setScore] = useState(0);

  const generateRandomNumber = (value) => {
    return Math.floor(Math.random() * value)
  }

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[generateRandomNumber(categories.length)]

    const wordsFromCategory = words[category];

    const word = wordsFromCategory[generateRandomNumber(wordsFromCategory.length)]

    return { word, category };
  }, [words])

  // Iniciar o jogo
  const startGame = useCallback(() => {
    clearLetterStates();

    // Selecionando a categoria e a palavra da vez 
    const { word, category } = pickWordAndCategory();

    // Criando um array de letras com a palavra
    const wordLetters = word.toLowerCase().split("");

    // Setar states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory])

  // Processa a letra de entrada
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase();

    // checar se a letra já foi utilizada
    if (guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
      return;
    }

    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) =>
        [...actualGuessedLetters,
          normalizeLetter]
      )

      setScore((currentScore) => currentScore + LETTER_SCORE);
    } else {
      setWrongLetters((actualWrongLetters) =>
        [...actualWrongLetters,
          normalizeLetter]
      )

      setGuesses((currentGuesses) => currentGuesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // checa condição de derrota
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Checa condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if (uniqueLetters.length === guessedLetters.length) {
      setScore((currentScore) => currentScore + WORD_SCORE);

      // reiniar o jogo com uma nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame])


  // Reiniciar jogo
  const retry = () => {
    setScore(0);
    setGuesses(GUESSES_QTD_TOTAL);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
