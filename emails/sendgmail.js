var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'simon214d@gmail.com',
    pass: 'mokkil123'
  }
});

var mailOptions = {
  from: 'simon214d@gmail.com',
  to: 'simo215d@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//you need to do this btw: https://myaccount.google.com/lesssecureapps