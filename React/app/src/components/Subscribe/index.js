/*
* npm install
*
 */
import React from 'react';


/*
* Local import
 */
import fields from 'src/datas/subscribe';
import SubscribeField from 'src/containers/SubscribeField';

/*
*  Code
 */
const Subscribe = () => (
  <form id="subscribe">
    <div id="subscribe-title">Profil</div>
    <div id="subscribe-me">
      {fields.me.map(field => <SubscribeField key={field.name} {...field} />)}
    </div>
    <div id="subscribe-dog">
      <div id="subscribe-dog-title">Mon chien</div>
      {fields.dog.map(field => <SubscribeField key={field.name} {...field} />)}
      <input id="subscribe-dog-sex" type="checkbox" value="Mâle" />Mâle
      <input id="subscribe-dog-sex" type="checkbox" value="Femelle" />Femelle
      <button id="subscribe-dog-validate">
        Valider
      </button>
    </div>
    <button id="subscribe-submit">
      S'inscrire
    </button>
  </form>
);

/*
* Export default
 */

export default Subscribe;
