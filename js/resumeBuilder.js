var data = '%data%';

// BIO Section
var bio = {
    "name": "Alex Erfurt",
    "role": " ---- Tech Enthusiast & Web Developer Apprentice",
    "contacts": {
        "mobile": "+353-83-450-9703",
        "email": "erfurtalex@gmail.com",
        "github": "alexerfurt",
        "twitter": "@alex_erfurt",
        "location": "Dublin, Ireland"
    },
    "welcomeMessage": "Hi there, I'm Alex and this is my first page! ;) ",
    "skills": [
        "Interdisciplinary Knowledge (Engineering, Consulting, Sales)", "Creating Things That Really Matter", "Aspire to Inspire People", "Thought Leadership", "Solve for X"
    ],
    "biopic": "images/alex.jpg"
};

bio.display = function() {
	var $header = $('#header');
	var $topContacts = $("#topContacts");
	var $footerContacts = $("#footerContacts");

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formattedRole);
    $header.prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $topContacts.append(formattedMobile);
    $footerContacts.append(formattedMobile);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $topContacts.append(formattedEmail);
    $footerContacts.append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $topContacts.append(formattedTwitter);
    $footerContacts.append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $topContacts.append(formattedGithub);
    $footerContacts.append(formattedGithub);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $topContacts.append(formattedLocation);
    $footerContacts.append(formattedLocation);
	
    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    $header.append(formattedBiopic);

    var formattedWelcomemsg = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
    $header.append(formattedWelcomemsg);

    $header.append(HTMLskillsStart);

	bio.skills.forEach (function(skill) {
		var formattedSkills = HTMLskills.replace(data, skill);
        $header.append(formattedSkills);
     });
};

bio.display();

// Work Section

var work = {
    "jobs": [{
        "employer": "Google Inc.",
        "title": "Associate Account Strategist in SMB Sales",
        "location": "Dublin, Ireland",
        "dates": "March 2014 - Present",
        "description": "Advising multiple clients on online marketing strategies"
    }, {
        "employer": "Freelance",
        "title": "Management Consultant",
        "location": "Nuremberg, Germany",
        "dates": "Nov 2011 - Oct 2013",
        "description": "Worked on several projects to optimize work flows"
    }, {
        "employer": "Porsche AG",
        "title": "Intern",
        "location": "Stuttgart, Germany",
        "dates": "Oct 2010 - March 2011",
        "description": "Worked on several internal projects to optimize work flows, especially in the area of purchasing and how the company can be integrated into the 'mothership'"
    }]
};

work.display = function() {
	work.jobs.forEach(function(job) {
		
		$("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);

		var formattedTitle = HTMLworkTitle.replace(data, job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace(data, job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace(data, job.location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace(data, job.description);
		$(".work-entry:last").append(formattedDescription);
        });
};

work.display();

// Project Section
// TODO: add more projects and pics

var projects = {
    "projects": [{
        "title": "Scripted an 'Email Automation'-Tool",
        "dates": "2014 - present",
        "description": "Script to send email confirmation automatically in oder to simplify and enhance the team's work-flow",
        "images": ["images/emautomizer.png"]
    }, {
        "title": "Mobile Product Expert & mSite Specialist",
        "dates": "2015 - present",
        "description": "Supporting teams cross-functionally with mobile product knowledge and mSite expertise",
        "images": ["images/alexe.gif"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
		
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace(data, project.title);
       	$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace(data, project.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace(data, project.description);
		$(".project-entry:last").append(formattedDescription);

		if (project.images.length > 0) {
			var formattedImage = HTMLprojectImage.replace(data, project.images);
			$(".project-entry:last").append(formattedImage);
		}
	});
};

projects.display();

// Education Section

var education = {
    "schools": [{
        "name": "University of Erlangen-Nuremberg (FAU)",
        "location": "Erlangen, Germany",
        "degree": "M.Sc.",
        "majors": ["Engineering & Management"],
        "dates": "2011 - 2013",
        "url": "http://www.fau.de"
    }, {
        "name": "Hochschule Furtwangen University (HFU)",
        "location": "Furtwangen, Germany",
        "degree": "B.Eng.",
        "majors": ["Product Engineering"],
        "dates": "2006 - 2010",
        "url": "http://www.hs-furtwangen.de"
    }, {
        "name": "California State University, East Bay",
        "location": "Hayward, CA, USA",
        "degree": "Visiting Student",
        "majors": ["Industrial Engineering"],
        "dates": "2009 - 2010",
        "url": "http://www.csueb.com"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2014",
        "url": "https://www.udacity.com/course/ud304"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/ud804"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/ud245"
    },{
        "title": "HTML5 Canvas",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/ud292"
    }, {
        "title": "Object-oriented JavaScript",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/ud015"
    }, {
        "title": "Website Performance Optimization",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/ud884"
    }, {
        "title": "Intro to AJAX",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/ud110"
    }, {
        "title": "JavaScript Design Patterns",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/courses/ud989"
    }, {
        "title": "JavaScript Testing",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/ud549"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
		
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace(data, school.name);
		var formattedNameUrl = formattedName.replace("#", school.url);

		var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
		var formattedNameDegree = formattedNameUrl + formattedDegree;
       	$(".education-entry:last").append(formattedNameDegree);

		var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
		$(".education-entry:last").append(formattedMajor);

		var formattedDates = HTMLschoolDates.replace(data, school.dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace(data, school.location);
		$(".education-entry:last").append(formattedLocation);
	});

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
		
		var formattedTitle = HTMLonlineTitle.replace(data, course.title);
		var formattedTitleURL = formattedTitle.replace("#", course.url);
		$(".education-entry:last").append(formattedTitleURL);
		
		var formattedDates = HTMLonlineDates.replace(data, course.dates);
		$(".education-entry:last").append(formattedDates);
	});
};

education.display();

// Adding Google Maps to the resume

$("#mapDiv").append(googleMap);

// Internationalization

var inName = function(name) {
    var splitName = bio.name.split(" ");
    var firstName = splitName[0];
    var lastName = splitName[1].toUpperCase();
    name = firstName + " " + lastName;

    return name;
};

$("#main").append(internationalizeButton);