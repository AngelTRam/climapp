importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBw2s8ReBL8s-AmTvrBFS5fgCMlK4upyF4",
    authDomain: "clima-6f90e.firebaseapp.com",
    projectId: "clima-6f90e",
    storageBucket: "clima-6f90e.appspot.com",
    messagingSenderId: "18571349168",
    appId: "1:18571349168:web:096dcb62042acb3bc23f75"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app)


messaging.onBackgroundMessage(payload=>{
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo192.png"
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})