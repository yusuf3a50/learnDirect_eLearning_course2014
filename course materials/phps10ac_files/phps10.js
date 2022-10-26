var crsTitle="PHP and MySQL: Cookies and Sessions";

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
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps10/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps10"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Printing Exercises","phps10pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource2","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=13;
unitTitles[1]="Course Introduction";
unitTitles[2]="Setting Cookies";
unitTitles[3]="Accessing Cookies";
unitTitles[4]="Setting Cookie Parameters";
unitTitles[5]="Deleting Cookies";
unitTitles[6]="Setting Session Variables";
unitTitles[7]="Accessing Session Variables";
unitTitles[8]="Deleting Session Variables";
unitTitles[9]="Changing Session Behavior";
unitTitles[10]="Changing the Session Cookie Settings";
unitTitles[11]="Using Sessions without Cookies";
unitTitles[12]="Improving Session Security";
unitTitles[13]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phc015,phd016,phf015,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb019,phb020,phb021,phc012,phc013,phc014,phd011,phd012,phd013,phd014,phd015,phe019,phe020,phe021,phf011,phf012,phf013,phf014,phg012,phg013,phg014,phh012,phh013,phh014,phi012,phi013,phi014,phi015,phj011,phj012,phj013,phk014,phk015,phk016,phl016,phl017,phl018,phl019,phm002,phm003,phm004,phm005,phm006,phm007,phm008,phm009,phm010,phm011,phm012,";
var saQuestions="phb019,phb020,phb021,phc012,phc013,phc014,phd011,phd012,phd013,phd014,phd015,phe019,phe020,phe021,phf011,phf012,phf013,phf014,phg012,phg013,phg014,phh012,phh013,phh014,phi012,phi013,phi014,phi015,phj011,phj012,phj013,phk014,phk015,phk016,phl016,phl017,phl018,phl019,phm002,phm003,phm004,phm005,phm006,phm007,phm008,phm009,phm010,phm011,phm012,";
var imageQuestions="";
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
objectives[2]="Send a cookie";
objectives[3]="Access a cookie";
objectives[4]="Identify the arguments of the <tt>setcookie()</tt> function|Set a cookie's parameters";
objectives[5]="Delete a cookie|Create a logout link";
objectives[6]="Set session variables|Begin a session";
objectives[7]="Access session variables";
objectives[8]="Delete a session";
objectives[9]="Identify session configuration settings|Use your own session names";
objectives[10]="Identify advantages of sessions and cookies|Change the session cookie settings";
objectives[11]="Use sessions without cookies";
objectives[12]="Use sessions more securely";
objectives[13]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> provides information about using cookies and sessions with PHP to overcome the statelessness of the Web.<br>";

//Pg Count
var pgCount="2,23,17,17,23,16,16,15,16,14,18,20,14";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,22,16,17,22,16,15,15,16,14,18,20,15";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
