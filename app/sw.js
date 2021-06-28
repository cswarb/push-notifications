self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.', event);
  console.log(event.data.json());
  const notificationServerData = event.data.json();

  const title = 'Push test';
  const options = {
    body: notificationServerData.body,
    icon: './images/icon.png', //Descriptive icon depending on actiomn
    badge: './images/badge.png', //Small AT logo
    // image: './images/badge.png', //Large image, not needed?
    // sound: './sounds/1.mp3',
    // tag: 'new-lead', //adding a tag to a notification opts in to a behavior where any existing notification with the same tag is replaced.
    actions: [ //Unqiue buttons that can be accessed by the click event to do specific things
      { action: 'View', title: 'View thing', icon: ''},
      { action: 'Reply', title: 'Reply to thing', icon: '' },
    ],
    dir: 'ltr',
    silent: true,
    requireInteraction: false,
    timestamp: Date.now(),
    data: notificationServerData.data
  };

  //Fire some analytics events?

  //Do some other async stuff to get data into notification and join with Promise.all?

  event.waitUntil(self.registration.showNotification(title, options));
});


self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.', event);

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://google.com')
  );

  ////////////can also focus on pages rather than opening new windows/tabs (as long as they are on the same origin)...
  // const urlToOpen = new URL('/new-url/1234', self.location.origin).href;

  // const promiseChain = clients.matchAll({
  //   type: 'window',
  //   includeUncontrolled: true
  // }).then((windowClients) => {
  // //list of currently open tabs and windows on same origin
  //   let matchingClient = null;

  //   for (let i = 0; i < windowClients.length; i++) {
  //     const windowClient = windowClients[i];
  //     if (windowClient.url === urlToOpen) {
  //       matchingClient = windowClient;
  //       break;
  //     }
  //   }

  //   if (matchingClient) {
  //     return matchingClient.focus();
  //   } else {
  //     return clients.openWindow(urlToOpen);
  //   }
  // });

  // event.waitUntil(promiseChain);
});

self.addEventListener('notificationclose', function (event) {
  const dismissedNotification = event.notification;

  //Some analytics events?
  const promiseChain = Promise.resolve();
  event.waitUntil(promiseChain);
});


//Notification recipies: https://developers.google.com/web/fundamentals/push-notifications/common-notification-patterns