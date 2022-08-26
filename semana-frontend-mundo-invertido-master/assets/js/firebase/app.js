  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA6J47eavkHl11w-WzmUMc1cAKoDzcLNt8",
    authDomain: "projeto-teste-fb63f.firebaseapp.com",
    projectId: "projeto-teste-fb63f",
    storageBucket: "projeto-teste-fb63f.appspot.com",
    messagingSenderId: "1068063061593",
    appId: "1:1068063061593:web:19046ec7126f1504d96348"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app