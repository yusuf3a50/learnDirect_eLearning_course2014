var crsTitle="PHP and MySQL: Web Application Security";

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
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps11/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps11"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Copying Supplied Files","phps11sp.htm"));
aboutLinks.add(new AboutLink("resource2","Printing Exercises","phps11pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource3","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=12;
unitTitles[1]="Course Introduction";
unitTitles[2]="Preventing Multiple Submissions";
unitTitles[3]="Validating the Right Form";
unitTitles[4]="Handling HTML";
unitTitles[5]="Validating Data";
unitTitles[6]="JavaScript Form Validation";
unitTitles[7]="Defining a Pattern with Regular Expressions";
unitTitles[8]="Matching Regular Expression Patterns";
unitTitles[9]="Matching and Replacing Patterns";
unitTitles[10]="Database Security and Encryption";
unitTitles[11]="Secure Salt Storage";
unitTitles[12]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phe023,phg022,phl012,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb030,phb031,phb032,phc015,phc016,phc017,phd012,phd013,phd014,phe020,phe021,phe022,phf020,phf021,phf022,phg019,phg020,phg021,phh016,phh017,phi015,phi016,phj017,phj018,phj019,phk016,phk017,phk018,phl002,phl003,phl004,phl005,phl006,phl007,phl008,phl009,phl010,phl011,";
var saQuestions="phb030,phb031,phb032,phc015,phc016,phc017,phd012,phd013,phd014,phe020,phe021,phe022,phf020,phf021,phf022,phg019,phg020,phg021,phh016,phh017,phi015,phi016,phj017,phj018,phj019,phk016,phk017,phk018,phl002,phl003,phl004,phl005,phl006,phl007,phl008,phl009,phl010,phl011,";
var imageQuestions="phl003,";
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
objectives[2]="Create a session variable to indicate if a form has been submitted|Use an identifier code to keep each submission of a form separate";
objectives[3]="Use the <TT><tt>test</tt></TT> database for form validation|Use operators in PHP to check that only appropriate form inputs are received";
objectives[4]="Define the different functions PHP uses to handle HTML|Use the HTML handling functions in your PHP scripts";
objectives[5]="Explain how type casting operates and what benefit it provides|Use type casting in your PHP scripts";
objectives[6]="Explain what JavaScript can add to your PHP scripts|Use JavaScript to validate a form";
objectives[7]="Define the symbols used in regular expressions|Group characters together|Use character classes to match types of strings";
objectives[8]="Identify the functions PHP uses to match patterns|Perform pattern matching in your PHP scripts";
objectives[9]="Define the different functions used for finding and replacing patterns|Use pattern replacement functions in your PHP scripts";
objectives[10]="Identify common security practices for your databases|Define each of the encryption functions used by MySQL|Use the encryption functions in MySQL";
objectives[11]="Use secure encryption functions in your PHP scripts|Store your encryption salt in a database table";
objectives[12]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> provides methods for you to increase the security of your Web applications using PHP and MySQL, including form validation, pattern definition and data encryption.<br>";

//Pg Count
var pgCount="2,33,20,16,24,23,23,19,17,20,20,13";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,33,19,15,24,23,23,18,17,20,20,14";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
