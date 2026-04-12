const firebaseConfig = {
  apiKey: "AIzaSyCyodHIEbK0PcgPYh0r3YQBbMYJh582pps",
  authDomain: "smit-18.firebaseapp.com",
  projectId: "smit-18",
  storageBucket: "smit-18.firebasestorage.app",
  messagingSenderId: "219989969735",
  appId: "1:219989969735:web:25a9114630063b5c755a62",
  measurementId: "G-XQYLJKMTL2",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const signupButton = document.getElementById("signup-btn");
signupButton.addEventListener("click", handleSignup);

function handleSignup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
}

const signinButton = document.getElementById("signin-btn");
signinButton.addEventListener("click", handleSignin);

function handleSignin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
}

setInterval(() => {
  console.log("Current user:", auth.currentUser);
}, 2000);

const signoutButton = document.getElementById("signout-btn");
signoutButton.addEventListener("click", handleSignout);

function handleSignout() {
  auth
    .signOut()
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}

const addDocButton = document.getElementById("addDoc-btn");
addDocButton.addEventListener("click", handleAddDoc);

function handleAddDoc() {
  const userCollection = firestore.collection("users");
  userCollection
    .add({
      name: "John Doe",
      age: 30,
    })
    .then((docRef) => {
      console.log("Document written with ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document:", error);
    });
}
