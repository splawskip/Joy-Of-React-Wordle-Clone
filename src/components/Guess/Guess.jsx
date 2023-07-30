import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

import GuessCell from '../GuessCell';

function Guess({ guess, answer }) {
  // Get results.
  const results = checkGuess(guess, answer);
  // Render components.
  return (
    <p className="guess">
      {range(5).map((num) => (
        <GuessCell
          key={num}
          letter={results ? results[num].letter : undefined}
          status={results ? results[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
