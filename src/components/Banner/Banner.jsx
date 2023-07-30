import React from 'react';

function Banner({ status, tries, answer }) {
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
    </div>
  );
}

export default Banner;
