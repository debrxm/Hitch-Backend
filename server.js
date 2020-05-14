const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'officialremediclothing@gmail.com',
    pass: 'Remedi2...store',
  },
});
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.get('/', (req, res) => res.send('Server is Running'));
app.post('/jointrip', async (req, res) => {
  const { email, subject, html } = req.body;
  let info = await transporter.sendMail({
    from: 'officialozzystore@gmail.com',
    to: 'officialremediorder@gmail.com',
    subject,
    html,
  });
  res.status(200).json('success');
});

module.exports = app;

app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
