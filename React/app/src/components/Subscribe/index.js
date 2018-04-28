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
    <div id="subscribe-me">
      {fields.me.map(field => <SubscribeField key={field.name} {...field} />)}
    </div>
    <div id="subscribe-dog">
      {fields.dog.map(field => <SubscribeField key={field.name} {...field} />)}
    </div>
    <button id="form-submit">
      S'inscrire
    </button>
  </form>
);

/*
* Export default
 */

export default Subscribe;
