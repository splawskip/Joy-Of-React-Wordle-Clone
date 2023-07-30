import React from 'react';
// Import data and helpers.
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
// Import components.
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import Banner from '../Banner';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  // Gather some state vars.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  // Handle submitting the guess.
  function handleSubmitGuess(tentativeGuess) {
    // Combine previous guesses with the current one.
    const nextGuesses = [...guesses, tentativeGuess];
    // Update the state.
    setGuesses(nextGuesses);
    // Resolve game status after new guess
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));
  console.log(`Corret answer is: ${answer}`);

  // Render component.
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {
        gameStatus !== 'running'
        && <Banner tries={guesses.length} answer={answer} status={gameStatus === 'won'} handleRestart={handleRestart} />
      }
    </>
  );
}

export default Game;
