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
	"biopic": "https://thirdwomanrunning.files.wordpress.com/2015/07/kb-small-picture.jpg",
	"display" : function () {
			var formattedName = HTMLheaderName.replace("%data%", bio.name); 
			var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github); 
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
			var formattedLocation = HTMLworkLocation.replace("%data%", bio.contacts.location);
			var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
			var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

			$("#header").prepend(formattedRole);
			$ ("#header").prepend(formattedName);
			$ ("#header").append(formattedPic); 
			$ ("#header").append(formattedWelcome); 
			$ ("#topContacts").append(formattedLocation);
			$ ("#topContacts").append(formattedEmail);
			$ ("#topContacts").append(formattedGitHub); 
			$ ("#topContacts").append(formattedMobile); 
			
			$("#header").append(HTMLskillsStart);
				for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
	}
};

bio.display();  


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
 		], 
 		"display" : function () {
 			for (var i = 0;  i < work.jobs.length; i++) {
 				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle; 

				$(".work-entry:last").append (formattedEmployerTitle);

				var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
				$(".work-entry:last").append(formattedworkLocation);

				var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
				$(".work-entry:last").append(formattedworkDates);

				var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
				$(".work-entry:last").append(formattedworkDescription)
	} 
}
 }; 


work.display();


//My projects information
var projects = {
	"projects" : [
		{
			"title": "Third Woman Running", 
			"dates" : "Spring 2016 - continuing", 
			"description": "Blog about Women's Football in the UK",
			"images" : ["images/3WR1.jpg", "images/3WR2.jpg"]
		}
	], 
	 	"display" : function () {
 		for (var i = 0;  i < projects.projects.length; i++) {
 		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage1 = HTMLprojectImage.replace("%data%",projects.projects[i].images[0]);
		var formattedProjectImage2 = HTMLprojectImage.replace("%data%",projects.projects[i].images[1]);
		$(".project-entry:last").append(formattedProjectImage1 + formattedProjectImage2);
	}
}
}; 

projects.display(); 
//function to display projects


//My education info 

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
	], 
	"display": function() {
		for (var i = 0;  i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
			$(".education-entry:last").append(formattedSchoolName);

			var formattedSchoolDates = HTMLschoolLocation.replace("%data%",education.schools[i].dates);
			$(".education-entry:last").append(formattedSchoolDates);		

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			$(".education-entry:last").append(formattedDegree);	

			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
			$(".education-entry:last").append(formattedMajor);
		}
		for (var i = 0;  i < education.onlineCourses.length; i++) {
			$(".education-entry:last").append(HTMLonlineClasses);
		
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			$(".education-entry:last").append(formattedOnlineSchool); 

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			$(".education-entry:last").append(formattedOnlineTitle);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url); 
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}; 

education.display(); 



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


//function to collect locations
function locationizer(work_obj)   { 
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location; 
		locationArray.push(newLocation);
	}

	return locationArray;
}

//to see the map
$("#mapDiv").append(googleMap);
