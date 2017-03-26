var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"YesIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yes" )
	},
	"ExistingPolicyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "existing policy" )
	},
	"MakingClaimsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "making claims" )
	},
	"RecentClaimIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "recent claim" )
	},
	"NoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "no" )
	},
	"CallIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "call" )
	},
	"SureIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "sure" )
	},
	"ManufacturingIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "manufacturing" )
	},
}