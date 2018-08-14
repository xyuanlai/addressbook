var app = new Vue({
  el: '#app',
  data: {
    contacts: [
      { name: 'SYLAI', phone: '886-988-069-720', mail: 'SYLAI@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' },
      { name: 'NUVOTON', phone: '886-3-5770066', mail: 'NUVOTON@nuvoton.com' }
    ]
  }
})


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
    console.log('Service Worker Registered. Scope is: ' + registration.scope);

    registration.pushManager.getSubscription().then(function(sub){
      if (sub == null) {
        //subscribeUser();
        console.log('Not subscribed to push service.');
      } else {
        console.log('Subscription object: ', sub);
      }
    });
  })
  .catch(function(err) {
    console.log('Service Worker registration failed: ', err);
  });
}

// function subscribeUser() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.ready.then(function(reg) {

//       reg.pushManager.subscribe({
//         userVisibleOnly: true
//       }).then(function(sub) {
//         console.log('Endpoint URL: ', sub.endpoint);
//       }).catch(function(e) {
//         if (Notification.permission === 'denied') {
//           console.warn('Permission for notifications was denied');
//         } else {
//           console.error('Unable to subscribe to push', e);
//         }
//       });
//     })
//   }
// }

Notification.requestPermission(
  function(status) {
    console.log('Notification permission status: ', status);
  }
);

function displayNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg){
      var options = {
        body: 'Here is a notification body.',
        icon: 'images/logo_1000x1000-01.png',
        viberate: [100, 50, 100],
        data: { 
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Check it out!'},
          {action: 'close', title: 'No thanks.'}
        ]
      }
      reg.showNotification('Hello World!', options);
    });
  }
}