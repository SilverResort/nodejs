const fs=require('fs')

fs.writeFile('welcome.txt',"welcomme to NodeJS", function(err){
    if(err){
        console.log(err)
    }else{
        console.log('file created succesfully')
    }
})

console.log('Starting')

fs.readFile("./welcome.txt",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log("Asynchronous Read" + data)
    }
})

const data=fs.readFileSync("./welcome.txt")
console.log("Synchronous Read sync" + data)
        
console.log('Finishing')

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);

var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '@gmail.com',
      pass: 'myapppassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: '@gmail.com',
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