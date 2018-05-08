/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */

import Header from 'src/components/Header';
import MapPage from 'src/components/MapPage';
// import Places from 'src/components/Map/Places';


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
    <MapPage />
    {/* <MyMapComponent isMarkerShown /> */}
    {/* <Places /> */}
  </div>
);


/*
 * Export default
 */
export default App;
