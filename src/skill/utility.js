var ses = require('node-ses')
var client = ses.createClient({ key: 'key', secret: 'secret key', amazon: 'website' });

module.exports = {
    "sendEmail": function ( message ) {
        // Give SES the details and let it construct the message for you.
        client.sendEmail({
           to: 'chai41104@hotmail.com;praven.enjapuri@gmail.com;'
         , from: 'alok@voicerobot.tech'
         , subject: 'greetings'
         , message: message
         , altText: 'plain text'
        }, function (err, data, res) {
           console.log(err);
        });
    },
    "callPhone": function () {
        var accountSid = 'accountSid';
        var authToken = "accountToken";
        var client = require('twilio')(accountSid, authToken);

        client.calls.create({
            url: "http://demo.twilio.com/docs/voice.xml",
            to: "+447873124771",
            from: "+441732601093"
        }, function(err, call) {
            if(err) console.log(err);
            else console.log(call.sid);
            process.stdout.write(call.sid);
        });
    },
    "sendSMS": function (message) {
        var accountSid = 'accountSid';
        var authToken = "accountToken";
        var client = require('twilio')(accountSid, authToken);
        client.messages.create({
            body: message,
            to: '+447873124771',  // Text this number
            from: '+441732601093' // From a valid Twilio number
        }, function(err, call) {
            if(err) console.log(err);
            else console.log(call.sid);
            process.stdout.write(call.sid);
        });
    }
}
