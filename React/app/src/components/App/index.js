/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import ChatBtn from 'src/containers/Chat/ChatBtn';
import ContactBtn from 'src/containers/Chat/ContactBtn';
import Chat from 'src/containers/Chat/Chat';

/*
 * Code
 */
const App = () => (
  <div id="app">
    Hello World!
    <ChatBtn />
    <ContactBtn />
    <Chat />
  </div>
);


/*
 * Export default
 */
export default App;
