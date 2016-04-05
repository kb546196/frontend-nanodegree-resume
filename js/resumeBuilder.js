//Bio Info
var bio = {
	"name" : "Kate Bull",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "k.bull@web.co.uk",
		"mobile" : "07777777777",
		"twitter" : "katebull13",
		"location" : "London"
	},
	"welcomeMessage" : "Hi!",
	"skills" : [
	"Great under pressure","programming","radio production","jouranlism"
	],
	"bioPic": "images/fry.jpg"
};
 
var formattedName = HTMLheaderName.replace("%data%", bio.name); 
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter); 
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
var formattedLocation = HTMLworkLocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

//prepend bio info 

$ ("#header").prepend(formattedSkills); 
$ ("#header").prepend(formattedWelcome); 
$("#header").prepend(formattedRole);
$ ("#header").prepend(formattedName);
$ ("#header").prepend(formattedPic); 
$ ("#topContacts").append(formattedLocation);
$ ("#topContacts").append(formattedEmail);
$ ("#topContacts").append(formattedTwitter); 
$ ("#topContacts").append(formattedMobile); 

console.log(formattedWelcome);
//work info 

var work = {
 	"jobs" : [
 		{
 			"employer": "BBC, Radio 4", 
 			"title": "Production-Co-ordinator", 
 			"location": "London",
 			"dates": "September 2011 - present", 
 			"description": "Working accross live and pre-recorded programmes, including on Front Row, Free Thinking, The Film Programme and Saturday Review, Open Book, The Verb, The Strand and Summer Nights"
 		},
 		{
 			"employer": "BBC, Radio 4", 
 			"title": "Assistant Producer", 
 			"location": "London",
 			"dates": "May 2014 - September 2014", 
 			"description": "While I have been at Radio 4 I completed a 4 month attachment as an Assistant Producer on Front Row."
 		},
		{		
 			"employer": "BBC, Radio, Bristol", 
 			"title": "Production Management Assistant", 
 			"location": "Bristol",
 			"dates": "June 2011  - September 2011", 
 			"description": "Worked with Radio 4 team based in Bristol offering admin and production support"
 		}, 
		{		
 			"employer": "BBC, Radio, Events Team", 
 			"title": "Team Assistant", 
 			"location": "London",
 			"dates": "October 2010  - December 2010", 
 			"description": "Admin support to the team who arranged event for BBC Radio"
 		} 		
 		]
 }

var projects = {
	"projects" : [
		{
			"title": "Third Woman Running", 
			"dates" : "Spring 2016 - continuing", 
			"description": "Blog about Women's Football in the UK",
			"images" : "BLANK"
		}
	]
}

 var education = {
	"schools": [
		{
			"name": "University of Sheffield",
			"city": "Sheffield, UK",
			"degree": "BA",
			"major": ["English Literature"]
		}, 
		{
			"name": "Duchess' Community High School",
			"city": "Alnwick, UK",
			"degree": "A-levels",
			"major": ["English Literature", "History", "Classical Civilisations"]
		}
	],
	"onlineCourses": [
		{
			"school": "Udacity", 
			"course": "Front End Web Design",
			"dates": 2016, 
			"url" : "www.udacity.com" 
		}
	]
}
