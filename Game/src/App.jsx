


import React, { useState } from "react";
import './App.css';
function GuessTheNumber() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1; // 1-100
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 8;

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const checkNumber = () => {
    if (attempts >= maxAttempts) {
      setMessage("❌ Game Over! Click Restart to try again.");
      return;
    }

    const guess = parseInt(number);
    setAttempts(attempts + 1);

    if (guess < secretNumber) {
      setMessage("📉 Too Low! Try a higher number.");
    } else if (guess > secretNumber) {
      setMessage("📈 Too High! Try a lower number.");
    } else {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
    }

    if (attempts + 1 === maxAttempts && guess !== secretNumber) {
      setMessage(`❌ Game Over! The number was ${secretNumber}.`);
    }
  };

  const restartGame = () => {
    setSecretNumber(generateRandomNumber());
    setNumber("");
    setMessage("");
    setAttempts(0);
  };

  return (
    
    <div style={{ textAlign: "center", marginTop: "50px" }} class="game-container">
      <h1>Guess the Number (1-100)</h1>
      <input class="input-box"
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
        disabled={attempts >= maxAttempts}
      />
      <button  onClick={checkNumber} disabled={attempts >= maxAttempts}>
        Check
      </button>
      <button class="restart-btn" onClick={restartGame}>Restart</button>
      <p class="message">{message}</p>
      <p class="progress">Attempts: {attempts} / {maxAttempts}</p>
    </div>
  );
}

export default GuessTheNumber;