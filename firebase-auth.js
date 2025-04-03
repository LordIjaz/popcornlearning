// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNNcj4L1h0M0_Q8PFaE-Up-hyKMxnMvGY", 

  authDomain: "popcornlearning-332a5.firebaseapp.com", 

  projectId: "popcornlearning-332a5", 

  storageBucket: "popcornlearning-332a5.firebasestorage.app", 

  messagingSenderId: "923654716319", 

  appId: "1:923654716319:web:ceb873f28914652b6d1baa", 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get authentication service
const auth = firebase.auth();

// Sign-up function
function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign-up successful!");
            window.location.href = "index.html"; // Redirect to homepage
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Login function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to homepage
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Logout function
function logout() {
    auth.signOut().then(() => {
        alert("Logout successful!");
        window.location.href = "login.html"; // Redirect to login page
    }).catch((error) => {
        alert(error.message);
    });
}

// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is logged in:", user.email);
    } else {
        console.log("No user is logged in.");
    }
});
