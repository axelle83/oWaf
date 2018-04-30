/*
* npm install
*
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
* Local import
 */
import fields from 'src/datas/subscribe';
import SubscribeField from 'src/containers/SubscribeField';

/*
*  Code
 */
class Subscribe extends React.Component {
   onSubmit = (evt) => {
     evt.preventDefault();
     this.props.onSubscribeSubmit();
   }

   render() {
     return (
       <form
         id="subscribe"
         onSubmit={this.onSubmit}
       >
         <div id="subscribe-title">Profil</div>
         <div id="subscribe-me">
           {fields.me.map(field => <SubscribeField key={field.name} {...field} />)}
           <div
             className={
               classNames(
                 'password',
                 {
                 'error-password': this.props.errorpassword,
               },
             )
           }
           >
             Les mots de passe ne sont pas identiques
           </div>
         </div>
         <div className="subscribe-dog">
           <div className="subscribe-dog-title">Mon chien</div>
           {fields.dog.map(field => <SubscribeField key={field.name} {...field} />)}
           <input className="subscribe-dog-sex" type="checkbox" value="Mâle" />Mâle
           <input className="subscribe-dog-sex" type="checkbox" value="Femelle" />Femelle
           <button className="subscribe-dog-validate">
           Valider
           </button>
         </div>
         <button id="subscribe-dog-add">
           Ajouter un chien
         </button>
         <button id="subscribe-submit">
           S'inscrire
         </button>
       </form>
     );
   }
}

Subscribe.propTypes = {
  onSubscribeSubmit: PropTypes.func.isRequired,
  errorpassword: PropTypes.bool,
};
Subscribe.defaultProps = {
  errorpassword: 'false',
};

/*
* Export default
 */

export default Subscribe;
