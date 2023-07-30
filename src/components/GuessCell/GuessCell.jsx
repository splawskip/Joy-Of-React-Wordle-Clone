import React from 'react';

function GuessCell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

export default GuessCell;
