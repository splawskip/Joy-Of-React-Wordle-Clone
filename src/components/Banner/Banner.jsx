import React from 'react';

function Banner({
  status, tries, answer, handleRestart,
}) {
  return (
    <div className={`banner ${status ? 'happy' : 'sad'}`}>
      {status
        ? (
          <p>
            <strong>Congratulations!</strong>
            {' '}
            Got it in
            {' '}
            <strong>
              {tries}
              {' '}
              {tries > 1 ? 'guesses' : 'guess'}
            </strong>
            .
          </p>
        )
        : (
          <p>
            Sorry, the correct answer is
            {' '}
            <strong>{answer}</strong>
            .
          </p>
        )}
      <button className="restart-button" type="button" onClick={() => handleRestart()}>Restart the game</button>
    </div>
  );
}

export default Banner;
