const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

var join = require('path').join;
const app = express();

var indexPath = join(__dirname, '..', '/public/index.html');
var assetsPath = join(__dirname, '..', 'public');

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
 * POST
 */
app.post('/send', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  const output = `
    <h3>Expéditeur</h3>
    <p>${req.body.email}</p>
    <h3>Objet</h3>
    <p>${req.body.object}</p>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: 'owafusion@gmail.com',
      pass: '1oWaf&4filles',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'axelle.lecroq@yahoo.fr',
    to: 'owafusion@gmail.com',
    subject: 'Message de contact oWaf',
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('message envoyé', info.messageId);
    res.render('contact', { msg: 'message envoyé' });
  });
  transporter.close();
});

/*
 * LISTEN
 */
app.listen(4000, () => {
  console.log('listening on *:4000');
});
