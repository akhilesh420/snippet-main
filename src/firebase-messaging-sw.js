// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/[the number of version matching with firebase in package.json]/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/[for example: 7.16.1]/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

// Snippet web
// firebase.initializeApp({
//   apiKey: "AIzaSyBd54cIG7k7xe7nDry63bsL44-Rxjg5Vck",
//   authDomain: "snippet-web-9818a.firebaseapp.com",
//   databaseURL: "https://snippet-web-9818a.firebaseio.com",
//   projectId: "snippet-web-9818a",
//   storageBucket: "snippet-web-9818a.appspot.com",
//   messagingSenderId: "66404037854",
//   appId: "1:66404037854:web:524cb216acdf27ac1cbe4f",
//   measurementId: "G-9PQTNK63Q0"
// });

// Snippet test
firebase.initializeApp({
  apiKey: "AIzaSyACM_RWsgy2XC_JXEPaPlqg_AH3x6obxz0",
  authDomain: "snippet-test2.firebaseapp.com",
  databaseURL: "https://snippet-test2-default-rtdb.firebaseio.com",
  projectId: "snippet-test2",
  storageBucket: "snippet-test2.appspot.com",
  messagingSenderId: "136731973343",
  appId: "1:136731973343:web:5205b68be85459482ffb6a",
  measurementId: "G-MLMGEFPKCE"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


