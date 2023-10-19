importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB6ZGzvSYJpZmrBPfoWrDwAuUPd2tm033I",
  authDomain: "pwa-test-app-704f7.firebaseapp.com",
  projectId: "pwa-test-app-704f7",
  storageBucket: "pwa-test-app-704f7.appspot.com",
  messagingSenderId: "1058554603883",
  appId: "1:1058554603883:web:3faef1cf97963d982e442e",
  measurementId: "G-RXN4DGS4JH",
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   icon: "/firebase-logo.png",
  // };
  // self.registration.showNotification(notificationTitle, notificationOptions);
});
