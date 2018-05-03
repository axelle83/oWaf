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
import Subscribe from 'src/containers/Subscribe';
import Profile from 'src/components/Profile';
import Map from 'src/components/Map';
import Login from 'src/containers/Login';

/*
 * Code
 */
const routes = {
  '/test': {
    nav: 'Test',
    component: <Login />,
    chat: true,
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
      Membre: {
        path: '/membre',
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
    component: <Map />,
    chat: true,
    login: false,
    buttons: {
      Accueil: {
        path: '/',
      },
      Profil: {
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
