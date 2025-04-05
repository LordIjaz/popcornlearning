import { saveScore, fetchTopScores } from './leaderboard.js';

async function endGame(score) {
  const username = prompt("Enter your name for the leaderboard:");
  await saveScore(username, score);
  showLeaderboard();
}

async function showLeaderboard() {
  const leaderboard = await fetchTopScores();
  const list = document.getElementById("leaderboard-list");
  list.innerHTML = '';
  leaderboard.forEach((entry, index) => {
    list.innerHTML += `<li>#${index + 1} - ${entry.username}: ${entry.score}</li>`;
  });
}
