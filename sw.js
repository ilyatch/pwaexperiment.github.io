self.addEventListener('install', async event => {
    console.log('install event')
  });
  
  self.addEventListener('fetch', async event => {
    console.log('fetch event')
  });


  self.addEventListener('message', event => {
    // event is an ExtendableMessageEvent object
    console.log(`The client sent me a message: ${event.data}`);
  
    event.source.postMessage(`Hi client, you sent me ${event.data}`);
  });