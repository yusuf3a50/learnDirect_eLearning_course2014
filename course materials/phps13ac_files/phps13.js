var crsTitle="PHP and MySQL: Content Management Example";

function AboutLinks()
{
	this.count = 0;
	this.links = new Object();
	this.add = add;
	function add(aboutLink)
	{
		this.links[++this.count] = aboutLink;
	}
}

function AboutLink(id, caption, url)
{
	this.id=id;
	this.caption=caption;
	this.url=url;
}

var aboutLinks=new AboutLinks();

//About Links
aboutLinks.add(new AboutLink("skillassessment","Take a Skill Assessment","sa"));
aboutLinks.add(new AboutLink("scores","View My Scores","scores"));
aboutLinks.add(new AboutLink("glossary","View the Glossary","glossary"));
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps13/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps13"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Copying Supplied Files","phps13sp.htm"));
aboutLinks.add(new AboutLink("resource2","Printing Exercises","phps13pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource3","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=9;
unitTitles[1]="Course Introduction";
unitTitles[2]="Creating the Template";
unitTitles[3]="Creating the Basic Pages";
unitTitles[4]="Managing URLs";
unitTitles[5]="The list() Function";
unitTitles[6]="The serialize() and urlencode() Functions";
unitTitles[7]="Managing Files";
unitTitles[8]="Viewing and Downloading Files";
unitTitles[9]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phd024,phf035,phg020,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb012,phb013,phc019,phc020,phc021,phd022,phd023,phe018,phe019,phe020,phf031,phf032,phf033,phf034,phg018,phg019,phh022,phh023,phh024,phi002,phi003,phi004,phi005,phi006,phi007,phi008,";
var saQuestions="phb012,phb013,phc019,phc020,phc021,phd022,phd023,phe018,phe019,phe020,phf031,phf032,phf033,phf034,phg018,phg019,phh022,phh023,phh024,phi002,phi003,phi004,phi005,phi006,phi007,phi008,";
var imageQuestions="phb013,phc019,phc021,phd023,phe018,phe020,phf033,phf034,phg018,phh022,phi003,phi005,";
var hiddenQuestionUnits="";
var series="phpsql";
var d_crsTitle="";
var d_bookIsbn="";
var d_curtain="true";
var d_series="";

//Dummies Links


//Course Objectives
var objectives = new Array;
objectives[1]="";
objectives[2]="Create a header file for your site that can encompass both CSS and tables|Create a footer file that will provide closure for the HTML page";
objectives[3]="Create a home page for your content management site|Create a script for interaction between your Web interface and a database";
objectives[4]="Create a script to allow for URL properties to be added to your database tables|Determine the appropriate fix for errors reported during troubleshooting|Create a sticky HTML form";
objectives[5]="Create a PHP script for the administrator to allow for updates and enhancements|Build an HMTL form with menus and a submit button to allow database interaction";
objectives[6]="Create a script for your site which allows for users to edit or delete URL records|Build a sticky form that will allow the user to choose between Delete and Edit|Effectively handle error messages for a variety of problems that will occur";
objectives[7]="Create a new database table using SQL commands to store user information|Build a script that allows users to upload files to your database";
objectives[8]="Build PHP scripts that will allow for files to be viewed and downloaded by users|Create a specific page that has the ability to update file records for your site";
objectives[9]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> provides foundational information for building a sample content management site through PHP interactions with a database. <br>";

//Pg Count
var pgCount="2,17,26,27,25,39,23,27,8";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,15,23,25,22,36,21,25,10";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
