import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC9rSCXMsU9_7M_KZH6h1liboAxUcHKxE0",
    authDomain: "hospital-52bd5.firebaseapp.com",
    projectId: "hospital-52bd5",
    storageBucket: "hospital-52bd5.appspot.com",
    messagingSenderId: "485573731107",
    appId: "1:485573731107:web:82c75943fdcd911047e296"
  };
export  const Firebase=firebase.initializeApp(firebaseConfig);