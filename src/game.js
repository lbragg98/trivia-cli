import { ask, closeUI } from "./ui.js";
import { startTimer, stopTimer } from "./timer.js";
import { questions } from "./questions.js";

let score = 0;

export async function startGame() {
  console.log("\nStarting Trivia Game...\n");

  let timerExpired = false;

  // Start countdown timer (30 seconds for the whole game)
  const timer = startTimer(30, () => {
    timerExpired = true;
    console.log("Time is up!");
    endGame();
  });

  // Ask questions sequentially
  for (let i = 0; i < questions.length; i++) {
    if (timerExpired) break;

    const q = questions[i];
    console.log(`\nQuestion ${i + 1}: ${q.question}`);
    q.choices.forEach((choice) => console.log(choice));

    const userAnswer = await ask("\nYour answer: ");

    if (timerExpired) break;

    if (userAnswer.toUpperCase() === q.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong! The correct answer was ${q.answer}.`);
    }
  }

  stopTimer(timer);
  endGame();
}

// Ends the game and displays score
function endGame() {
  console.log(`\nGame Over! Your final score: ${score}/${questions.length}`);
  closeUI();
  process.exit();
}