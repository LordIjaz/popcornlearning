// leaderboard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config (same as used before)
const firebaseConfig = {
  apiKey: "AIzaSyBNNcj4L1h0M0_Q8PFaE-Up-hyKMxnMvGY",
  authDomain: "popcornlearning-332a5.firebaseapp.com",
  projectId: "popcornlearning-332a5",
  storageBucket: "popcornlearning-332a5.appspot.com",
  messagingSenderId: "923654716319",
  appId: "1:923654716319:web:ceb873f28914652b6d1baa"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save score to Firestore
export async function saveScore(username, score) {
  try {
    await addDoc(collection(db, "leaderboard"), {
      username,
      score,
      timestamp: new Date()
    });
    console.log("Score saved!");
  } catch (e) {
    console.error("Error saving score: ", e);
  }
}

// Fetch top 10 scores
export async function fetchTopScores() {
  const q = query(collection(db, "leaderboard"), orderBy("score", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}
