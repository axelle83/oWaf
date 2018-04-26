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
