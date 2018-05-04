
import { CONTACT_SUBMIT } from './reducers/contact';

const mailMiddleware = store => next => (action) => {
  switch (action.type) {
    case CONTACT_SUBMIT:
    console.log('middle');
      // smtpTransport = mailer.createTransport('SMTP', {
      //   service: 'Gmail',
      //   auth: {
      //     user: 'owafusion@gmail.com',
      //     pass: '1oWaf&4filles',
      //   },
      // });
      //
      // mail = {
      //   from: 'axelle.lecroq@yahoo.fr',
      //   to: 'owafusion@gmail.com',
      //   subject: 'test',
      //   html: 'blabla',
      // };
      //
      // smtpTransport.sendMail(mail, function(error, response) {
      //   if(error) {
      //     console.log("Erreur lors de l'envoie du mail!");
      //     console.log(error);
      //   }
      //   else {
      //     console.log("Mail envoyé avec succès!");
      //   }
      //   smtpTransport.close();
      // });

        break;

    default:
      break;
  }

  // Passe au suivant
  next(action);
};

export const contactSubmit = () => ({
  type: CONTACT_SUBMIT,
});

/**
 * Export
 */
export default mailMiddleware;
