importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAa6aMzTFlXKS8L0yoRuCIhnvhXLn8S1LU",
    authDomain: "finy-3b957.firebaseapp.com",
    projectId: "finy-3b957",
    storageBucket: "finy-3b957.appspot.com",
    messagingSenderId: "389550906500",
    appId: "1:389550906500:web:d90a0689cc5dfb86d976d1"
});

const messaging = firebase.messaging();