/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*var name = "Will Crew";
 var role = "Product Management";

 var awesomeThoughts = "I am will crew and i am awesome";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("awesome","fun");

$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness","banjo","tennis"];

$("#main").append(skills[0]);

console.log(skills.length);
*/

var bio = {
	"name" : "Will Crew",
	"role" : "Product Management",
	"age" : 32,
	"skills" : ["Product Management", "Business Development", "Partner Relations", "Product Marketing"],
	"contacts" : {
		"email" : "wrcrew@gmail.com",
		"mobile" : "209-304-2616",
		"github" : "wrcrew",
		"location" : "New York, NY"
	},
	"bioPic" : "https://lh3.googleusercontent.com/-mBVNREeWUIo/AAAAAAAAAAI/AAAAAAAAHYw/fXSWOk6VdDQ/s120-c/photo.jpg",
	"welcomeMessage" : "Thanks for stopping by",
	"location" : "New York, NY"
}

var projects = {
	"projects" : [
		{
			"title" : "Udacity Project 1",
			"dates" : "2015",
			"description" : "An introductory project built with Bootstrap. The project uses Bootstrap's grid infrastructure as well as several modals.",
			"images" : ["images/proj1-1.png","images/proj1-2.png"],
			"location" : "New York, NY"
		},
		{
			"title" : "Interesting Fake Project",
			"dates" : "2015",
			"description" : "For what it lacks in truth, this project makes up for in creativity. Although completely fabricated and fake, an undercurrent of authenticity runs through this project.",
			"images" : ["images/fake-1.png","images/fake-2.png","images/fake-3.png"],
			"location" : "New York, NY"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Kenshoo",
			"title" : "Director of Product, Mobile",
			"location" : "New York, NY",
			"dates" : "2010 - 2015",
			"description" : "Kenshoo is the global leader in agile marketing software with a focus on paid search and social ads. Responsible for corporate mobile product strategy and execution. "
		},
		{
			"employer" : "Google",
			"title" : "Account Manager",
			"location" : "San Francisco, CA",
			"dates" : "2006 - 2010",
			"description" : "Working with advertisers and agencies to get the most out of Google's ad and analytics solutions."
		}
		]
}


var education = {
	"schools": [
		{
			"name" : "University of the Pacific",
			"location" : "Stockton, CA",
			"degree" : "M.B.A.",
			"major" : ["Business"],
			"dates" : "2005 - 2006",
			"url" : "http://www.pacific.edu/"
		},
		{
			"name" : "University of the Pacific",
			"location" : "Stockton, CA",
			"degree" : "B.S.",
			"major" : ["Business"],
			"dates" : "2001 - 2005",
			"url" : "http://www.pacific.edu/"
		}
	],
	"onlineCourses" : [
		{
			"school" : "Udacity",
			"title" : "Front end web development nanodegree",
			"dates" : "2015",
			"url" : "http://www.udacity.com",
			"location" : "New York, NY"
		}
	]
}

header.display = function() {
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

}
header.display();

//<!-- Contacts Section -->

topContacts.display = function() {
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
}
topContacts.display();




function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  $(".work-entry:last").append(formattedLocation);

	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	  $(".work-entry:last").append(formattedDates);

	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name)
		formattedSchoolName = formattedSchoolName.replace("#",education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location)
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major)
		$(".education-entry:last").append(formattedSchoolMajor);

	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	}
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
		formattedCourseName = formattedCourseName.replace("#",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedCourseName);
		console.log(formattedCourseName);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
		$(".education-entry:last").append(formattedCourseSchool);
		var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates)
		$(".education-entry:last").append(formattedCourseDates);



	}
}

education.display();

/* $("#main").append(internationalizeButton);

function inName(fullname) {
	var nameArray =[];
	nameArray = fullname.split(" ");

	var firstName = nameArray[0];

	var lastName = nameArray[1];

	firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
	lastName = lastName.toUpperCase();



	var nameComplete = firstName + " " + lastName;
	return nameComplete;
	console.log(nameComplete);
}


console.log(inName("wilL cReW"));
*/

projects.display = function() {
	for (foo in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[foo].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[foo].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[foo].description);
		$(".project-entry:last").append(formattedDescription);

		var imageCount = 0;
		while (imageCount < projects.projects[foo].images.length) {
			var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[foo].images[imageCount]);
			$(".project-entry:last").append(formattedImages);
			imageCount = imageCount + 1;
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);

//<!-- Footer Contacts Section -->
footerContacts.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
}
footerContacts.display();
