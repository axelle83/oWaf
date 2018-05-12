/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import HomeVisiteur from 'src/containers/HomeVisiteur';
import HomeMembre from 'src/containers/HomeMembre';
import Cgu from 'src/components/Cgu';
import Subscribe from 'src/containers/Subscribe';
import Profile from 'src/containers/Profile';
import MapPage from 'src/components/MapPage';
import Disconnect from 'src/containers/Disconnect';

/*
 * Code
 */
const routes = {
  '/disconnect': {
    nav: 'Disconnect',
    component: <Disconnect />,
    chat: false,
    buttons: {
      Accueil: {
        path: '/',
      },
    },
  },
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
    chat: false,
    login: false,
    buttons: {
      Inscription: {
        path: '/subscribe',
      },
      Connexion: {
        path: '/connect',
      },
    },
  },
  '/connect': {
    nav: 'Login',
    component: <HomeVisiteur />,
    chat: false,
    login: true,
    buttons: {
      Accueil: {
        path: '/',
      },
    },
  },
  '/subscribe': {
    nav: 'Subscribe',
    component: <Subscribe />,
    chat: false,
    login: false,
    buttons: {
      Accueil: {
        path: '/',
      },
      'Mon profil': {
        path: '/profile',
      },
    },
  },
  '/membre': {
    nav: 'Home',
    component: <HomeMembre />,
    chat: true,
    login: false,
    buttons: {
      'Mon profil': {
        path: '/profile',
      },
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
  '/profile': {
    nav: 'Profile',
    component: <Profile />,
    chat: true,
    login: false,
    buttons: {
      Accueil: {
        path: '/',
      },
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
  '/map': {
    nav: 'Map',
    component: <MapPage />,
    chat: true,
    login: false,
    buttons: {
      Accueil: {
        path: '/',
      },
      'Mon profil': {
        path: '/profile',
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
    chat: false,
    login: false,
    buttons: {
      Accueil: {
        path: '/',
      },
    },
  },
};

export default routes;
