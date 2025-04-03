// Import Firebase modules from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration - replace these with your actual config values
const firebaseConfig = {
apiKey: "AIzaSyBNNcj4L1h0M0_Q8PFaE-Up-hyKMxnMvGY", 

authDomain: "popcornlearning-332a5.firebaseapp.com", 

projectId: "popcornlearning-332a5", 

storageBucket: "popcornlearning-332a5.firebasestorage.app", 

messagingSenderId: "923654716319", 

appId: "1:923654716319:web:ceb873f28914652b6d1baa", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log("User signed up:", userCredential.user);
      alert("Sign-up successful!");
    })
    .catch(error => {
      console.error("Sign-up error:", error.message);
      alert("Sign-up error: " + error.message);
    });
}

// Login Function
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
    })
    .catch(error => {
      console.error("Login error:", error.message);
      alert("Login error: " + error.message);
    });
}

// Logout Function
function logout() {
  signOut(auth)
    .then(() => {
      console.log("User logged out");
      alert("Logged out successfully!");
    })
    .catch(error => {
      console.error("Logout error:", error.message);
      alert("Logout error: " + error.message);
    });
}

// Export the functions so they can be used in index.html
export { signUp, login, logout };
