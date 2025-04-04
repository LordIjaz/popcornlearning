import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNNcj4L1h0M0_Q8PFaE-Up-hyKMxnMvGY",
  authDomain: "popcornlearning-332a5.firebaseapp.com",
  projectId: "popcornlearning-332a5",
  storageBucket: "popcornlearning-332a5.firebasestorage.app",
  messagingSenderId: "923654716319",
  appId: "1:923654716319:web:ceb873f28914652b6d1baa"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔒 Login logic
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login successful:", userCredential.user);
      alert("Login successful!");
      // Wait for Firebase to confirm the user is logged in
      onAuthStateChanged(auth, (user) => {
        if (user) {
          window.location.href = "index.html"; // ✅ Redirect only when auth is ready
        }
      });
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      alert("Login error: " + error.message);
    });
});
