# Push Notifications & server

- Start push-service (node index.js)
- Generate VAPID keys by hitting /generate-vapid-keys in push-service, and enter public key in main.js in this project and public and private keys in push-service .env. Only generate these keys once.
- Start push-notifications client (node index.js) and click 'Enable push messaging' and allow to generate a pushSubscription object
- Copy the push subscription json output into the push-service
- Call /push on push-service to send a push notification to the browser. 
