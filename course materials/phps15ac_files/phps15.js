var crsTitle="PHP and MySQL: E-Commerce Example";

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
aboutLinks.add(new AboutLink("copyrights","Copyright Information","/dpec/courses/phps15/frt001.htm"));
aboutLinks.add(new AboutLink("ceus","Continuing Education Units (CEUs)","/dpec/shared/ceus/ceus.htm?phps15"));
aboutLinks.add(new AboutLink("evaluate","Evaluate This Course","evaluate"));
aboutLinks.add(new AboutLink("coursecontent","Course Content","abt101.htm"));
aboutLinks.add(new AboutLink("resource1","Printing Exercises","phps15pd.htm"));
aboutLinks.add(new AboutLink("credits","Credits","abt104.htm"));
aboutLinks.add(new AboutLink("accessibility","Accessibility","accInstruction"));
aboutLinks.add(new AboutLink("resource2","Conventions","abt103.htm"));


//SCOTYTPE
var scoType="Lesson";
var unitTitles=new Array;

//Unit Titles
var numberOfUnits=8;
unitTitles[1]="Course Introduction";
unitTitles[2]="Creating the Database";
unitTitles[3]="The Administration Side";
unitTitles[4]="Creating the Public Template";
unitTitles[5]="The Product Catalog";
unitTitles[6]="The Shopping Cart";
unitTitles[7]="Recording the Orders";
unitTitles[8]="Course in Review";


//If any AW sims exist in the crs/sa
var courseHasSims=false;
var saHasSims=false;
var doIts="";

//If any FLASH components are in the crs/sa
var courseHasFlash=true;
var courseFlashActivities="phh008,phh009,phh010,";
var courseFlashSims="";
var saFlashSims="";
var cQuestions="pha002,phb024,phb025,phb026,phb027,phc037,phc038,phc039,phc040,phd018,phd019,phd020,phe034,phe035,phf026,phf027,phf028,phg022,phg023,phg024,phg025,phh002,phh003,phh004,phh005,phh006,phh007,";
var saQuestions="phb024,phb025,phb026,phb027,phc037,phc038,phc039,phc040,phd018,phd019,phd020,phe034,phe035,phf026,phf027,phf028,phg022,phg023,phg024,phg025,phh002,phh003,phh004,phh005,phh006,phh007,";
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
objectives[2]="Use normalization to design a database|Create a database in MySQL|Explain the three broad areas of security to consider for your site";
objectives[3]="Write a script to connect to the MySQL database|Write a script for adding items to the database";
objectives[4]="Create the <FONT FACE=\"Courier New\"><tt>header.html</tt>, <tt>footer.html</tt></FONT> and <FONT FACE=\"Courier New\"><tt>index.php</tt></FONT> files";
objectives[5]="Create a script to allow users to browse the catalog|Create a script to allow users to get specific information about a product";
objectives[6]="Create a script for adding items to your shopping cart|Create a script to view or update your shopping cart";
objectives[7]="Create a page for users to submit their orders|Explain the aspects of your e-commerce site that are beyond the scope of this course";
objectives[8]="";


//Course Synopsis
var synopsis="<I>" + crsTitle + "</I> provides information and samples for you to create an e-commerce site using PHP and MySQL, including creating the database, creating the public and administrative pages, and managing the shopping cart. <br>";

//Pg Count
var pgCount="2,29,43,24,41,41,29,11";


var copyrightYear=2006;


//custom_start
var hasStreamingAudio=false;
var pgCount="2,29,42,21,36,31,26,11";
var flashVersion="6";
//custom_end//

var flashVersion="6";
var noAlternateGifs=true;

// End JS
