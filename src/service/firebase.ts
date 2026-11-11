import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDxyX8QhzYF43B0bobQQNqqZ9VI2kZ11JQ",
  authDomain: "pixelgrafic-c1135.firebaseapp.com",
  databaseURL: "https://pixelgrafic-c1135-default-rtdb.firebaseio.com",
  projectId: "pixelgrafic-c1135",
  storageBucket: "pixelgrafic-c1135.firebasestorage.app",
  messagingSenderId: "576405957698",
  appId: "1:576405957698:web:f8a40d58d36ebd0f3b51db",
  measurementId: "G-SPVY6YG54J",
};

export const app = initializeApp(firebaseConfig);
