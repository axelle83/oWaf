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
// import Cgu from 'src/components/Cgu';
import Footer from 'src/components/Footer';
import routes from 'src/routes';

// import Header from 'src/components/Header';

import ChatBtn from 'src/containers/Chat/ChatBtn';
import ContactBtn from 'src/containers/ContactBtn';
import Chat from 'src/containers/Chat/Chat';
import Contact from 'src/containers/Contact';
// import Login from 'src/containers/Login';
/*
 * Code
 */


class test extends React.Component {
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
                 {/* <Login visible={routes[path].login} /> */}
                 <Contact />
                 <Footer />
               </main>
                )
              }
           />
          ))}
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
export default test;
