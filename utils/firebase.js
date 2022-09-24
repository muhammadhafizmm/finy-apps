import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: "AIzaSyAa6aMzTFlXKS8L0yoRuCIhnvhXLn8S1LU",
        authDomain: "finy-3b957.firebaseapp.com",
        projectId: "finy-3b957",
        storageBucket: "finy-3b957.appspot.com",
        messagingSenderId: "389550906500",
        appId: "1:389550906500:web:d90a0689cc5dfb86d976d1",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: "BHMqBDrE0AxZS99ix2MlBTmeNucQSYu_syLUrtlsXk7ALi6lGa8n7jGQkiWUgWLd_oOpGOKHGqgbE27VM8Tm2V4",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
