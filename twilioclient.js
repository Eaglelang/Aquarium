const config= require('../route/config');
const twilio = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN);
const accountSid= process.env.TWILIO_ACCOUNT_SID;
const authToken= process.env.TWILIO_AUTH_TOKEN


module.export= {
    verifyAndSendOtp: (phoneNumber, via)=>{
        return twilio.verify.services(config.VERIFY_SERVICE)
        .verifications
        .create({
           to: phoneNumber,
           channel: via
        })
        .then(response=> Promise.resolve(response))
        .catch(err=> Promise.reject(err))
    },
   verifyOTP: (phoneNumber, token)=>{
       return twilio.verify.services(config.VERIFY_SERVICE)
   .verificationChecks
   .create({
       to: phoneNumber,
       code: token
   })
   .then(check=> promise.resolve(check))
   .catch(err=> promise.reject(err))
    } 
}
module.exports= sendSms;