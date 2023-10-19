import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB6ZGzvSYJpZmrBPfoWrDwAuUPd2tm033I",
  authDomain: "pwa-test-app-704f7.firebaseapp.com",
  projectId: "pwa-test-app-704f7",
  storageBucket: "pwa-test-app-704f7.appspot.com",
  messagingSenderId: "1058554603883",
  appId: "1:1058554603883:web:3faef1cf97963d982e442e",
  measurementId: "G-RXN4DGS4JH",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(FirebaseApp);

export { FirebaseApp, messaging };
