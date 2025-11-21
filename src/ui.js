import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function ask(questionText) {
  return new Promise((resolve) => {
    rl.question(questionText, (answer) => resolve(answer.trim()));
  });
}

export function closeUI() {
  rl.close();
}