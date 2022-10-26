var isProductionServer=false;
if (location.host.indexOf("web2") > -1 || location.host.indexOf("davinci") > -1 || location.host.indexOf("jrubino") > -1 ) isProductionServer=true;

var parentExists = true;
try {var doc = parent.document;} catch(e){parentExists = false;}

var isMindLeaders = true; // Set to false for CD/WEBI delivery
//var emailScoresTo="trainer@mycompany.com"; // add an email address, e.g., training@mycompany.com, to allow a student to email scores.
var trackScores=true; // for DynamicCD. Set to false to turn off cookie and txt file tracking of scores
var isDynamicCd=false; //  for DynamicCD.
var useJsSearch=true; // Turns on javascript search in the courses.
var useJWPlayer=true; // set to true to use FLV movies in JW Player.
var flvFlashVersion=9;

var rootDir = "/dpec";

if (parentExists && typeof(parent.coursewareHandler) != "undefined")
	useClientSideData=parent.coursewareHandler.useTdScoring;
else
	useClientSideData=(location.search.indexOf("tdscoring=1") > -1) ? true : false;

// Launch from Skillport
if (parentExists && typeof(parent.coursewareHandler) != "undefined")
	isSpLaunch=(parent.coursewareHandler.spLaunchUrl != null) ? true : false;
else
	isSpLaunch=(location.search.indexOf("splaunchurl=") > -1) ? true : false;

// Zip and ship. Zipped courses live in the ml-crs_crsacro directory. 
// If "ml-crs" is in the path, other directory paths are set based on the ml-crs_crsacro directory
// The zipAndShip variable is a flag used in shared code. It replaces env=ZS; the TF env is used. JAR, June12
var standaloneDir="/ml-crs";
//standaloneDir="/zip_ship"; // FOR TESTING

zipAndShip=false;
if (location.href.indexOf(standaloneDir) > -1 && !isSpLaunch)
{
	zipAndShip=true;
	keyDir=location.href.substring(location.href.indexOf(standaloneDir), location.href.length);
	keyDir=keyDir.substring(0,keyDir.indexOf("/",1));
	rootDir=location.href.substring(0,location.href.indexOf(standaloneDir)) + keyDir;
	rootDir=rootDir.substring(rootDir.indexOf("//") + 2, rootDir.length); //remove the http:
	rootDir=rootDir.substring(rootDir.indexOf("/"), rootDir.length); // remove the host.
	var c_hideEvaluation=true;
	isMindLeaders = false;
}

if (isSpLaunch)
{
	zipAndShip=true;
	c_hideEvaluation=true;
	isMindLeaders = false;
}

var rootDirSalsa = "/salsa";
var scriptsDirectory = rootDir + "/scripts/";
var scriptsDirectorySalsa = rootDirSalsa + "/scripts/";
var sharedDirectory = rootDir + "/shared/";
var coursesDirectory = rootDir + "/courses/";
var customCoursesDirectory = rootDir + "/customcourses/";
var salsaCoursesDirectory = rootDirSalsa + "/series/";
var siteCustomDirectory = rootDir + "/custom/sites/";
var tmLobsDirectory=coursesDirectory + "_tm_lobs/lobs/";

//************************** Video Server Setup ****************************
// Streaming server for inhouse production
var inhouseStreamingServer = "mms://trix/";
inhouseVideoCourses="";
// Use the following line to play video courses over a local network; otherwise, comment out.
// var localCoursePath="file://netname/subdirs/dpec/courses/";
var streamingServer = "mms://rm.mindleaders.com/";

var flvStreamingServer="//flix.mindleaders.com/vod/";
var inhouseFlvStreamingServer="//slambridisxp/vod/";

var useStreamingServer=isMindLeaders;

// Comment out the following line if you move course videos to a streaming server.
if (!isMindLeaders && location.href.toLowerCase().indexOf("video.htm") == -1 && location.href.toLowerCase().indexOf("video_2011.htm") == -1) useStreamingServer=false;
//*******************************************************************************
// Use streaming server on skillport
if (isSpLaunch) useStreamingServer=true;

var mlomTech = "JAVA";

// set fullPath for use on www.mindleaders.com only
var fullPath="";
if (location.host=="www.mindleaders.com") fullPath="http://courses.mindleaders.com";

localizationCode="";
localizedSharedDirectory=sharedDirectory;
if (parentExists && typeof(parent.coursewareHandler) != "undefined" && parent.coursewareHandler.localizationCode !="")
{
	localizedSharedDirectory= rootDir + "/shared_" + parent.coursewareHandler.localizationCode + "/";
}
else
{
	// For Accessible SA and Qeval: set localization code based on window opener
	if (self.name.indexOf("acc_question_window") != -1 || self.name.indexOf("qComments") !=-1) localizationCode=window.opener.localizationCode;
		else localizationCode=getParm("loc");
	if (localizationCode !="") localizedSharedDirectory= rootDir + "/shared_" + localizationCode + "/";
}
var resourseStringJs = fullPath + localizedSharedDirectory + "js/resource_strings.js";
document.write("<SCRIPT Language=\"Javascript\" SRC=\"" + resourseStringJs + "\"></S" + "CRIPT>");

// include special_cases.js
var specialCasesJs = fullPath + sharedDirectory + "js/special_cases.js";
document.write("<SCRIPT Language=\"Javascript\" SRC=\"" + specialCasesJs + "\"></S" + "CRIPT>");

function getCoursesDirectory(courseID)
{
	if (courseID != null && courseID.substr(0,2) == "c_")
		return customCoursesDirectory;
	else
		return coursesDirectory;
}

// This is needed here to get loc parm for popup pages, since site.js is loaded before mlclientpage
function getParm(parm)
{
	if (location.search=="") return "";
	var parmList = "&" + location.search.substring(1, location.search.length) + "&";
	var re = new RegExp("&" + parm + "=([^&]*)&","i");
	var foundArray = re.exec(parmList);
	if (foundArray == null) return "";
	return foundArray[1].toLowerCase();
}

// ************** Set BSV Host Streaming Server by Site ID ********************
function setStreamingServer()
{
	siteId=parent.getParm("siteid").toLowerCase();
	if (siteId=="" || typeof(bsvHostSites) == "undefined") return;
	for (i=1; i <= bsvHostSites.length; i++)
	{
		if (siteId==bsvHostSites[i]) streamingServer = bsvHostServers[i];
	}
}

// var wasaTempMessage = "<font color='red'><b>**Message Here**</b></font><br><br>"
var wasaTempMessage = "";
