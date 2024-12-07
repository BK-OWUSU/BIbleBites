const router = require('express').Router()
const questions = require('../static-db/questionsBank');
const nodemailer = require('nodemailer');


router.get('/' , (req , res)=>{
   res.render('index',{questions: questions})
})

router.post('/send-message',(req, res) => {
   const {name, email, message} = req.body;
   console.log(process.env.EMAIL)
   console.log(process.env.PASS)
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });   

    var mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: name,
      text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.redirect(`/#contact`);
});

module.exports  = router
