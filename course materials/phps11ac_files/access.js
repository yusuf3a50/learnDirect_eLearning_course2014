
function includeJs(jsName)
{
	var js="<SCRIPT Language=\"Javascript\" SRC=\"" + jsName + "\"></S" + "CRIPT>";
	document.write(js);
}

// Javascript Answer Analysis -- switch to frame
if (useClientSideData && parent == null)
{
	location.href=rootDir + "/acc_frame.htm" + location.search;
}
else
{
	// this.window.name="acwindow";
	if(typeof(crsAcronym)=="undefined") crsAcronym=ThisPage.getPassedParm("acro")
	if (typeof(showGlossary) == "undefined") showGlossary=true;
	if (typeof(hasEncyclopedia) == "undefined") hasEncyclopedia=false;
	if (typeof(showSA) == "undefined") showSA=true;
	
	isPrintVersion=ThisPage.getPassedParm("printversion");
	useFsStyle=(ThisPage.getPassedParm("fs")==1) ? true : false; //coursewareHandler is not available
	// Turn off selection in food safety courses print version
	if (isPrintVersion && useFsStyle) document.onselectstart=new Function ("return false")
	
	isTfCourse=false;
	if (crsAcronym.indexOf("07ec") >  -1 || crsAcronym.indexOf("07uk") > -1) isTfCourse=true;
	
	includeJs(sharedDirectory + "params/params.js");
	
	if (window.opener != null && typeof(window.opener) != "undefined" && typeof(window.opener.coursewareHandler) != "undefined")
		params = window.opener.coursewareHandler.params;
	
	var coursewareHandler = null;
	var makeCoursewareHandler = true;
	includeJs(sharedDirectory + "js/courseware.js");
	
	var courseJS="<SCRIPT Language=\"Javascript\" SRC=\"" + getCoursesDirectory(crsAcronym) + crsAcronym + "/"+ crsAcronym+ ".js" + "\"></S" + "CRIPT>";
	document.write(courseJS);
	var isDummies=(crsAcronym.substring(0,2)=="d_") ? true : false;
	
	if (isPrintVersion)
	{
		var printJS="<SCRIPT Language=\"Javascript\" SRC=\"" + sharedDirectory + "js/printbut.js" + "\"></S" + "CRIPT>";
		document.write(printJS);
	}
	
	var wnd3rdPartyLms = parent;
	if (useClientSideData) wnd3rdPartyLms = parent.parent;
	
	// food safety style features
	if (useFsStyle) showSA=false;
	printStyle="<style>"
	if (isPrintVersion)
	{
		printStyle+="body{font-family: verdana;font-size:9pt}";
		printStyle+=".pgBulletText{font-family:verdana;font-size:9pt;}";
		printStyle+=".progWords{color: #52527D;font-family: verdana;font-size: 9pt;}";
		printStyle+=".bulletText{color: #52527D;font-family: verdana;font-size: 9pt;}";
		printStyle+=".overlayLabel{color: #B37035;font-weight: bold;font-family: verdana;font-size: 10pt;padding-bottom: 0px;}";
		printStyle+=".cLabel{color: #B37035;font-weight: bold;font-family: verdana;padding-bottom: 0px;}";
		printStyle+=".printPic{position:relative;border:solid;border-width:thin;}";
		printStyle+=".printTopic{page-break-before:always;page-break-after:avoid;font-size:11pt;}";
		printStyle+=".printTopicAssessment{display:none;}";
		printStyle+=".printLesson{page-break-before:always;page-break-after:avoid;font-size:12pt;}";
	}
	else
	{
		printStyle+=".overlayLabel{font-weight: bold;padding-bottom: 0px;}";
		printStyle+=".cLabel{font-weight: bold;padding-bottom: 0px;}";
	}
	printStyle+="</style>"
	
	if (useFsStyle) document.write(printStyle);
	
}

function openAccSA()
{
	if (isPrintVersion) return;
	dest=localizedSharedDirectory + "access/acsainst.htm?access=1&course=" + crsAcronym + "&sims=no";
	coursewareHandler.floatWin(dest, 'acc_question_window','location=no,status=yes,menubar=yes,toolbar=yes,resizable=yes,width=620,height=420,scrollbars=yes');
}

// hide hidden questions and renumber questions as needed
numHiddenQuestions=0;
function insertAccQuestion(questionNum, pg, insertBreak)
{
	if (isPrintVersion) return;
	if (typeof(insertBreak) != "undefined") insertBreak="<BR>";
		else insertBreak=""
	unitLetter = pg.substring(2, 3).toLowerCase();
	questionNum = questionNum - numHiddenQuestions;
	linkText=insertBreak + "<a href=\"javascript:openAccQuestion('" + pg + "')\">" + resStr.accQuestion + " " + questionNum + "</a>" + insertBreak;
	document.write (linkText);

	// keep a list of questions asked so that quesRec can be modified for ZS
	if (useClientSideData) parent.accQuestionsAsked+= pg.substring(2, pg.length-4).toLowerCase() + ",";
}

function openAccQuestion(pg)
{
	if (useClientSideData) parent.coursewareHandler.inSkillAssessment=false;
	dest=getCoursesDirectory(crsAcronym) + crsAcronym + "/" + pg;
	coursewareHandler.floatWin(dest, 'acc_question_window','location=no,status=yes,menubar=yes,toolbar=yes,resizable=yes,width=620,height=420,scrollbars=yes');
}

// initialize the registry
var keyRegistry = new Object;
var lastTopic=0;
// Each key is an entry in the object.
// All keys should be specified uppercase (input is case insensitive)
keyRegistry["B"] = new Array("go", "back");
keyRegistry["C"] = new Array("go", "techsupport");
keyRegistry["H"] = new Array("go", "achelp");
keyRegistry["N"] = new Array("go", "nexttopic");
keyRegistry["P"] = new Array("go", "previoustopic");
if (showGlossary) keyRegistry["G"] = new Array("go", "glossary");
if (ThisPage.allowSA(crsAcronym)) keyRegistry["A"] = new Array("go", "sa");
if (ThisPage.allowScores(crsAcronym)) keyRegistry["S"] = new Array("go", "scores");
keyRegistry["X"] = new Array("go", "exit");
// Test if captureEvents method exists
capEvents = (document.captureEvents);
if (ThisPage.isIE)
{
	if (capEvents) document.captureEvents(Event.KEYPRESS)
	document.onkeypress = captureKeystrokes;
}
else
	document.onkeydown = captureKeystrokes;

function captureKeystrokes(ev) {
	if (ThisPage.isIE) // Map event object
	{
		if (capEvents)
		{
			event = ev;
			event.keyCode = ev.which
			event.srcElement = ev.target
		}
	}
	else
	{
		event = ev;
		event.srcElement = ev.target
	}
	if (event==null) event = ev
	var key = String.fromCharCode(event.keyCode).toUpperCase()
	var entry = keyRegistry[key]
	// If valid entry and not within an input control

	if ((entry!=null) && (event.srcElement.type==null)) {
			switch (entry[0].toLowerCase()) {
				case "input":
					/* document.forms[entry[1]].elements[entry[2]].focus()*/
					break;
				case "bookmark":
					document.location.hash = entry[1]
					break;
				case "link":
					window.location = entry[1]
					break;
			case "go":
				navigate(entry[1], "");
				break;
		}
		// Do not let browser process key
		return false
	}
}
function navigate(whichWindow,specialParms)
{
	if (isPrintVersion && (whichWindow.toLowerCase() != "nexttopic" || whichWindow.toLowerCase() != "prevtopic") ) return;
	switch (whichWindow.toLowerCase()) {
		case "nexttopic":
			if (lastTopic < totalTopics){
				lastTopic++;
				goTopic="topic" + lastTopic;
					document.location.hash = goTopic
			}
			break;
		case "previoustopic":
			if (lastTopic <= 1){
				goTopic="top"
			}
			else {
				lastTopic--;
				goTopic="topic" + lastTopic;
			}
			document.location.hash = goTopic
			break;
		case "achelp":
			if (useFsStyle)
			{
				eParm=hasEncyclopedia ? "1" : "0";
				if (isTfCourse) eParm+="&istfcourse=1"
				location.href=localizedSharedDirectory + "access/achelp_fs.htm?ency=" + eParm;
			}
				else location.href=localizedSharedDirectory + "access/achelp.htm?loc=" + localizationCode;
			break;
		case "transcript":
			seriesTranscript = sharedDirectory + "images/skins/1/pages/scores_series_acc.htm";
			stParms= "&" + params.toURLString();
			if (coursewareHandler.useTdScoring)
			{
				if (typeof(parent.calcScoresWithSa) != "undefined") parent.calcScoresWithSa();
				stParms="?tdscoring=1&jsp=/lms/learn/seriesScoreData.jsp&" + coursewareHandler.ml_getMlParms() + coursewareHandler.zs_getSuspendData(false);
			}
			else if (coursewareHandler.launchEnvironment == "TF")
				seriesTranscript = seriesTranscript + "?jsp=/lms/learn/seriesScoreData.jsp";
			else
				seriesTranscript = seriesTranscript + "?jsp=" + roodDir + "/learn/seriesScoreData.jsp";
			location.href=seriesTranscript + stParms;
			break;
		case "back":
			/* for help only */
			if (location.href.indexOf("help")> -1 || location.href.indexOf("scores_series")> -1)
				location.href="javascript:history.back()";
			break;
		case "glossary":
			crsTitle=document.title;
			sTitle=ThisPage.getSeriesTitle();
			location.href=sharedDirectory + "access/glossary_ac.htm?course=" + crsAcronym + "&loc=" + localizationCode + "&stitle=" + escape(sTitle);
			break;
		case "encyclopedia":
			crsTitle=document.title;
			sTitle=ThisPage.getSeriesTitle();
			location.href=sharedDirectory + "access/encyclopedia_ac.htm?course=" + crsAcronym + "&loc=" + localizationCode + "&stitle=" + escape(sTitle);
			break;
		case "sa":
			if (showSA) openAccSA();
			break;
		case "scores":
			hasSa=showSA ? "1" : "0";
			if (useClientSideData)
				dest = sharedDirectory + "images/skins/1/pages/scoreacc_js.htm" + location.search;
			else if (coursewareHandler.launchEnvironment == "TF")
				dest = coursewareHandler.getScorePage("access", "&sa=" + hasSa)
			else
				dest=scriptsDirectory+ "scores.exe?course=" + crsAcronym + "&type=access&sa=" + hasSa + "&loc=" + localizationCode;
			if (typeof(allowCertificate) != typeof(notDefined) && allowCertificate==false) dest=dest +"&cert=no"; // needed only for accessible version
			location.href=dest;
			break;
		case "techsupport":
			dest="http://courses.mindleaders.com/assist/contact2.asp?SupportLink=MLIE_NavBar";
			if (isMindLeaders==true && !isTfCourse)ThisPage.floatWin(dest, 'techsup','location=no,menubar=yes,toolbar=yes,resizable=yes,width=550,height=400,scrollbars=yes');
			break;
		case "exit":
			// if the course is running within a 3rd party LMS, call tmstrans
			if (typeof(wnd3rdPartyLms.is3rdPartyLms) != "undefined") tmsExit();
				else if (useClientSideData) coursewareHandler.exitCourse();
					else self.close();
			break;
	}
}

function tmsExit()
{
		isScorm = (wnd3rdPartyLms.isScorm) ? "T" : "F";
		var dest = scriptsDirectory + "tmstrans.exe?bmark=&cid=" + crsAcronym + "&inSa=0&scorm=" + isScorm;
		location.href = dest;
}

function loadPage()
{
	coursewareHandler.access=true;
	if (ThisPage.allowSeriesTranscript(crsAcronym)) keyRegistry["T"] = new Array("go", "transcript");
}
window.onload=loadPage;

function writeAccIntro()
{
	// passed course title, Dec09
	if (ThisPage.getPassedParm("crstitle") != "")
	{
		h1s=document.getElementsByTagName('h1');
		crsTitle=unescape(ThisPage.getCourseTitle());
		if (crsTitle != "" && h1s[0] != null)
		{
			h1s[0].innerHTML=crsTitle;
			document.title=crsTitle;
		}
	}

	if (location.href.indexOf("file:") != -1)
	{
		pMsg="This file can only be viewed online.";
		document.write(pMsg + "<" + "!--");
		isPrintVersion=1;
		return;
	}
	if (isPrintVersion)
	{
		linkText =resStr.textonlyText + resStr.textonlyText2;
		if (useFsStyle) linkText =resStr.textonlyText;
	}
	else
	{
		if (typeof(numAccQuestions) != "undefined" && numAccQuestions < 5) showSA=false;
		if (useClientSideData) linkText =resStr.accLinkText_zs;
			else linkText =resStr.accLinkText;
		if (typeof(resStr.accGlossary) != "undefined" && showGlossary) linkText += resStr.accGlossary; //check for resStr.accGlossary because localized course resource_strings.js not updated.
		if (typeof(resStr.accEncyclopedia) != "undefined" && hasEncyclopedia) linkText += resStr.accEncyclopedia; //check for resStr.accEncyclopedia because localized course resource_strings.js not updated.
		if (hasEncyclopedia) keyRegistry["E"] = new Array("go", "encyclopedia"); // Here to give time to load -- bah!
		if ( ThisPage.allowSA(crsAcronym) ) linkText += resStr.accLinkTextSA;
		if ( ThisPage.allowScores(crsAcronym) ) linkText += resStr.accLinkTextScores;
		if (ThisPage.allowSeriesTranscript(crsAcronym)) linkText += resStr.accLinkTranscript; // && !coursewareHandler.fsWithDat
		//if (isMindLeaders==true && !isTfCourse) linkText += resStr.accLinkTextTech;
		if (isMindLeaders==true && !isTfCourse && !useClientSideData) linkText += resStr.accLinkTextTech;
		linkText += resStr.accLinkTextExit;
		if (typeof(numAccQuestions) == "undefined" || numAccQuestions > 0) linkText += resStr.accLinkTextQuestion;
		if (typeof(quickrefTitle) != "undefined" && quickrefTitle[1] !="") linkText += accGetQuickRefLinks();
		
		//linkText+="<br><a href=\"javascript:parent.coursewareHandler.addToTimeOnPage();alert(parent.coursewareHandler.secondsInCourse)\">ALERT</a>"
	}
	document.write( linkText );
}

function floatWin(destination,winName,winParms)
{
	ThisPage.floatWin(destination,winName, winParms);
}

function writeLinkText(url, text)
{
	if (typeof(text)=="undefined") text=url;
	if (coursewareHandler.internetSearchEnabled) document.write("<a href=\"javascript:floatWin('" + url + "','internet_win','resizable=yes,width=640,height=480,scrollbars=yes,menubar=yes')\" title=\"Open " + url + "in a new window\">" + text + "</a>");
		else if (text.indexOf("http://") == -1) document.write(text + " (" + url + ")");
			else document.write(text);
}

function accGetQuickRefLinks()
{
	qLinks="<br><br><b>Links to Reference Materials</b> (open in a new browser window)<br>";
	for (i=1;i<quickrefTitle.length;i++)
	{
		if (typeof(qrFileName) != "undefined" && qrFileName[i] != null && qrFileName[i] != "") qrFile=qrFileName[i];
			else qrFile="quickref_" + ThisPage.replaceText(quickrefTitle[i], " ", "_", false) + ".htm";
		qrFile=qrFile.toLowerCase();
		qLinks+="<a title=\"" + quickrefTitle[i] + "\" href=\"javascript:coursewareHandler.floatWin('" + qrFile + "', 'quickref" + i + "','resizable=yes,menubar=yes,toolbar=no,width=680,height=500,scrollbars=yes,status=no')\">";
		qLinks+= quickrefTitle[i] + "</a> " + quickrefDescription[i] + "<br>";
	}
	return qLinks;
}

function writeCopyrightInfo()
{
	var dt = new Date();
	if (typeof(copyrightYear)=="undefined" || copyrightYear=="") copyrightYear=dt.getFullYear();
	//if (copyrightYear < dt.getFullYear())  copyrightYear=dt.getFullYear();
	notice="<br><br><center>&copy; " + copyrightYear + " " + resStr.copyrightNotice;
	if (isTfCourse) notice="<br><br><center>&copy; 2009 Third Force EP Irl Ltd. All Rights Reserved.";
	if (typeof(c_copyrightNotice) != "undefined" && c_copyrightNotice != "")
		notice += "<br>" + c_copyrightNotice + "</center>";
	document.write(notice);

	if (!isPrintVersion) hideOnPageImages();

	// Add frame for reporting progress in fs courses
	if (useFsStyle && !isPrintVersion)
	{
//		var report_iframe = "<iframe name='worker' id='worker' src='/dpec/blank.htm' height='0' width='0' /></iframe>";
//		document.write(report_iframe);
	}

	if (useClientSideData && !isPrintVersion) parent.accSetAnsweredQuestions();
}
function hideOnPageImages()
{
	numImages=document.images.length;
	for (i=0;i<numImages;i++)
	{
		document.images[i].style.display="none";
	}
}

function writeActivityIntro()
{
	document.write(resStr.accActivityIntro);
}

function qrLink(linkWords,qrFile)
{
	lnk="<a href=\"javascript:coursewareHandler.floatWin('" + getCoursesDirectory(crsAcronym) + crsAcronym + "/" + qrFile + "', 'quickref','resizable=yes,menubar=yes,toolbar=no,width=680,height=500,scrollbars=yes,status=no')\">" + linkWords + "</a> ";
	document.write(lnk);
}

function openQr(qrFile)
{
	fullFile=getCoursesDirectory(crsAcronym) + crsAcronym + "/" + qrFile;
	coursewareHandler.floatWin(fullFile, 'quickref','resizable=yes,menubar=yes,toolbar=no,width=680,height=500,scrollbars=yes,status=no');
}

function insertAssessmentLink(lessonNum,exam)
{
	if (isPrintVersion) return;
	if (ThisPage.getCompletionCookie(crsAcronym).charAt(lessonNum-1) == "1") aStatus=" (" + resStr.prCompleted + ")";
		else aStatus="";
	if (typeof(exam) != "undefined" && exam) // for exam in fhfd01, 12/2011
		linkText="<a href=\"javascript:openAssessment(" + lessonNum + ")\">" + resStr.takeExam + "</a><span id=asmntStatus" + lessonNum + ">" + aStatus + "</span><br>";
	else
		linkText="<a href=\"javascript:openAssessment(" + lessonNum + ")\">" + resStr.accOpenAssessment + " " + lessonNum + "</a><span id=asmntStatus" + lessonNum + ">" + aStatus + "</span><br>";
	document.write (linkText);
}

function setAssessmentStatus(lNum, aStatus)
{
	obj=document.getElementById("asmntStatus" + lNum);
	switch (aStatus)
	{
		case "pass":
			ThisPage.setCompletionCookie(crsAcronym,numberOfUnits,lNum)
			if (obj != null) obj.innerText=" (" + resStr.prCompleted + ")";
			break;
		case "fail":
			if (obj != null && ThisPage.getCompletionCookie(crsAcronym).charAt(lNum-1) != "1") obj.innerText=" (" + resStr.accAttempted + ")";
			break;
		default:
	}
	
}

function openAssessment(lNum)
{
	dest=rootDir + "/shared/access/acc_assessment.htm?acro=" + crsAcronym + "&lnum=" + lNum;
	coursewareHandler.floatWin(dest, 'acc_question_window','location=no,status=yes,menubar=yes,toolbar=yes,resizable=yes,width=620,height=420,scrollbars=yes');
}

function openExam()
{
	dest=rootDir + "/shared/access/acc_exam.htm?acro=" + crsAcronym + "&numq=" + numberOfQuestions + "&mastery=" + coursewareHandler.masteryPercent;
	coursewareHandler.floatWin(dest, 'acc_question_window','location=no,status=yes,menubar=yes,toolbar=yes,resizable=yes,width=620,height=420,scrollbars=yes');
}

// Show Other Resources page from w/in text only version
function fsShowPrompt()
{
	dest=rootDir + "/shared/templates/resources.htm?course=" + crsAcronym + "&isprint=1";
	coursewareHandler.floatWin(dest, 'resources_window','location=no,status=no,menubar=yes,toolbar=no,resizable=yes,width=620,height=420,scrollbars=yes');
}

function accWriteLinkToIframeFile(fname)
{
		fLink="<br><a href=\"javascript:coursewareHandler.floatWin('" + fname + "', 'link_window','location=no,status=yes,menubar=yes,toolbar=yes,resizable=yes,width=800,height=600,scrollbars=yes')\">";
		fLink+=resStr.viewFile + "</a><br>";
		document.write(fLink);
}

function isVersion(ver)
{
	version=coursewareHandler.stateVer;
	if (ver.indexOf(",") > -1)
	{
		verArray=ver.split(",");
		for (i=0;i < verArray.length;i++)
		{
			if (verArray[i]==version) return true;
		}
		return false;
	}
	return version==ver;
}
function hideImages()
{
	if (coursewareHandler.useFsStyle && !coursewareHandler.fsWithDat) return !isPrintVersion;
		else return true;
}

function hideTranscript(diff)
{
	// diff is the value set for showTranscript on this page, indicating the audio differs from the displayed words
	if (coursewareHandler.useFsStyle)
	{
		if (isPrintVersion) return !diff; // if the words are different, then don't hide them
			else return false; // never hide them in acc version
	}
	else
	{
		return false; // never hide words in non-FS progressive pages
	}
}

