const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
/* eslint-disable-next-line */
const nodemailer = require('nodemailer');

var join = require('path').join;
const app = express();


var indexPath = join(__dirname, '..', '/public/index.html');
var assetsPath = join(__dirname, '..', 'public');


/*
 * Express
 */
// Static files
app.use(express.static(assetsPath, { index: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//   res.render('contact');
// });

app.get('/', function(req, res) {
  res.sendFile(indexPath);
  console.log('mail');
});
app.post('/send', (req, res) => {
  const output = `
    <p>Message de contact</p>
    <h3>Expéditeur</h3>
    <p>Mail: ${req.body.mail}</p>
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

app.listen(4000, () => {
  console.log('listening on *:4000');
});
