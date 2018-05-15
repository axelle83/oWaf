/*
 * Npm import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/*
 * Local import
 */

import routes from 'src/routes';

import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';

import Nav from 'src/containers/Nav';
import ChatBtn from 'src/containers/Chat/ChatBtn';
import ContactBtn from 'src/containers/ContactBtn';
import Chat from 'src/containers/Chat/Chat';
import Contact from 'src/containers/Contact';
import Login from 'src/containers/Login';

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
                 <ChatBtn visible={routes[path].chat} />
                 <ContactBtn />
                 <Chat />
                 <Login visible={routes[path].login} />
                 <Contact />
                 <Footer />
               </main>
                )
              }
           />
          ))}
         <Route
           exact
           path="/blog"
           render={() => window.location = 'http://217.70.189.93/blog/'}
         />
         <Route render={() => (
           <main>
             <Nav buttons={routes['/not-found'].buttons} />
             <NotFound />
             <Footer />
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
