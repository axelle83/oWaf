/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import HomeVisiteur from 'src/components/HomeVisiteur';
import HomeMembre from 'src/components/HomeMembre';
import Cgu from 'src/components/Cgu';

/*
 * Code
 */
const routes = {
  '/not-found': {
    buttons: {
      Accueil: {
        path: '/',
      },
    },
  },
  '/': {
    nav: 'Home',
    component: <HomeVisiteur />,
    buttons: {
      Inscription: {
        path: '/subscribe',
      },
      Connexion: {
        path: '/connect',
      },
    },
  },
  '/membre': {
    nav: 'Home',
    component: <HomeMembre />,
    buttons: {
      Carte: {
        path: '/map',
      },
      Blog: {
        path: '/blog',
      },
      Déconnexion: {
        path: '/disconnect',
      },
    },
  },
  '/cgu': {
    nav: 'Cgu',
    component: <Cgu />,
    buttons: {
      Accueil: {
        path: '/',
      },
    },
  },
};

export default routes;
