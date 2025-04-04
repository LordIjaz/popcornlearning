const auth = firebase.auth();

// Sign up function
function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("message").innerText = "Sign up successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
}

// Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("message").innerText = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
}
