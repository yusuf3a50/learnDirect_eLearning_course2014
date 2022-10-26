var crsTitle="PHP and MySQL: User Registration Example";

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
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps14/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps14"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Printing Exercises","phps14pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource2","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=10;
unitTitles[1]="Course Introduction";
unitTitles[2]="Creating the Templates";
unitTitles[3]="Writing the Configuration Scripts";
unitTitles[4]="Creating the Home Page";
unitTitles[5]="Registration";
unitTitles[6]="Activating an Account";
unitTitles[7]="Logging In and Logging Out";
unitTitles[8]="Resetting a Password";
unitTitles[9]="Changing a Password";
unitTitles[10]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phj011,phj012,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb016,phb017,phb018,phc027,phc028,phc029,phd012,phd013,phe027,phe028,phe029,phf013,phf014,phg020,phg021,phg022,phh017,phh018,phh019,phi016,phi017,phj002,phj003,phj004,phj005,phj006,phj007,phj008,phj009,phj010,";
var saQuestions="phb016,phb017,phb018,phc027,phc028,phc029,phd012,phd013,phe027,phe028,phe029,phf013,phf014,phg020,phg021,phg022,phh017,phh018,phh019,phi016,phi017,phj002,phj003,phj004,phj005,phj006,phj007,phj008,phj009,phj010,";
var imageQuestions="phb016,phb017,phe028,phg020,phi016,";
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
objectives[2]="Create template files";
objectives[3]="Create a configuration file and database script";
objectives[4]="Create a home page";
objectives[5]="Create a registration script";
objectives[6]="Create an activation page";
objectives[7]="Create the <FONT FACE=\"Courier New\">login.php</FONT> and <FONT FACE=\"Courier New\">logout.php</FONT> scripts";
objectives[8]="Create a script that can reset a forgotten password";
objectives[9]="Create a script that can change a user's password";
objectives[10]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> provides an overview of the user registration system.<br>";

//Pg Count
var pgCount="2,21,33,21,36,17,24,21,20,18";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,21,32,15,31,16,24,21,19,14";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
