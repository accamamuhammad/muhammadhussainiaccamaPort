// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpLqt_70ZAxsNYhcTeDsMOZrv0BiGi77I",
  authDomain: "accamamuhammad-e4603.firebaseapp.com",
  projectId: "accamamuhammad-e4603",
  storageBucket: "accamamuhammad-e4603.appspot.com",
  messagingSenderId: "669894950834",
  appId: "1:669894950834:web:062d78bbaf03aef21faeab",
  measurementId: "G-2SRC4JRX6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
