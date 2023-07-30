import React from 'react';
// Import data and helpers.
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
// Import components.
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import Banner from '../Banner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Gather some state vars.
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
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
  // Render component.
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} game />
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {
        gameStatus !== 'running'
        && <Banner tries={guesses.length} answer={answer} status={gameStatus === 'won'} />
      }
    </>
  );
}

export default Game;
