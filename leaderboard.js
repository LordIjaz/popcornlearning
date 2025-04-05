import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore, collection, query, orderBy, limit, getDocs
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNNcj4L1h0M0_Q8PFaE-Up-hyKMxnMvGY", 

  authDomain: "popcornlearning-332a5.firebaseapp.com", 

  projectId: "popcornlearning-332a5", 

  storageBucket: "popcornlearning-332a5.firebasestorage.app", 

  messagingSenderId: "923654716319", 

  appId: "1:923654716319:web:ceb873f28914652b6d1baa", 
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
