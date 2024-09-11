importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyB51jk5avAAgxKPOhSMF5Gxt0S3VMyKd2o",
  authDomain: "meal-master-chef.firebaseapp.com",
  projectId: "meal-master-chef",
  storageBucket: "meal-master-chef.appspot.com",
  messagingSenderId: "240033954708",
  appId: "1:240033954708:web:c22e18b86a47d5a42eed81",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
