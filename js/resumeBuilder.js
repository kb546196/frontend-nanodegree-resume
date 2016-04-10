//Bio Info
var bio = {
	"name" : "Kate Bullivant",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "k.bullivant@hotmail.co.uk",
		"mobile" : "07792117396",
		"github" : "kb546196",
		"location" : "London"
	},
	"welcomeMessage" : "Hi!",
	"skills" : [
	"Programming","Jouranlism","Lateral thinking","Good under pressure"
	],
	"bioPic": "https://thirdwomanrunning.files.wordpress.com/2015/07/kb-small-picture.jpg"
};
 
var formattedName = HTMLheaderName.replace("%data%", bio.name); 
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github); 
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
var formattedLocation = HTMLworkLocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

//prepend bio info 


$("#header").prepend(formattedRole);
$ ("#header").prepend(formattedName);
$ ("#header").append(formattedPic); 
$ ("#header").append(formattedWelcome); 
$ ("#topContacts").append(formattedLocation);
$ ("#topContacts").append(formattedEmail);
$ ("#topContacts").append(formattedGitHub); 
$ ("#topContacts").append(formattedMobile); 

//prepend bioskills
$("#header").append(HTMLskillsStart); 
for (i = 0; i < 4; i++) {
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
}

//internationalize name button and function
function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() 
	+ name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];  
}

$("#main").append(internationalizeButton);


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
 			"description": "While I have been at Radio 4 I completed a 4 month attachment as an Assistant Producer on Front Row. During this time I pitched ideas, recorded, edited and produced programmes"
 		},
		{		
 			"employer": "BBC, Radio, Bristol", 
 			"title": "Production Management Assistant", 
 			"location": "Bristol",
 			"dates": "June 2011  - September 2011", 
 			"description": "Worked with Radio 4 team based in Bristol offering admin and production support on their book programmes, dramas and Any Questions"
 		}, 
		{		
 			"employer": "BBC, Radio, Events Team", 
 			"title": "Team Assistant", 
 			"location": "London",
 			"dates": "October 2010  - December 2010", 
 			"description": "Admin support to the team who arranged event for BBC Radio, including working on preperation for the Royal Wedding, Edinburgh Festival and Food and Farming awards"
 		} 		
 		]
 }

function displayWork () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle; 

		$(".work-entry:last").append (formattedEmployerTitle);

		var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$("#workExperience").append(formattedworkLocation);

		var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$("#workExperience").append(formattedworkDates);

		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$("#workExperience").append(formattedworkDescription)
	}
}

displayWork();


function locationizer(work_obj)   { 
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location; 
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

//to see the map
$("#mapDiv").append(googleMap);

var projects = {
	"projects" : [
		{
			"title": "Third Woman Running", 
			"dates" : "Spring 2016 - continuing", 
			"description": "Blog about Women's Football in the UK",
			"images" : ["/images/3WR1.jpg", "/images/3WR2.jpg"]
		}
	]
}

function displayProjects () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$("#projects").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$("#projects").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$("#projects").append(formattedProjectDescription);

		var formattedProjectImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$("#projects").append(formattedProjectImages);

	}
}

displayProjects();

var education = {
	"schools": [
		{
			"name": "University of Sheffield",
			"location": "Sheffield, UK",
			"degree": "BA",
			"major": ["English Literature"],
			"dates": "2005-2008"
		}, 
		{
			"name": "Duchess' Community High School",
			"location": "Alnwick, UK",
			"degree": "A-levels",
			"major": ["English Literature", " History", " Classical Civilisations"],
			"dates": "2003-2005"
		}
	],
	"onlineCourses": [
		{
			"school": "Udacity", 
			"title": "Front End Web Design",
			"dates": 2016, 
			"url" : "www.udacity.com" 
		}
	]
}


function displaySchools () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$("#education").append(formattedSchoolName);

		var formattedSchoolDates = HTMLschoolLocation.replace("%data%",education.schools[school].dates);
		$("#education").append(formattedSchoolDates);		

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$("#education").append(formattedSchoolLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$("#education").append(formattedDegree);	

		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$("#education").append(formattedMajor);	}
}

displaySchools();

function displayCourses () {
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$("#education").append(formattedOnlineSchool); 

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$("#education").append(formattedOnlineTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$("#education").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url); 
		$("#education").append(formattedOnlineURL);
	}
}

displayCourses();

