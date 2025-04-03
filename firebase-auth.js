// 🔹 Replace these values with your Firebase config
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

// 🔹 Sign In Function
function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Logged in!");
            window.location.href = "home.html"; // Redirect after login
        })
        .catch((error) => {
            alert(error.message);
        });
}

// 🔹 Sign Up Function
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account created!");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// 🔹 Logout Function
function logout() {
    firebase.auth().signOut().then(() => {
        alert("Logged out!");
    }).catch((error) => {
        console.error(error);
    });
}
