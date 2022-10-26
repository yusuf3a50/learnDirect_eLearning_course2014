var crsTitle="PHP and MySQL: Developing Web Applications";

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
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps09/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps09"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Printing Exercises","phps09pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource2","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=9;
unitTitles[1]="Course Introduction";
unitTitles[2]="Adjusting Behavior for Server Settings";
unitTitles[3]="Sending Values Manually";
unitTitles[4]="Using Hidden Form Inputs";
unitTitles[5]="Editing Existing Records";
unitTitles[6]="Paginating Query Results";
unitTitles[7]="Making Sortable Displays";
unitTitles[8]="Understanding HTTP Headers";
unitTitles[9]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phb015,phc015,phh027,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb012,phb013,phb014,phc012,phc013,phc014,phd023,phd024,phd025,phe022,phe023,phe024,phf023,phf024,phf025,phf026,phg017,phg018,phg019,phh023,phh024,phh025,phh026,phi002,phi003,phi004,phi005,phi006,phi007,phi008,phi009,";
var saQuestions="phb012,phb013,phb014,phc012,phc013,phc014,phd023,phd024,phd025,phe022,phe023,phe024,phf023,phf024,phf025,phf026,phg017,phg018,phg019,phh023,phh024,phh025,phh026,phi002,phi003,phi004,phi005,phi006,phi007,phi008,phi009,";
var imageQuestions="phb014,phd023,phf023,phf025,phg017,phi002,phi003,phi004,phi005,";
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
objectives[2]="Implement the <tt><FONT FACE=\"Courier New\">ini_set()</tt></FONT> function|Use the <tt><FONT FACE=\"Courier New\">function_exists()</tt></FONT> function";
objectives[3]="Manually send values to a PHP script";
objectives[4]="Use hidden form inputs";
objectives[5]="Edit existing records";
objectives[6]="Paginate query results";
objectives[7]="Make sortable displays";
objectives[8]="Use the <tt>header()</tt> function";
objectives[9]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> provides information about a number of independent topics that are present in more sophisticated Web applications.<br>";

//Pg Count
var pgCount="2,18,19,26,28,30,23,29,11";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,17,17,26,25,28,20,28,10";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
