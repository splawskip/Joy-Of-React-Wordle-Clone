import React from 'react';
import { KEYBOARD } from '../../constants';

function getStatusByLetter(validatedGuesses) {
  const statuses = {};
  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statuses[letter] = status;
    });
  });
  return statuses;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);
  return (
    <div className="keyboard">
      {KEYBOARD.map((keyboardRow, index) => (
        <div key={index} className="keyboard-row">
          {keyboardRow.map((key) => (<button key={key} type="button" className={`keyboard-key ${statusByLetter[key] ?? ''}`}>{key}</button>))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
