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

// setInterval(() => {
//   console.log("Current user:", auth.currentUser);
// }, 2000);

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

const deleteDocButton = document.getElementById("deleteDoc-btn");
deleteDocButton.addEventListener("click", handleDeleteDoc);

function handleDeleteDoc() {
  const userCollection = firestore.collection("users");
  const doc = userCollection.doc("WcXEvmUaSjViFr2kF25a");

  doc
    .set()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
    });
}

const setDocButton = document.getElementById("setDoc-btn");
setDocButton.addEventListener("click", handleSetDoc);

function handleSetDoc() {
  const userCollection = firestore.collection("users");
  const doc = userCollection.doc("WcXEvmUaSjViFr2kF25a");

  doc
    .set({
      user: "wasif",
      age: 26,
      married: false,
    })
    .then(() => {
      console.log("Document successfully set!");
    })
    .catch((error) => {
      console.error("Error setting document:", error);
    });
}

const updateDocButton = document.getElementById("updateDoc-btn");
updateDocButton.addEventListener("click", handleUpdateDoc);

function handleUpdateDoc() {
  const userCollection = firestore.collection("users");
  const doc = userCollection.doc("tQZe4ANyFGbbjq9q4c7g");

  doc
    .update({
      user: "abdullah",
      age: 26,
      married: false,
    })
    .then(() => {
      console.log("Document successfully update!");
    })
    .catch((error) => {
      console.error("Error updating document:", error);
    });
}

const getDocButton = document.getElementById("getDoc-btn");
getDocButton.addEventListener("click", handleGetDoc);

function handleGetDoc() {
  const userCollection = firestore.collection("users");
  const doc = userCollection.doc("tQZe4ANyFGbbjq9q4c7f");

  doc
    .get({
      user: "abdullah",
      age: 26,
      married: false,
    })
    .then((doc) => {
      console.log("Document successfully get!", doc.data());
    })
    .catch((error) => {
      console.error("Error updating document:", error);
    });
}

const getAllDocButton = document.getElementById("getAllDoc-btn");
getAllDocButton.addEventListener("click", handleGetAllDoc);

function handleGetAllDoc() {
  const userCollection = firestore.collection("users");

  userCollection
    .get()
    .then((qs) => {
      qs.forEach((doc)=>{
        console.log(doc.data())
      })
    })
    .catch((error) => {
      console.error("Error getAll document:", error);
    });
}


auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("Logged in:", user.uid, user.email);
  } else {
    // User is signed out
    console.log("Logged out");
  }
});