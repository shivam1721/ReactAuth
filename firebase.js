// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyjOqvw_Ov_9jVqnIxcbOs6GNd1bMKbVE",
  authDomain: "fir-auth-df8ea.firebaseapp.com",
  projectId: "fir-auth-df8ea",
  storageBucket: "fir-auth-df8ea.appspot.com",
  messagingSenderId: "152359510603",
  appId: "1:152359510603:web:3f8aa50b8217053b7e63ce"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export { auth };