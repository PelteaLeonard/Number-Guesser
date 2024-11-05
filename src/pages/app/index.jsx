import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [guessedNumber, setGuessedNumber] = useState(0);

  const handleClick = () => {
    console.log(guessedNumber, randomNumber);
    if (guessedNumber === randomNumber) {
      alert("You guessed the number!");
      setGameEnded(true);
    } else {
      alert("Try again!");
    }
    setCount(count + 1);
  };

  const handleChangeInput = (event) => {
    setGuessedNumber(parseInt(event.target.value));
  };

  useEffect(() => {
    if (gameEnded === true) {
      setCount(0);
      setGameEnded(false);
      setRandomNumber(Math.floor(Math.random() * 10) + 1);
    }
  }, [gameEnded]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Number Guesser</h1>
        <div className={styles.triesContainer}>
          <p className={styles.tries}>Tries:{count}</p>
        </div>
        <div className={styles.inputContainer}>
          <input type="number" onChange={handleChangeInput} />
          <button onClick={handleClick}>Verify</button>
        </div>
      </div>
    </main>
  );
}

export default App;
