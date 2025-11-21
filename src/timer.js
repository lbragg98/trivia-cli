export function startTimer(seconds, onTimeUp) {
  let remaining = seconds;
  console.log(`\nTimer started: ${remaining} seconds`);

  const interval = setInterval(() => {
    remaining--;
    console.log(`Time left: ${remaining}`);
    if (remaining <= 0) {
      clearInterval(interval);
      onTimeUp();
    }
  }, 1000);

  return interval;
}

export function stopTimer(timerId) {
  clearInterval(timerId);
}