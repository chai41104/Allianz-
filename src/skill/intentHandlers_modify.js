var processUtterance = require('./handlers/processUtterance')
var utility = require('./utility')

module.exports = {
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" );
		//utility.sendEmail('This is a new test!');
		//utility.callPhone();
		//utility.sendSMS('Message sent to broker Andy by Alliot via Twilio');
	},
	"CallIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "call" );
		utility.callPhone();
	},	
	"SureIntent": function ( intent, session, request, response ) {
		utility.sendEmail('Hi Andy, Bob is looking to talk with you. Please call him back!');
		utility.sendSMS('Hi Andy, Bob is looking to talk with you. Please call him back! by Alliot via Twilio');
		processUtterance( intent, session, request, response, "sure" );
	},
}