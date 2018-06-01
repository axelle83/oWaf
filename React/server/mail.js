const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const join = require('path').join;

const app = express();

// const indexPath = join(__dirname, '..', '/public/index.html');
const assetsPath = join(__dirname, '..', 'public');

const pass = '1oWaf&4filles';
/*
 * Express
 */
app.use(express.static(assetsPath, { index: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
 * POST - sends contact message to contact mail & confirm
 */
app.post('/send', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  // initializes transporter
  const transporter = nodemailer.createTransport('SMTP', {
    auth: {
      user: 'owafusion@gmail.com',
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // message to be send
  const output = `
    <h3>Expéditeur</h3>
    <p>${req.body.email}</p>
    <h3>Objet</h3>
    <p>${req.body.object}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  const mailOptions = {
    from: req.body.email,
    to: 'owafusion@gmail.com',
    subject: 'Message de contact oWaf',
    html: output,
  };

  const mailConfirmOptions = {
    from: 'owafusion@gmail.com',
    to: req.body.email,
    subject: 'Confirmation d\'envoi de votre message de contact oWaf',
    html: output,
  };

  // sends message to contact mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('message envoyé', info.messageId);
    // sends confirm
    transporter.sendMail(mailConfirmOptions, (errorC, infoC) => {
      if (errorC) {
        return console.log(errorC);
      }
      console.log('message envoyé', infoC.messageId);
    });
  });


  transporter.close();
});
/*
 * POST  -forgot password
 */
app.post('/pass', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  // initializes transporter
  const transporter = nodemailer.createTransport('SMTP', {
    auth: {
      user: 'owafusion@gmail.com',
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // message to be send
  const output = `
    <h3>Voici votre nouveau mot de passe pour accéder au site oWaf :</h3>
    <p>${req.body.password}</p>
  `;

  const mailOptions = {
    to: req.body.email,
    subject: 'oWaf - Mot de passe oublié',
    html: output,
  };

  // sends password by mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('message envoyé', info.messageId);
  });
  transporter.close();
});

/*
 * LISTEN
 */
app.listen(4000, () => {
  console.log('listening on *:4000');
});
