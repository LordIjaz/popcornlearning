import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore, collection, query, orderBy, limit, getDocs
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

cconst firebaseConfig = {
  apiKey: process.env.API_KEY, // Get the API key from the environment variable
  authDomain: "popcornlearning-332a5.firebaseapp.com",
  databaseURL: "https://popcornlearning-332a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "popcornlearning-332a5",
  storageBucket: "popcornlearning-332a5.appspot.com",
  messagingSenderId: "227316807463",
  appId: "1:227316807463:web:e8b5dbd2c1998a11faef26"
};


// Initialise Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load top 10 scores
async function loadLeaderboard() {
  const scoresRef = collection(db, "scores");
  const q = query(scoresRef, orderBy("score", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  const leaderboardList = document.getElementById("leaderboard-list");
  leaderboardList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    const username = data.username || "Anonymous"; // Fallback if username is missing
    li.textContent = `${username}: ${data.score}`;
    leaderboardList.appendChild(li);
  });
}

window.addEventListener("load", loadLeaderboard);
