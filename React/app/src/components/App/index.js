/*
 * Npm import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';


/*
 * Local import
 */

import Nav from 'src/containers/Nav';
import NotFound from 'src/components/NotFound';
import routes from 'src/routes';

// import Header from 'src/components/Header';

import ChatBtn from 'src/containers/Chat/ChatBtn';
import ContactBtn from 'src/containers/Chat/ContactBtn';
import Chat from 'src/containers/Chat/Chat';


/*
 * Code
 */


class App extends React.Component {
 changeTitle = ({ pathname }) => {
   // On récupère notre objet de data
   const route = routes[pathname];

   // On modifie le title de la page
   document.title = route.title;
 }

 render() {
   return (
     <div className="container">
       <Switch>
         {Object.keys(routes).map(path => (
           <Route
             exact
             key={path}
             path={path}
             render={() => (
               <main>
                 <Nav buttons={routes[path].buttons} />
                 {routes[path].component}
                 <ChatBtn />
                 <ContactBtn />
                 <Chat />
               </main>
                )
              }
           />
          ))}
         <Route render={() => (
           <main>
             <Nav buttons={routes['/not-found'].buttons} />
             <NotFound />
           </main>
         )}
         />
       </Switch>
     </div>
   );
 }
}

/*
 * Export default
 */
export default App;
