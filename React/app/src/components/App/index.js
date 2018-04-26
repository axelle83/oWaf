/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */

import Header from 'src/components/Header';

import ChatBtn from 'src/containers/Chat/ChatBtn';
import ContactBtn from 'src/containers/Chat/ContactBtn';
import Chat from 'src/containers/Chat/Chat';


/*
 * Code
 */
const App = () => (
  <div id="app">
    Hello World!
    <Header />
    <ChatBtn />
    <ContactBtn />
    <Chat />
  </div>
);


/*
 * Export default
 */
export default App;
