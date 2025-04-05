
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const scoreEl = document.getElementById('score');
const feedbackEl = document.getElementById('feedback');
const timerBar = document.getElementById('timer-bar');
const restartBtn = document.getElementById('restart-btn');
const countdownScreen = document.getElementById('countdown-screen');
const countdownNumber = document.getElementById('countdown-number');
const gameScreen = document.getElementById('game-screen');

let score = 0;
let correctAnswer;
let timeLeft = 60;
let timerInterval;
let countdown = 3;

const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

function generateQuestion() {
  const a = Math.floor(Math.random() * 12) + 1;
  const b = Math.floor(Math.random() * 12) + 1;
  correctAnswer = a * b;
  questionEl.textContent = `${a} × ${b} = ?`;
  answerEl.value = '';
}

function updateTimerBar() {
  const percent = (timeLeft / 60) * 100;
  timerBar.style.width = percent + '%';
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerBar();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function startGame() {
  countdownScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  timeLeft = 60;
  score = 0;
  scoreEl.textContent = score;
  updateTimerBar();
  generateQuestion();
  startTimer();
}

function endGame() {
  feedbackEl.textContent = 'Time\'s up!';
  restartBtn.classList.remove('hidden');
}

answerEl.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const userAnswer = parseInt(answerEl.value);
    if (userAnswer === correctAnswer) {
      score++;
      correctSound.play();
      feedbackEl.textContent = 'Correct!';
    } else {
      score--;
      wrongSound.play();
      feedbackEl.textContent = 'Wrong!';
    }
    scoreEl.textContent = score;
    generateQuestion();
  }
});

restartBtn.addEventListener('click', () => {
  window.location.reload();
});

function runCountdown() {
  countdownNumber.textContent = countdown;
  const interval = setInterval(() => {
    countdown--;
    countdownNumber.textContent = countdown;
    if (countdown === 0) {
      clearInterval(interval);
      startGame();
    }
  }, 1000);
}

runCountdown();
