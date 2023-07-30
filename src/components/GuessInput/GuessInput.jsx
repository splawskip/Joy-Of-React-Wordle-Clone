import React from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const handleSubmit = (event) => {
    // Prevent page reload reload.
    event.preventDefault();
    // Handle new guess submit.
    handleSubmitGuess(tentativeGuess);
    // Reset.
    setTentativeGuess('');
  };
  const handleInputChange = (event) => setTentativeGuess(event.target.value.toUpperCase());
  // Render components.
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        value={tentativeGuess}
        onChange={handleInputChange}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
