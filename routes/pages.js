const router = require('express').Router()
const generalQuestions = require('../static-db/generalQuestions');
const churchHistoryQuestions = require('../static-db/churchHistoryQuestions');
const nodemailer = require('nodemailer');
const bibleStoryQuestions = require('../static-db/bibleStoryQuestions');
const bibleQuotesQuestions = require('../static-db/bibleQuatesQuestions');


router.get('/' , (req , res)=>{
   res.render('index',{questions: generalQuestions})
})

router.get('/church-history' , (req , res)=>{
   res.render('index',{questions: churchHistoryQuestions})
})

router.get('/bible-story' , (req , res)=>{
   res.render('index',{questions: bibleStoryQuestions})
})

router.get('/quote-books' , (req , res)=>{
   res.render('index',{questions: bibleQuotesQuestions})
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
