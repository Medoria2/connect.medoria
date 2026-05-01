importScripts('https://www.gstatic.com/firebasejs/11.7.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.3/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCw9Mc8gA2qBrhwJfvTE0iWuZZPK9AQlq0",
  authDomain: "medoria-a5818.firebaseapp.com",
  projectId: "medoria-a5818",
  storageBucket: "medoria-a5818.firebasestorage.app",
  messagingSenderId: "384299164898",
  appId: "1:384299164898:web:21b227e91e62456693eabb",
  measurementId: "G-HP48P9G147"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // If payload contains notification (normal FCM), show it.
  if (payload.notification) {
    const notificationTitle = payload.notification.title;
    console.log(payload.notification.title);
    const notificationOptions = {
      body: payload.notification.body,
      icon: 'https://platform.medoria.ru/icons/Icon-192.png',
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
    return;
  }

  // Handle data-only messages (e.g., callkit payloads sent without 'notification').
  try {
    const data = payload.data && payload.data.data ? JSON.parse(payload.data.data) : null;
    if (data && data.type && data.type === 'callkit') {
      const title = data.caller_name
        ? `${data.caller_name} приглашает на ${data.is_video ? 'видеоконференцию' : 'аудиоконференцию'}`
        : 'Входящий вызов';
      const body = data.is_video ? 'Вас приглашают на видеоконференцию' : 'Вас приглашают на аудиоконференцию';
      const options = {
        body: body,
        icon: 'https://platform.medoria.ru/icons/Icon-192.png',
        data: data,
        tag: data.id_booking || undefined,
      };
      self.registration.showNotification(title, options);
      return;
    }
  } catch (e) {
    // ignore JSON parse errors
    console.error('Error parsing data-only push payload', e);
  }

  // Fallback: if nothing matched, log payload
  console.log('No notification displayed for payload', payload);
});