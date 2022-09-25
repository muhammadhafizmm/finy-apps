importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");
importScripts(
    "./precache-manifest.44d66ed330d1d3a52efe6ddf665b1b65.js"
  );
  

firebase.initializeApp({
    apiKey: "AIzaSyAa6aMzTFlXKS8L0yoRuCIhnvhXLn8S1LU",
    authDomain: "finy-3b957.firebaseapp.com",
    projectId: "finy-3b957",
    storageBucket: "finy-3b957.appspot.com",
    messagingSenderId: "389550906500",
    appId: "1:389550906500:web:d90a0689cc5dfb86d976d1"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('BackgroundMessageHandler registered')
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body,
        icon: 'alarm.png'
    };

    return self.registration.showNotification('Nuevo pedido', {body:'Se ha registrado un nuevo pedido'});
});

workbox.core.setCacheNameDetails({prefix: "chatbot-dashboard"});
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});