var crsTitle="PHP and MySQL: Extended Topics";

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
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps12/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps12"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Printing Exercises","phps12pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource2","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=10;
unitTitles[1]="Course Introduction";
unitTitles[2]="Handling File Uploads";
unitTitles[3]="Uploading PHP Files";
unitTitles[4]="Creating JavaScript";
unitTitles[5]="Using Output Buffering";
unitTitles[6]="Using the Improved MySQL Extension";
unitTitles[7]="New MySQL Features";
unitTitles[8]="Using Prepared Statements";
unitTitles[9]="Using PEAR";
unitTitles[10]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phc027,phe032,phj010,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb031,phb032,phb033,phb034,phc024,phc025,phc026,phd030,phd031,phd032,phd033,phd034,phe027,phe028,phe029,phe030,phe031,phf018,phf019,phf020,phf021,phg020,phg021,phg022,phg023,phh022,phh023,phh024,phh025,phi026,phi027,phi028,phi029,phj002,phj003,phj004,phj005,phj006,phj007,phj008,phj009,";
var saQuestions="phb031,phb032,phb033,phb034,phc024,phc025,phc026,phd030,phd031,phd032,phd033,phd034,phe027,phe028,phe029,phe030,phe031,phf018,phf019,phf020,phf021,phg020,phg021,phg022,phg023,phh022,phh023,phh024,phh025,phi026,phi027,phi028,phi029,phj002,phj003,phj004,phj005,phj006,phj007,phj008,phj009,";
var imageQuestions="phb031,phc026,phd031,phe030,phh022,phh023,phi027,phi028,phj002,phj004,phj009,";
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
objectives[2]="Adjust PHP script settings to accept file uploads in your forms|Create folders for storing the file uploads|Set storage folder permissions for maximum security";
objectives[3]="Identify the three necessary parts for file uploads in an HTML form|Create a PHP script that will select a file and store it in the specified directory";
objectives[4]="Identify the differences between working with PHP and working with JavaScript|Build a PHP script that can be used to create a JavaScript";
objectives[5]="Describe the benefits of using the PHP output buffering feature|Create PHP scripts that utilize output buffering";
objectives[6]="Identify the most important of the Improved MySQL Extension functions and their uses";
objectives[7]="Create new database transactions in mysql client|Roll back transaction queries to undo their effect on the database|Commit transaction queries to make the entire transaction permanent";
objectives[8]="Define prepared statements|Bind<I> </I>PHP variables to a query's placeholders|Identify subqueries and their function in MySQL";
objectives[9]="Identify the advantages of using PEAR in your projects|Utilize PEAR to add benchmarking to a PHP script|Define objects and classes used in object-oriented programming";
objectives[10]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> covers extended PHP topics that are worth considering in your development work, but not related to every Web application.<br>";

//Pg Count
var pgCount="2,36,30,40,38,24,24,29,34,10";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,36,29,37,35,23,24,27,31,11";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
