// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6V4fBT1b3D-0MMtNEHK0VkuZa2aHaTi8",
  authDomain: "utility-bills-client.firebaseapp.com",
  projectId: "utility-bills-client",
  storageBucket: "utility-bills-client.firebasestorage.app",
  messagingSenderId: "95010215061",
  appId: "1:95010215061:web:e70baeeac219d64736f79c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);