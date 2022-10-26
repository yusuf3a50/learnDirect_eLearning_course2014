var coursewareDate="062012";

var ks_InSkillAssessment = 1;
var ks_InAccessibilityQuestionWindow = 2;
var ks_InMlieCourseWindow = 4;

function Keystroke(key,privileges,type)
{
	this.isAllowed = isAllowed;

	this.key = key;
	this.privileges = privileges;
	this.type = type;

	function isAllowed(privileges)
	{
		return ((privileges & this.privileges) != 0);
	}
}

function Keystrokes()
{
	this.add = add;
	this.exists = exists;

	this.col = new Object;

	function add(keystroke)
	{
		this.col[keystroke.key] = keystroke;
	}

	function exists(key)
	{
		return (typeof(this.col[key]) == "object");
	}
}

function Stack()
{
	this.clear = clear;
	this.push = push;
	this.pop = pop;
	this.peek = peek;

	this.clear();

	function clear()
	{
		this.stack = new Object;
		this.top = 0;
	}

	function push(value)
	{
		this.stack[++this.top] = value;
	}

	function pop()
	{
		if (this.top == 0)
		{
			alert(resStr.error_stackEmpty);
			return "";
		}
		return this.stack[this.top--];
	}

	// Peek into the stack.
	// pos: 0 (default) returns top of stack
	//      -1 returns 1 below the top of stack...
	function peek(pos)
	{
		if (typeof(pos) == "undefined")
			pos = this.top;
		else
			pos = this.top + pos;

		if (pos <= 0)
			return "";

		return this.stack[pos];
	}
}

function CoursewareHandler(acro,params)
{
	this.onCoursePageLoad = onCoursePageLoad;
	this.onCoursePageInit = onCoursePageInit;
	this.selectTopic = selectTopic;
	this.onFoobarButtonClick = onFoobarButtonClick;
	this.onImageClick = onImageClick;
	this.onHotWordClick = onHotWordClick;
	this.onKeyClick = onKeyClick;
	this.onSelectTabLink = onSelectTabLink;
	this.clickFeatureLink=clickFeatureLink;
	this.onFlashClick = onFlashClick;
	this.onCourseLaunch = onCourseLaunch;
	this.onGoToCourseUrl = onGoToCourseUrl;
	this.onBeforeWindowUnload = onBeforeWindowUnload;
	this.onExitClick = onExitClick;
	this.exitCourse = exitCourse;
	this.askToAbortSkillAssessment = askToAbortSkillAssessment;
	this.completeSkillAssessment = completeSkillAssessment;
	this.exitSkillAssessment = exitSkillAssessment;
	this.enterSkillAssessment = enterSkillAssessment;
	this.goBack = goBack;
	this.getGoBackUrl = getGoBackUrl;
	this.goPage = goPage;
	this.handleMacro = handleMacro;
	this.getBookmarkUrl = getBookmarkUrl;
	this.loadUrl = loadUrl;
	this.setCaption = setCaption;
	this.setSkinDir=setSkinDir;
	this.getSkinnedTemplatePageDirectory=getSkinnedTemplatePageDirectory;
	this.searchThisCourse = searchThisCourse;
	this.inInstantMentoring = inInstantMentoring;
	this.getTitlePage = getTitlePage;
	this.addToTimeOnPage = addToTimeOnPage;
	this.cloneForContentWindow = cloneForContentWindow;
	this.getTitle = getTitle;
	this.floatWin = floatWin;
	this.addPoppedWindow = addPoppedWindow;
	this.closePoppedWindows = closePoppedWindows;
	this.windowIsOpen=windowIsOpen;
	this.getScoFullPage = getScoFullPage;
	this.hasToolLink=hasToolLink;
	this.getScorePage=getScorePage;
	this.showProgress=showProgress;
	this.getSiteEvaluationCc=getSiteEvaluationCc;
	this.allowEvaluation=allowEvaluation;
	this.hasSeriesCeus=hasSeriesCeus;
	this.titleMatch=titleMatch;
	this.allowPodcast=allowPodcast;
	this.siteHasPodcasts=(params.get("allowpc") == "1");
	this.courseHasPodcast=(params.get("pc") == "1");
	this.allowPhoenixLink=(params.get("phoenix") == "1") && !zipAndShip; //  zipAndShip set in site.js
	this.hasTechLabs=(params.get("techlabs") == "1" || params.get("techlabs") == "2");
	this.techLabSubscription=params.get("techlabs");
	this.alternateCourseTitle=params.get("crstitle");
	this.poppedWindows = new Array();
	this.params = params;
	this.acro = acro;
	this.reportAcro= params.get("repacro");  // Use this acro to report data to server. Allows for same sku, different acro courses.
	if (this.reportAcro==null || this.reportAcro=="") this.reportAcro=this.acro;
	this.inCoursewareHtm = false;
	this.courseType = params.get("type");
	this.isBSV = (this.courseType == "BSV");
	this.isDummies = (this.courseType == "DUM");
	this.isCustom = (this.courseType == "MLC");
	this.isFbCourse=this.acro.substring(0,4)=="face" || this.acro.substring(0,4)=="faus"; // FB
	this.useNewDesign = !(this.isCustom || this.isDummies);
	this.topicLinks = (typeof(topicLinks) != "undefined") ? topicLinks : null;	// The topicLinks from the acro_topics.js course file.
	this.aboutLinks = (typeof(aboutLinks) != "undefined") ? aboutLinks : null;	// The aboutLinks from the acro.js course file.
	this.hideProgressRpt = (typeof(hideProgressRpt) != "undefined" && hideProgressRpt) ? true : false;
	this.useWmv=params.get("usewmv"); // if 1, forces WMV video
	this.launchEnvironment = params.get("env"); // May be: ML, TF, CB.  Defaults to "TF"
	if (this.launchEnvironment == null)
		this.launchEnvironment = "TF";
	this.isDemoUser = (params.get("demouser") == "1");
	this.isPreview = (params.get("preview") == "1" || this.isDemoUser); // allows for course launch without data exchange or exit warning
	this.redirectTo = params.get("redirectTo");
	this.isCaatEmbed= (params.get("caatembed") == "1") ? true : false;

	this.is3rdLMS = (params.get("3rd") == "1");
	this.userId = params.get("userid");
	if (this.userId == null)
		this.userId = "";
	this.userId = this.userId.toLowerCase();
	this.uuid = params.get("lobStartUuid");
	if (this.uuid == null)
		this.uuid = "";
	this.siteId = params.get("siteid");
	if (this.siteId == null)
		this.siteId = "";
	this.siteId = this.siteId.toLowerCase();
	this.customSiteId=ThisPage.getCustomId(); //get the custom ID for custom logo and wallpaper
	this.pageTimeLimit=60; // 60 seconds
	if (this.acro.substring(0,2)=="l_") this.pageTimeLimit=60 * 30; // 30 minutes for CO1 courses
	if (this.courseType == "TML") this.pageTimeLimit=60 * 10; // 10 minutes for TM LOBs courses
	this.localizationCode = params.get("loc");
	if (this.localizationCode== null)
		this.localizationCode= "";
	this.allowSearch=true;
	if (typeof(c_hideSearch) != "undefined") this.allowSearch=false;
	this.reportInterval=300; // The time interval (seconds) at which progress is reported in OTS courses
	this.isFirstLaunch=(params.get("1stlaunch") == "1");
	this.scoOnly = (params.get("scoonly") == "1");
	this.fsWithDat=(params.get("fsdat") == "1"); // only used in accessibility
	this.successSetting=params.get("success");
	if (this.successSetting==null || this.successSetting=="")  // 0=mastery;1=comp and mastered; 2=mastered or comp; 3=completed.
		this.successSetting="0";
	if (this.isBSV) // BSV successSetting can only be either 1 or 3
	{
		if (this.successSetting=="0") this.successSetting="1";
			else if (this.successSetting=="2") this.successSetting="3";
	}
	this.allowSocial=(params.get("nosocial") != "1"); // used in congrats_js.htm
	this.design2011 = (params.get("d11") == "1");
	this.toolTabLinks2011=null;

//Self-contained Courses
	this.useTdScoring = (params.get("tdscoring") == "1") ? true : false;
	this.quesRecString= params.get("qrec"); // an undelimited strings representing question status: 0 - not answered, 1 - correct, 2 - incorrect, 3 - ans but not scored
	if (this.quesRecString== null) this.quesRecString= "";
	this.quesRec=""; // The delimited string used to track questions.
	//this.quesRec= params.get("qrec");
	//if (this.quesRec== null) this.quesRec= "";
	this.scoresRec= params.get("srec");
	if (this.scoresRec== null) this.scoresRec= "";
	this.saScoresRec = params.get("sarec");
	if (this.saScoresRec== null) this.saScoresRec= "";
	this.completionDate = params.get("compdate");
	if (this.completionDate == null) this.completionDate =  "";
	this.masteryDate = params.get("mastdate");
	if (this.masteryDate == null) this.masteryDate =  "";
	this.successDate= params.get("sucdate");
	if (this.successDate == null) this.successDate = "";
	this.preferenceString = params.get("pref");
	if (this.preferenceString == null) this.preferenceString = defaultPrefs;
	this.surveyURL = null;
	// launch from Skillport
	this.spLaunchUrl=(params.get("splaunchurl")) ? decodeURIComponent(params.get("splaunchurl")) : null; // the url of mlscorm.htm on skillsoft site

	this.sessionTime=0; // Seconds from launch to exit
	this.totalTime=params.get("ttime"); // total course time in seconds across sessions, stored in blob.
	if (this.totalTime==null || this.totalTime=="") this.totalTime=0;
	this.secondsInCourse = 0; // Time in course, reset to 0 whenever total time is reported.
	this.timePageLoaded = 0;
	this.courseMasteryPercentage=0;
	this.courseCompletionPercentage=0;
	this.hasMastery=false;
	this.courseCompleted=false; 
	this.weightedCourseScore="0";
	this.bestCourseScore="0";
	this.bestSaScore="0";
	this.thisSaScore="0";
	this.videoPosition="0";

	// BLOB functions
	this.zs_getSuspendData=zs_getSuspendData;
	this.zs_getLessonStatus=zs_getLessonStatus;
	this.zs_getScore=zs_getScore;
	this.zs_getTime=zs_getTime;
	this.ml_setSuccessStatus=ml_setSuccessStatus;
	this.ml_getCourseStatus=ml_getCourseStatus;
	this.ml_getScore=ml_getScore;
	this.ml_getCourseCompletionPercentage=ml_getCourseCompletionPercentage;
	this.ml_getCourseMasteryPercentage=ml_getCourseMasteryPercentage;
	this.ml_buildQuesRecString=ml_buildQuesRecString;
	this.ml_getMlParms=ml_getMlParms;
	this.zs_getScormParms=zs_getScormParms;
	this.ml_reportSaScore=ml_reportSaScore;
	this.ml_relaunchWithNewBlob=ml_relaunchWithNewBlob; // for testing relaunch

	this.saQuestionList=new Array;
	this.saCurrentScore=new Array;
	this.saTotalQuestions=30;

	this.tempStorage=""; // used for holding info when question is submitted in WASA
	this.fromJsBack=false; //used to turn off audio when a page is returned to from a linked page.
	this.showSlideshowText=false; // For Co1 courses -- whether text or slide is displayed
	this.dragboxCalloutShown=false;

	// Passed values for food safety style courses
	this.useFsStyle=(ThisPage.getPassedParm("fs")=="1") ? true : false; // Is this a fs style course?
	this.fsTopicCompletionString=ThisPage.getPassedParm("topics"); // tracks which topics have been completed
	this.crsVersion=ThisPage.getPassedParm("ver"); // Are only certain lessons in the course to be displayed?
	this.fsAssessmentCompletesLesson=(ThisPage.getPassedParm("ascmpl") =="1") ? true : false; // Does completing the assessment complete the lesson?
	this.fsRequireSequential=(ThisPage.getPassedParm("reqseq") =="1") ? true : false; // Must lessons be taken in sequential order?
	if (this.fsRequireSequential) this.fsAssessmentCompletesLesson=false;
	if (this.acro.indexOf("fhfd") > -1) this.fsRequireSequential=true; // Added 9/13 by JAR
	this.fsRetryPercent=ThisPage.getPassedParm("retryper"); // 0-100 What percent of assessment questions must be answered correctly to allow retry
	if (this.fsRetryPercent=="") this.fsRetryPercent="75";
//this.fsRetryPercent="10";
	this.masteryPercent=ThisPage.getPassedParm("mastery"); // 0-100 What percent is needed to pass practice exam. currently FS only
	if (this.masteryPercent=="") this.masteryPercent="70";
	if (typeof(c_masteryPercent) != "undefined") this.masteryPercent=c_masteryPercent;

	this.courseCompletionString = params.get("comp"); // This value is a backup for the completion cookie (JAR, April 2010)
	if (this.isBSV && params.get("bsvcomp")=="1") this.courseCompletionString = "1111111111";
	if (this.courseCompletionString==null || this.courseCompletionString == "") // if courseCompletionString is not passed, get it from the cookie
	{
		this.courseCompletionString="0"; // set to 0 first in case cookie is null
		this.courseCompletionString=ThisPage.getCompletionCookie(this.acro);
	}
	
	// Is this a TF course? This is the courseType set in the course js file
	if (typeof(courseType) !="undefined" && courseType.indexOf("CPL-TF")>-1) this.isTfCourse=true;
		else this.isTfCourse=false;
	this.isTfEcdl = (this.acro.indexOf("07ec")>-1 || this.acro.indexOf("07ic")>-1 || this.acro.indexOf("07uk")>-1) ? true : false;

	// Lesson-level pre- and post-test variables for TF QuestionTimes
	this.pt_userkey=params.get("userkey");
	this.pt_type="Pre";
	this.pt_startPage="";
	this.pt_inTest=false;
	this.pt_questionIds=new Array;
	this.pt_numQuestions=0;
	this.pt_currentQuestionNum=0;
	this.pt_totalCredit=0;
	this.pt_creditArray=new Array;
	this.pt_score=0;
	this.pt_missedTopics="";
	this.pt_testId="XXXX"; // we need to get the testId returned by StartAssessment
	this.pt_testCode=""; // the test code of the post test being taken;
	this.pt_questionsAsked=""; // The ids of the questions asked in the current post test
	this.pt_attempts=(params.get("attempts")) ? params.get("attempts").split(",") : new Array;
	this.pt_lastScores=(params.get("lastscores")) ? params.get("lastscores").split(",") : new Array;
	this.tf_writeLmsString=tf_writeLmsString; // function for creating LMSString
 	this.tf_assessmentOnly=(ThisPage.getPassedParm("asmntonly") =="1") ? true : false; // TF courses, assessment only
	this.tf_trackingRequest=tf_trackingRequest; // function for sending TF ajax requests
	this.al_forceExit=al_forceExit; // for exiting without storing data
	this.copyrightRequest=copyrightRequest;

	// Settings for Alcohol-style courses (xml based)
	this.stateVer=params.get("statever");
	if (this.stateVer==null) this.stateVer="";
		else this.stateVer=this.stateVer.toLowerCase();
	this.al_personalInfo=params.get("pinfo");
	if (this.al_personalInfo==null) this.al_personalInfo="";
	this.al_verificationInfo=params.get("vinfo");
	if (this.al_verificationInfo==null) this.al_verificationInfo="";
	this.al_verificationErrors=params.get("verror");
	if (this.al_verificationErrors==null) this.al_verificationErrors=0;
	this.al_certName=params.get("certname"); // name used for certificate
	if (this.al_certName==null || this.al_certName=="undefined") this.al_certName="";
	this.al_pageCompletionString=ThisPage.getPassedParm("pgcomp"); // tracks which "middle" pages have been completed
	if (this.al_pageCompletionString == null) this.al_pageCompletionString="";
	this.al_proctorInfo=unescape(ThisPage.getPassedParm("proctorinfo",false)); // For MD: proctor name|permit number|employer name|employer address|licensing board
	if(this.al_proctorInfo==null) this.al_proctorInfo="";
	this.al_restartTheCourse=false;
	this.isLockdownExam=(ThisPage.getPassedParm("lkdn") =="1") ? true : false; // Is this the lockdown exam window?
	
	// Functions for food safety style courses
	this.fsSetUpCourse=fsSetUpCourse;
	this.getScoNum=getScoNum;
	this.fsGetScoPosFromPg=fsGetScoPosFromPg;
	this.fsAssessmentIsPassed=fsAssessmentIsPassed;
	this.fsSetCompletion=fsSetCompletion;
	this.fsSetCompletionString=fsSetCompletionString;
	this.fsClearBlueFolders=fsClearBlueFolders;
	this.fsSetAllTopicsAsCompleted=fsSetAllTopicsAsCompleted;
	this.fsSetAllTopicsAsIncomplete=fsSetAllTopicsAsIncomplete;
	this.fsGetNextPage=fsGetNextPage;
	this.fsLessonIsComplete=fsLessonIsComplete;
	this.fsGetTopicStatus=fsGetTopicStatus;
	this.fsReportProgress = fsReportProgress;
	this.reportProgress = reportProgress; // for OTS and BSV
	this.fsGetTopicPageStatus = fsGetTopicPageStatus;
	this.fsGetTopicTitle=fsGetTopicTitle;

	// Variables for food safety style courses
	this.fsIncludedLessons=""; // a comma-delimited strings of lessons to be included (e.g., "3, 5, 7, 9")
	this.fsTotalLessons=0; // the total number of lessons, displayed or not
	this.fsNumberOfLessons=0; // the number of displayed lessons
	this.fsNumberOfTopics=0; // the number of topics in displayed lessons
	this.fsLessonMap=new Array; // fsLessonMap[hardcoded unit number] = the displayedLessonNumber
	this.fsAssessmentMap=new Array; // fsAssessmentMap[hardcoded unit number] = the page name of the assessment (e.g., fob006.htm) or ""
	this.fsAudioDirectory="";
	this.fsCompletionMessageShown=false;
	this.fsCustomResourceFile=ThisPage.getPassedParm("cusres");
	this.fsOrientationViewed=false;
	this.fsExamScore=params.get("fscore");
	if (this.fsExamScore==null) this.fsExamScore=0;
	this.fsExamData=params.get("examdata");
	if (this.fsExamData==null) this.fsExamData=""; // hyphen and asterisk delimited: qid - correct answer - student answer *
	this.fsCompletionStringChanged=false;
	this.fsMenuViewed=false;

//this.fsCustomResourceFile="yumfoods"
	if (this.useFsStyle) this.fsSetUpCourse();

	//********************* In-house Custom Course Review *********************************
	this.reviewDirectory="";
	if (window.location.href.indexOf("courses.rubino") > -1 ||
		window.location.href.indexOf("preview.mind") > -1) //review on //rubino
	{
		if (typeof(getReviewDirectory) != "undefined") this.reviewDirectory = getReviewDirectory(this.userId);
		if (this.reviewDirectory != "")
		{
			ThisPage.setCookie("customid",this.reviewDirectory,99999999);
			this.customSiteId=ThisPage.getCustomId();
		}
	}
	//**********************************************************************************************
	this.userFirstName = params.get("fname");
	this.userLastName = params.get("lname");
	this.referrer = params.get("referrer");
	if (this.referrer == null)
		this.referrer = "";
	this.referrer = unescape(this.referrer);
	this.instantMentorClassKey = params.get("instantMentorClassKey");
	if (this.instantMentorClassKey == null)
		this.instantMentorClassKey = "";
	this.instantMentorClassKey = unescape(this.instantMentorClassKey);
	this.mentorHost = params.get("mentorHost");
	if (this.mentorHost == null)
		this.mentorHost = "";
	this.mentorHost = unescape(this.mentorHost);
	this.kpId = params.get("kpId");
	if (this.kpId == null)
		this.kpId = "";
	this.kpId = unescape(this.kpId);
	this.pretestRequired = (params.get("pretest") == "1");
	this.internetSearchEnabled = (params.get("internetSearchEnabled") == "1");
	this.reflibEnabled = (params.get("reflibEnabled") == "1");
	this.netlibrary = (params.get("netlibrary") == "1");
	this.videoDisabled = (params.get("hide_video") == "1");
	this.showSurveyOnExit = (params.get("showSurveyOnExit") == "1");
	this.courseLength = params.get("clen"); // course length in minutes
	if (this.courseLength==null) this.courseLength="";

// For in-house production:
	if (typeof(isProductionServer) != "undefined" && isProductionServer) this.showSurveyOnExit=false;
	this.allowEdit = (params.get("ae") == "1");
	this.allowAddaNote = (params.get("aan") == "1" && this.reviewDirectory == "" && this.courseType  != "TML"); // BSV allowed, 12/2005
	if (this.courseType=="CAA") this.allowAddaNote=false;
	this.hasBuyBook = (params.get("buybook") == "1");
	this.hasCeus = (params.get("ceus") == "1" && this.launchEnvironment != "CB");
	this.evalUrl = params.get("evalurl");
	if (isMindLeaders && this.evalUrl == null) this.evalUrl=rootDir + "/evalmail/evalmail.htm";
	this.techSupportUrl = params.get("tsurl");
	if (this.techSupportUrl==null) this.techSupportUrl="http://www.mindleaders.com/support/default.aspx";
	this.launchEventKey = params.get("lekey");
	if (this.launchEventKey == null)
		this.launchEventKey = 0;
	this.scorm = null;
	if (params.get("scorm") != null)
		this.scorm = (params.get("scorm") == "1");
	this.isScorm = isScorm;

	this.defaultCaption = resStr.defaultCaption;
	this.stack = new Stack();
	this.currentScoID = "";
	this.isCoursePageLoading = false;
	this.lastSidePicture = 0;
	this.wndContent = null;
	this.foobarFrame = null;
	//buy the pearson book link
	this.bookURL = null;
	if (ThisPage.isDummies(this.acro))
	{
		//buy the dummies book link
		this.bookURL= "http://www.dummies.com/";
		if (typeof(d_bookIsbn) != "undefined")
			this.bookURL= "http://cda.dummies.com/WileyCDA/DummiesTitle.rdr?productCd=" + d_bookIsbn;
	}
	else if (typeof(pearson_bookIsbn) != "undefined")
		this.bookURL= "http://www.informit.com/content/index.asp?isbn=" + pearson_bookIsbn + "&account=mindleaders";

	this.foobar = null;
	this.tabBar = null;
	this.inSkillAssessment = false;
	this.inJsBack = false;
	this.bookmarkUrl = "";
	this.access = (params.get("access") == "1");
	if (this.access)
	{
		this.pageTimeLimit=60 * 240; // 4 hour limit for accessibility
		this.timePageLoaded = (new Date()).getTime();
	}
	this.useFlash = false;
	this.omitSims = null;
	this.lastCoursePage=""; // for completion, to ensure that user paged to last unit page.
	this.tabSkinDirectory=sharedDirectory+ "tabbies/";
	if (typeof(c_tabbiesDir) != "undefined") this.tabSkinDirectory = c_tabbiesDir;

	// Tool mode stuff
	this.inToolMode = false;							// Are we in a tool?
	this.toolCaption = "";
	this.isToolPageLoading = false;
	this.firstToolPageURL = "";

	this.keys = new Keystrokes();

	this.keys.add(new Keystroke("a",ks_InMlieCourseWindow,"sa"));
	this.keys.add(new Keystroke("g",ks_InMlieCourseWindow,"glossary"));
	this.keys.add(new Keystroke("h",ks_InMlieCourseWindow,"help"));
	this.keys.add(new Keystroke("k",ks_InMlieCourseWindow,"shortcut"));
	this.keys.add(new Keystroke("n",ks_InSkillAssessment | ks_InAccessibilityQuestionWindow | ks_InMlieCourseWindow,"next"));
	this.keys.add(new Keystroke("p",ks_InSkillAssessment | ks_InAccessibilityQuestionWindow | ks_InMlieCourseWindow,"prev"));
	this.keys.add(new Keystroke("s",ks_InMlieCourseWindow,"scores"));

	this.certificateStyle = "";

	function isScorm()
	{
		if (this.scorm == null)
		{
			var wndCourse = this.wndContent.parent.parent;
			if (!this.inCoursewareHtm) wndCourse = this.wndContent.parent;
			var wndCourseParentExists = true;
			try {var doc = wndCourse.parent.document;} catch(e){wndCourseParentExists = false;}
			this.scorm = (wndCourseParentExists && wndCourse.parent.isScorm ? true : false);
		}

		return this.scorm;
	}

	function getTitle()
	{
		var title = "";

		if (this.wndContent != null)
		{
			if (this.isDummies) // in dummies courses, use d_crsTitle if defined
			{
				if (typeof(this.wndContent.d_crsTitle) != "undefined")
					title = this.wndContent.d_crsTitle;
			}
			else if (typeof(this.wndContent.crsTitle) != "undefined")
				title = this.wndContent.crsTitle;
		}
		if (typeof(title) == "undefined" || title == "")
			title = this.defaultCaption;

		if (typeof(this.wndContent.pgTpl) != "undefined" && this.wndContent.pgTpl=="notes") title="Notes from " + title;

		if (title.indexOf("&amp;") > -1)
			title = ThisPage.replaceText(title, "&amp;", "&");

		return title;
	}

	function setCaption(caption)
	{
		try
		{
			if (typeof(caption) == "undefined")
				caption = this.getTitle();
	
			var wnd = this.wndContent;
	
			if (!this.is3rdLMS)
				wnd = top;
	
	//		if (!this.inCoursewareHtm)
	//			return;
	
			if (wnd.document.title != caption)
				wnd.document.title = caption;
		}
		catch(e) {}
	}

	function onCoursePageInit()
	{
		this.isCoursePageLoading = true;
	}

	function onCoursePageLoad()
	{
		if (this.wndContent == null) return;
		if (typeof(this.wndContent.useFlash) != "undefined")
			this.useFlash = this.wndContent.useFlash;
		this.isCoursePageLoading = false;

		if (!this.isLoadingToolPage && this.inToolMode)
		{
			// Check to make sure we should exit tool mode or not.
			if (!this.inSkillAssessment)
				this.inToolMode = false;
		}

		this.wndContent.showCustomNote();

		this.timePageLoaded = (new Date()).getTime();

		if (this.useFsStyle)
		{
			this.pageTimeLimit=60 * 2; // 2 minutes for Compliance courses
			if (typeof(this.wndContent.pgTpl) != "undefined")
			{
				if (this.wndContent.pgTpl=="fs_menu") this.pageTimeLimit=60; // 1 minute for Compliance menu
				else if (this.wndContent.pgTpl=="fs_asmnt" || this.wndContent.pgTpl=="fs_asmnt_xml" || this.wndContent.pgTpl=="fs_asmnt_exam") this.pageTimeLimit=90; // 90 second limit on each question in the Compliance assessment or exam
			}
		}

		this.setCaption();

		// This is the first page of a tool.  Capture the URL so foobar can know whether the first page of a tool is
		// currently being displayed.
		this.firstToolPageURL = (this.isLoadingToolPage) ? this.wndContent.document.location.href : "";

		// Disable next page in courses with sequential topics.
		if (typeof(this.wndContent.sequentialTopics) != "undefined" && this.wndContent.sequentialTopics) this.wndContent.setForwardButton(this.wndContent.enableNextPage());

		if (!this.inJsBack)
		{
			if (this.wndContent.pgType == "pop" || this.wndContent.pgBBar == "bk")
			{
				if (this.wndContent.document.location.href != this.stack.peek())
					this.stack.push(this.wndContent.document.location.href);
			}
			else
			{
				if (!this.inToolMode)
				{
					if (this.wndContent.document.location.href.indexOf("radio.exe") == -1 &&
						this.wndContent.document.location.href.indexOf("text.exe") == -1 &&
						this.wndContent.document.location.href.indexOf("checkbox.exe") == -1 &&
						this.wndContent.document.location.href.indexOf("test.exe") == -1 &&
						this.wndContent.document.location.href.indexOf("scores.exe") == -1 &&
						this.wndContent.document.location.href.indexOf(".jsp") == -1 &&
						!this.pt_inTest && this.wndContent.pgTpl != "pretest" && this.wndContent.pgTpl != "pretest" && // Do not bookmark questions in TF assessments
						this.wndContent.location.href.indexOf("qtotal=") == -1 && //Do not bookmark sa questions
						(!this.isBSV && this.wndContent.document.location.href.indexOf("/pages/") == -1) )
							this.bookmarkUrl = this.wndContent.document.location.pathname + this.wndContent.document.location.search;
					//if it is search.exe generated page, need to get a "standard" url for bookmark
					if (this.bookmarkUrl.indexOf("search.exe") > -1)
					{
						var pattern = "showpage=";
						var idx = this.bookmarkUrl.lastIndexOf(pattern);
						if (idx > -1)
						{
							this.bookmarkUrl = this.bookmarkUrl.substr(idx + pattern.length);
							idx = this.bookmarkUrl.lastIndexOf(".htm");
							if ( idx > -1 && this.bookmarkUrl.length > (idx + 4) )
							{ //take off the parameters after ".htm"
								this.bookmarkUrl = this.bookmarkUrl.substr(0, idx + 4);
							}
						}
					}
				}
				if (useClientSideData && this.bookmarkUrl != "")
				{
					//if (this.bookmarkUrl.indexOf("?") > -1) this.bookmarkUrl = this.bookmarkUrl.substring(0,this.bookmarkUrl.indexOf("?"));
					if (location.host.indexOf("davinci") > -1 || location.host=="jrubino") ThisPage.setCookie(acro + "_b", this.bookmarkUrl, 360*24*90);
				}
				this.stack.clear();
			}
		}
		else
			this.inJsBack = false;

		if (!this.inToolMode)
		{
			var scoID = this.wndContent.ScoId;
			if (typeof(scoID) == "undefined")
				scoID = "";
			this.currentScoID = scoID;
			this.selectTopic();
		}
		if (this.wndContent.pgType == "satitreq" ||
			this.wndContent.inSa)
			this.enterSkillAssessment();

		if (this.inSkillAssessment && typeof(this.wndContent.sacomplete) != "undefined")
			this.completeSkillAssessment();

		if (this.foobar != null)
			this.foobar.update();

		this.isLoadingToolPage = false;
		
		// do not show context menu of right-click in SkillAssessment to prevent going back to answer questions again
		if (this.wndContent != null && this.foobarFrame != null && this.inSkillAssessment)
		{
			this.wndContent.document.body.oncontextmenu = function () {return false;};
			if (this.foobarFrame.document != null && this.foobarFrame.document.body != null)
				this.foobarFrame.document.body.oncontextmenu = function () {return false;};
		}
//TESTING
	//if (ThisPage.isiPad) parent.parent.parent.document.getElementById('crsFrame').height= "600px";
	//if (top.location.href.indexOf("auto") >-1) setTimeout("coursewareHandler.onExitClick()",2000);
	}

	function selectTopic()
	{
		if (this.inSkillAssessment)
			return;

		var scoID = this.currentScoID;
		if (this.tabBar != null)
		{
			var tabLink = this.tabBar.getTabLink(scoID);
			this.tabBar.pointToTabLink(tabLink);
		}
		if (this.useFsStyle)
		{
			if (typeof(this.wndContent.sequentialTopics) == "undefined" || !this.wndContent.sequentialTopics) this.fsSetCompletion(this.getScoNum(scoID))
		}
		if (this.design2011 && typeof(parent.highlightTopic) != "undefined")
		{
			parent.highlightTopic(scoID);
			parent.setProgressCircle();
		}
	}

	function fsGetTopicTitle(sId)
	{
		if (sId=="" || this.topicLinks==null) return "";
		for (i=1;i<=topicLinks.count; i++)
		{
			if (topicLinks.links[i].id == sId && topicLinks.links[i].topic != "undefined") return topicLinks.links[i].topic;
		}
		return "";
	}

	function fsSetUpCourse()
	{
		if (this.topicLinks==null) return;
		if (this.crsVersion !="" && evalVar(this.crsVersion) != "undefined") this.fsIncludedLessons=eval(this.crsVersion);
		// set number of topics and number of lessons
		for (tp=1; tp<=this.topicLinks.count; tp++)
		{
			if (typeof(this.topicLinks.links[tp].lessonNum)=="undefined") lesNum=parseInt(id.substring(acro.length+1,acro.length+4), 10);
				else lesNum=this.topicLinks.links[tp].lessonNum;
			if (typeof(this.topicLinks.links[tp].level)=="undefined") levelNum=parseInt((id.length - acro.length) / 4, 10);
				else levelNum=this.topicLinks.links[tp].level;

			if (this.fsIncludedLessons=="" || ("," + this.fsIncludedLessons + ",").indexOf("," + lesNum + ",") > -1)
			{
				this.fsNumberOfTopics++;
				this.topicLinks.links[tp].markerPos=this.fsNumberOfTopics;
				if (levelNum=="1")
				{
					this.fsNumberOfLessons++;
					this.fsTotalLessons++;
					this.fsLessonMap[this.fsNumberOfLessons]=lesNum;
				} else if (this.topicLinks.links[tp].topic==resStr.assessment) this.fsAssessmentMap[lesNum]=this.topicLinks.links[tp].url;
			} else if (levelNum=="1") this.fsTotalLessons++;
		}

		// create a new fsTopicCompletionString
		if (this.fsTopicCompletionString == null || this.fsTopicCompletionString == "")
		{
			tcString=""
			for (i=1;i<=this.fsNumberOfTopics;i++)
			{
				tcString+="0";
			}
			this.fsTopicCompletionString=tcString;
//			ThisPage.setCookie(cCookie, this.fsTopicCompletionString);
		}
		// Set completion cookie. A 0 or 1 for each lesson in the course.
		if (ThisPage.getCompletionCookie(this.acro)=="0")
		{
			completionCookie="";
 			for (i=0;i < this.fsNumberOfLessons;i++) {completionCookie += "0";}
			if (this.crsVersion !="") cCookie=this.acro + "_" + this.crsVersion + "_completion";
				else cCookie=acro + "_completion";
			if (this.launchEnvironment=="CB") ThisPage.setCookie(cCookie, completionCookie);
			//this.courseCompletionString == completionCookie;
		}
		// Load course info from TF passed parms
		// TF courses assessment scores. Lesson assessments #q,#correct delimited by |, attempts delimited by semicolon.  #q,#correct;#q,#correct|#q,#correct|#q,#correct;#q,#correct|||| e.g.:  3,2.5;3,2.5|3,1.5||||||||||
		/* question data not yet collected
		if (this.pt_resultsDataString == "")
		{
			for (i=1;i<=this.fsTotalLessons;i++)
			{
				//Set pt_resultsDataString here
			}
		}
		*/

		// Set language to English. Spanish option turned off 03/09
		//ThisPage.setPreference(PR_CPLanguage,"0");
	}

function fsGetNextPage()
{
	if (this.fsIncludedLessons == "") return this.wndContent.nextPage;
	displayedLessonNum=this.fsLessonMap[parseInt(this.wndContent.unitNum)];
	if (this.fsRequireSequential)
	{
		seqNum=topicLinks.links[this.getScoNum(this.currentScoID)].seqNum;
		if (this.fsLessonIsComplete(seqNum) != 1) return rootDir + "/shared/templates/fsmenu.htm?start=" + this.wndContent.unitNum;
	}
	nextLessonNum=this.fsIncludedLessons.split(",")[displayedLessonNum +1];
	if (nextLessonNum != null && nextLessonNum != 0) return this.acro.substring(0,2) + "0abcdefghijklmnopqrstuvwxyz".charAt(nextLessonNum) + "001.htm";
		else return rootDir + "/shared/templates/fsmenu.htm?start=" + this.wndContent.unitNum;
}

function fsGetTopicStatus(pos)
{
	if (pos < 1) return;
	compString=this.fsTopicCompletionString;
	if (compString==null || compString.length < pos) return 0;
	return compString.charAt(pos-1);
}

function fsLessonIsComplete(seqNum,displayedLessonNumber)
{
	lesNum=this.topicLinks.links[seqNum].lessonNum;
	if (typeof(displayedLessonNumber) != "undefined") // if the lesson num is passed, return true if the completion cookie marker is set to 1
	{
		if(ThisPage.getCompletionCookie(this.acro).charAt(displayedLessonNumber-1) == 1) return true;
	}
	// go through the topics in this lesson and return true if assessment is complete and assessment completes lesson, otherwise return false if any topic is not completed
	isComplete=true;
	isPartial=false;
	for (i=1;i<=this.topicLinks.count; i++)
	{
		if (this.topicLinks.links[i].lessonNum==lesNum)
		{
			if (this.fsAssessmentCompletesLesson && (topicLinks.links[i].topic==resStr.assessment || this.topicLinks.links[i].topic=="Assessment" || topicLinks.links[i].topic.indexOf(resStr.fsPracticeExam)> -1) && this.fsGetTopicStatus(this.topicLinks.links[i].markerPos) == "2") return true;
			if (this.fsGetTopicStatus(this.topicLinks.links[i].markerPos) != "2") isComplete=false;
			if (this.fsGetTopicStatus(this.topicLinks.links[i].markerPos) != "0") isPartial=true;
		} 
	}
	if (isComplete) return 1;
	if (isPartial) return -1;
		else return 0;
}

function fsSetCompletion(sNum, value)
{
	if (sNum==null || this.topicLinks==null) return;
	pgScorm=this.wndContent.pgScorm;
	mPos=this.topicLinks.links[sNum].markerPos;
	currentValue=this.fsTopicCompletionString.charAt(mPos-1);
	setValue=0;
	if (typeof(pgScorm)=="undefined") return;

	// For TF, do not set partial status on objective pages, always the first page of every topic;
	if (this.isTfCourse)
	{
		if (this.wndContent.pgTpl=="questiontime_q")
		{
			pgScorm="beginObj";
			 if (this.pt_type=="Pre")
			 {
			 		this.wndContent.ScoId=this.wndContent.ScoId.substring(0, this.wndContent.ScoId.length-4);
			 		mPos=this.topicLinks.links[this.getScoNum(this.wndContent.ScoId)].markerPos;
			 }
		}
		
		if (typeof(this.wndContent.ScoId) != "undefined" && !this.pt_inTest) // && this.wndContent.pgTpl.indexOf("test")==-1)
		{
			topicPgNum=this.fsGetTopicPageStatus(this.wndContent.ScoId);
			if (topicPgNum.indexOf(" 1 of ")>-1 && this.topicLinks.links[sNum].topic!="Task" && this.topicLinks.links[sNum].topic!="Project") return;
			if (pgScorm=="") pgScorm="beginObj";
		}

		if (this.wndContent.pgTpl=="posttest" || this.wndContent.pgTpl=="pretest")
		{
			if (coursewareHandler.pt_numQuestions == coursewareHandler.pt_currentQuestionNum && coursewareHandler.pt_currentQuestionNum != 0) pgScorm="endObj";
				else return;
		}
	}

	if (this.wndContent.pgTpl.indexOf("fs_asmnt") == -1 && (typeof(this.wndContent.isExam) == "undefined" || !this.wndContent.isExam) )
	{
		if (pgScorm=="startUnit" || pgScorm=="beginObj,endObj" || pgScorm=="endUnit") setValue="2";
		if (pgScorm=="beginObj") setValue="1";
		if (pgScorm=="endObj" && currentValue=="1") setValue="2";
	}
	if (typeof(value) !="undefined") setValue=value;
	if (setValue==0) return;
	if (currentValue != "2") this.fsSetCompletionString(mPos,setValue)
// Set the lesson completion cookie
	if (this.fsLessonIsComplete(sNum)==1)
	{
		ThisPage.setCompletionCookie(this.acro,this.fsNumberOfLessons,this.fsLessonMap[parseInt(this.wndContent.unitNum)]);
		if (!this.isTfCourse && ThisPage.hasCompletedCourse(this.acro) )
		{
			if (typeof(this.wndContent.crsTitle) != "undefined" && this.wndContent.crsTitle.indexOf(resStr.fsPracticeExam) == -1) // non-exam food handler courses
			{
				this.courseCompleted=true;
				this.hasMastery=true;
			}
			this.ml_setSuccessStatus();
		}
	}
}

function fsSetCompletionString(mPos,value)
{
	bStr=this.fsTopicCompletionString.substring(0,mPos-1);
	eStr=this.fsTopicCompletionString.substring(parseInt(mPos),this.fsTopicCompletionString.length);
	this.fsTopicCompletionString= bStr.toString() + value.toString() + eStr.toString()

	this.fsCompletionStringChanged=true;
}

function fsAssessmentIsPassed(lesNum)
{
	isComplete=true;
	for (i=1;i<=topicLinks.count; i++)
	{
		if ( (topicLinks.links[i].topic==resStr.assessment || topicLinks.links[i].topic=="Assessment" || topicLinks.links[i].topic.indexOf(resStr.fsPracticeExam)> -1 )&& topicLinks.links[i].lessonNum==lesNum)
		{
			if (this.fsGetTopicStatus(topicLinks.links[i].markerPos) != "2") isComplete=false;
		} 
	}
	return isComplete;
}

function fsClearBlueFolders(lesNum)
{
	for (i=1;i<=topicLinks.count; i++)
	{
		if (topicLinks.links[i].lessonNum==lesNum) // if not previously completed (3) set to 0 (yellow) or if previously completed (4) to 2 (green) .
		{
			if (this.fsGetTopicStatus(topicLinks.links[i].markerPos)=="3") this.fsSetCompletionString(topicLinks.links[i].markerPos,"0")
				else if (this.fsGetTopicStatus(topicLinks.links[i].markerPos)=="4") this.fsSetCompletionString(topicLinks.links[i].markerPos,"2")
		}
	}
}

function fsSetAllTopicsAsCompleted(lesNum,asmntNum)
{
	for (i=1;i<=topicLinks.count; i++)
	{
		if (topicLinks.links[i].lessonNum==lesNum && topicLinks.links[i].markerPos != asmntNum) // set all topics except assessment to "2" (green).
			this.fsSetCompletionString(topicLinks.links[i].markerPos,"2")
	}
}

function fsSetAllTopicsAsIncomplete(lesNum)
{
	for (i=1;i<=topicLinks.count; i++)
	{
		if (topicLinks.links[i].lessonNum==lesNum) // set all topics to "0"
			this.fsSetCompletionString(topicLinks.links[i].markerPos,"0")
	}
}

// ********** fsReportProgress() called on fsmenu and in fs accessiblity to report progress
	function fsReportProgress()
	{
		if (this.launchEnvironment != "TF" || typeof(worker)=="undefined" || this.isPreview || zipAndShip) return;
		cwh=this;
		workerFrame=worker;
		if (workerFrame != null && this.fsCompletionStringChanged)
		{
			if (this.useTdScoring)
			{
				if (typeof(this.wndContent.calcScoresWithSa) != "undefined")  this.wndContent.calcScoresWithSa();
				mlParms="&" + cwh.ml_getMlParms();
				if (cwh.al_restartTheCourse) blobParms="&suspend_data=" + escape("&statever=" + cwh.stateVer + "&ttime=" + parseInt(cwh.totalTime,10) + "&fullpg=" + this.wndContent.sSet.restartEntryPage);
					else blobParms="&suspend_data=" + escape(cwh.zs_getSuspendData(false));
				if (cwh.isLockdownExam)
					workerFrame.location.href="/lms/learn/examProgress.jsp?action=report&lobStartUuid=" + coursewareHandler.uuid + mlParms + blobParms;
				else
					workerFrame.location.href="/lms/learn/saveProgress.jsp?action=report" + mlParms + blobParms;
			}
			else // Non-Blob TF
			{
				reportProgressJsp="/lms/learn/saveProgress.jsp?topics=" + this.fsTopicCompletionString + "&completion=" + ThisPage.getCompletionCookie(this.acro) + "&secs=" + parseInt(this.secondsInCourse,10);
				if (typeof(this.wndContent.crsTitle) != "undefined" && this.wndContent.crsTitle.indexOf(resStr.fsPracticeExam)>-1) reportProgressJsp+="&score=" + this.fsExamScore;
				workerFrame.location.href=reportProgressJsp + "&" + this.params.toURLString();
			}
			this.fsCompletionStringChanged=false; // reset
			this.secondsInCourse=0; //reset
		}
	}

	function reportProgress()
	{
		if (this.launchEnvironment != "TF" || typeof(worker)=="undefined" || this.isPreview || zipAndShip) return;
		// This called by BSV courses whenever the completion cookie changes. 
		// It's called by OTS courses when the timer hits this.reportInterval (5 minutes).  JAR July 2010
		cwh=this;
		workerFrame=worker;
		if (workerFrame != null)
		{
			bmark = this.isBSV ? this.wndContent.videoPosition.toString() : escape(this.getBookmarkUrl());
			// Calculate time for BSV
			if (this.isBSV)
			{
				var secondsOnPage = ((new Date()).getTime() - this.timePageLoaded) / 1000;
				this.totalTime = parseInt(this.totalTime,10) + parseInt(secondsOnPage);
				this.timePageLoaded = (new Date()).getTime();
				if (this.useTdScoring) this.sessionTime += parseInt(secondsOnPage);
			}

			if (this.useTdScoring)
			{
				if (typeof(this.wndContent.calcScoresWithSa) != "undefined")  this.wndContent.calcScoresWithSa();
				mlParms="&" + cwh.ml_getMlParms();
				blobParms="&suspend_data=" +  escape(cwh.zs_getSuspendData(false));
				workerFrame.location.href="/lms/learn/saveProgress.jsp?action=report" + mlParms + blobParms;

				//cpy("/lms/learn/saveProgress.jsp?action=report" + mlParms + blobParms);
				//url = rootDir + "/blob_report.htm?action=report" + "&mldata=" + escape(cwh.ml_getMlParms()) + blobParms; // TESTING ONLY
				//window.open(url, 'blobWin', 'resizable=yes,width=860,height=500,scrollbars=yes');
			}
			else // Non-Blob TF
			{
				reportProgressJsp="/lms/learn/saveProgress.jsp?bmark=" + bmark + "&completion=" + ThisPage.getCompletionCookie(this.acro) + "&secs=" + parseInt(this.secondsInCourse,10);
				workerFrame.location.href=reportProgressJsp + "&" + this.params.toURLString();
				 //alert("reporting bmark: " + bmark + " and completion: " + ThisPage.getCompletionCookie(this.acro) + " and Time: " + parseInt(this.secondsInCourse,10));
			}
			// reset time
			this.secondsInCourse=0;
		}
	}

function tf_trackingRequest(trackingType, params, cwh)
{

	if (this.launchEnvironment == "CB" || typeof(Ajax) == "undefined") return;
	new Ajax.Request("/lms/learn/TF/content/tracking.jsp",
  {
    method: "post",
    parameters: params,
    //asynchronous:false, // make AJAX synchronous
    onSuccess: function(transport){
      var response = transport.responseText || "no response text";
      var result = response.substring(response.toLowerCase().indexOf("result="));
      result = result.substring(result.indexOf("=") + 1, result.indexOf("&"));
      if (parseInt(result) >= 0)
      {
	      if (trackingType == "EPTOStart")
	      	cwh.pt_testId = result;
	      // alert(trackingType + " Success!\n\nRequest:\n" + params + "\n\nResponse:\n" + response);
	    }
	    else
	    {
	    	alert(trackingType + " Failure!\n\nRequest:\n" + params + "\n\nResponse:\n" + response);
	    }
    },
    onFailure: function(){ 
    	alert("AJAX Failure: " + trackingType) 
    },
    onException: function(request, exception){
    	alert("JS Exception in callback code: " + exception);
    }
  });
}

function copyrightRequest()
{

	if (this.launchEnvironment == "CB" || typeof(Ajax) == "undefined") return;
	new Ajax.Request(this.wndContent.thisCourseDirectory + "frt001.htm",
	{
		method: "get",
		//parameters: params,
		//asynchronous:false, // make AJAX synchronous
		onSuccess: function(transport){
			var copyrightText = transport.responseText || "no response text";
			coursewareHandler.wndContent.showCopyright(copyrightText); // in common.js
		},
		onFailure: function(){ 
			alert("AJAX Failure: " + trackingType) 
		},
		onException: function(request, exception){
			alert("JS Exception in callback code: " + exception);
		}
	});
}

function tf_writeLmsString()
{
	lmsString="TR_STR=";
	completionCookie = ThisPage.getCompletionCookie(this.acro);
	for (var i=0;i<completionCookie.length;i++)
	{
		lmsString+=completionCookie.charAt(i);
		if (i<completionCookie.length-1) lmsString += ",";
	}
	lmsString+="$" + this.fsTopicCompletionString + "$";
	// get attempts
	for (i=0;i<this.fsTotalLessons;i++)
	{
		if (this.pt_attempts==null || typeof(this.pt_attempts[i])=="undefined" || this.pt_attempts[i]==null || this.pt_attempts[i]=="")
			lmsString+="0";
		else
			lmsString+=this.pt_attempts[i]
		if (i < this.fsTotalLessons-1) lmsString += ",";
	}
	lmsString+="$"
	for (i=0;i<this.fsTotalLessons;i++)
	{
		if (this.pt_lastScores==null || typeof(this.pt_lastScores[i])=="undefined" || this.pt_lastScores[i]==null || this.pt_lastScores[i]=="")
			lmsString+="0";
		else
			lmsString+=this.pt_lastScores[i]
		if (i<this.fsTotalLessons-1) lmsString += ",";
	}
	lmsString+="|0&track=7&TR_ID=" + this.pt_userkey + "&TR_ID2=" + this.acro;
	tf_trackingRequest("WriteLearningData", lmsString);
}

function getScoNum(scoId)
{
		if (this.topicLinks==null) return null;
		for (var index in this.topicLinks.links)
		{
			var topicLink = this.topicLinks.links[index];
			if (topicLink.id == scoId) return index;
		}
		return null;
}

function fsGetScoPosFromPg(pg)
{
		if (this.topicLinks==null) return null;
		for (var index in this.topicLinks.links)
		{
			var topicLink = this.topicLinks.links[index];
			if (topicLink.url == pg) return topicLink.markerPos;
		}
		return null;
}

	// Returns Page x of y for the topic. Used in TF courses
	function fsGetTopicPageStatus(sId)
	{
		if (sId=="") return "";
		beginPage="";
		nextTopicPage="";
		for (i=1;i<=topicLinks.count; i++)
		{
			if (topicLinks.links[i].id == sId)
			{
				beginPage=topicLinks.links[i].url;
				if (typeof(topicLinks.links[i+1]) != "undefined" && topicLinks.links[i+1].url != null) nextTopicPage=topicLinks.links[i+1].url;
				if (topicLinks.links[i].topic==resStr.fsProject) return "Page 1 of 1";
				break;
			}
		}
		//alert(parseInt(nextTopicPage.substring(3,6),10) + " - " + parseInt(beginPage.substring(3,6),10))
		pagesInTopic=parseInt(nextTopicPage.substring(3,6),10) - parseInt(beginPage.substring(3,6),10);
		if (typeof(this.wndContent.pagesInSco) != "undefined") pagesInTopic=this.wndContent.pagesInSco; // For 07ic^, which do not have assessments
			else if (nextTopicPage=="" || pagesInTopic < 1) return "";
		thisPageNum=  parseInt(this.wndContent.currPage.substring(3,6),10) - parseInt(beginPage.substring(3,6),10) + 1;
		return "Page " + thisPageNum + " of " + pagesInTopic;
	}

	function onSelectTabLink(tabLink)
	{
		var returnVal = true;
		var url = tabLink.url;
		// We're in tool mode if the tablink that was clicked is not a topics link and the tabLink is supposed to be
		// pointed to when it is clicked.  tabLink.pointWhenClicked == false when the link pops a window.
		if (tabLink.pointWhenClicked)
			// Only change the tool mode if the link is supposed to be pointed to when it is clicked.  Otherwise, it shouldn't
			// change the tool mode regardless of what it is currently set to.
			this.inToolMode = (tabLink.getTab().src.indexOf("navbartopics") == -1)

		if (this.inToolMode)
		{
			this.toolCaption = tabLink.caption;
			this.isLoadingToolPage = true;
		}
		else
		{
			this.isLoadingToolPage = false;
			this.toolCaption = "";
		}
		this.goPage(url);

		if (this.foobar != null && tabLink.pointWhenClicked) // don't update foobar when popping a window (glossary, progrpt, and eval)
			this.foobar.update(true);

		// false tells the TabLink that we dealt with it.
		return false;
	}

	// for design2011 Features list
	function clickFeatureLink(dest,caption,pops)
	{
		var url = dest;
		if (!pops) this.inToolMode = true;

		if (this.inToolMode)
		{
			this.toolCaption = caption;
			this.isLoadingToolPage = true;
		}
		else
		{
			this.isLoadingToolPage = false;
			this.toolCaption = "";
		}
		this.goPage(url);

		if (this.foobar != null && !pops) // don't update foobar when popping a window (glossary, progrpt, and eval)
			this.foobar.update(true);
	}

	function onCourseLaunch(url)
	{
		this.setSkinDir(url);

		if (typeof(window.opener) != "undefined" && window.opener!=null && !window.opener.closed)
		{
			if (this.launchEnvironment != "TF")
			{
				if (typeof(window.opener.parent.onCourseLaunch) != "undefined")
					window.opener.parent.onCourseLaunch(this.acro);
			}
		}

		this.loadUrl(url,false);
	}

	function onGoToCourseUrl(url)
	{
		this.stack.clear();

		var crsDir=getCoursesDirectory(this.acro) + this.acro + "/"
		if(url.indexOf("/") == -1)
			url = crsDir + url;

		this.onCourseLaunch(url);
	}

	function getBookmarkUrl()
	{
		return this.bookmarkUrl;
	}

	var exitButtonClicked = false;
	function onBeforeWindowUnload()
	{
 
		if (this.isPreview || (this.wndContent != null && typeof(this.wndContent.exitNoData) != "undefined" && this.wndContent.exitNoData) ) return;  // To close the window for 13 year olds.

 		//ThisPage.setCookie(this.acro + "_winId","",-999) ; // multiple window security cookie-- not implemented

		if (!exitButtonClicked)
		{
			exitButtonClicked = false;
			if (this.design2011)
				return resStr.exitTheRightWay2011;
			else
				return resStr.exitTheRightWay;
		}
	}

	function onExitClick()
	{
		exitButtonClicked = true;

		if (this.wndContent != null)
		{
			this.wndContent.stopAudio();
			if ( useClientSideData && typeof(this.wndContent.calcScoresWithSa) != "undefined")  this.wndContent.calcScoresWithSa();
		}

		if (typeof(isDynamicCd) != "undefined" && isDynamicCd)
			this.wndContent.exitDynCDCourse();
		else
			this.exitCourse();
	}

	function exitCourse()
	{
		if (typeof(isDynamicCd) != "undefined" && isDynamicCd)
		{
			this.wndContent.exitDynCDCourse()
			return;
		}
		
		if (typeof(this.acro) == "undefined")
			return;

		if (this.access && useClientSideData && typeof(parent.calcScoresWithSa) != "undefined") parent.calcScoresWithSa();

		if (typeof(this.wndContent.inDnoteEditor) != "undefined" && this.wndContent.inDnoteEditor == true) return;

		var bmark = this.isBSV ? this.wndContent.videoPosition.toString() : this.getBookmarkUrl();
		if (this.isBSV) this.videoPosition=bmark; // stored in videoPosition because wndContent is closed when needed for exit parms.

		this.closePoppedWindows();

		var launchEnvironment = ThisPage.getPassedParm("env",false);
		
		var wndCourse = this.wndContent.parent.parent;
		if (launchEnvironment == "FB") wndCourse = this.wndContent.parent.parent.parent; // Facebook environment wraps course in an iframe
		if (this.design2011) wndCourse = this.wndContent.parent.parent.parent; // ots wrapper
		if (!this.inCoursewareHtm) wndCourse = this.wndContent.parent;


// FOR TESTING ONLY
					if (isProductionServer && this.useTdScoring)
					{
						//if (this.access && typeof(parent.showBlobData) != "undefined") parent.showBlobData();
							//else if (typeof(this.wndContent) != "undefined" && typeof(this.wndContent.showBlobData) != "undefined") this.wndContent.showBlobData();
					}
////////////////////////////////

		if (this.allowEdit || (this.access && !useClientSideData) ||
			(typeof(this.wndContent.exitNoData) != "undefined" && this.wndContent.exitNoData) )  // To close the window for 13 year olds.
		{
			wndCourse.close();
			return;
		}

		if (this.showSurveyOnExit)
		{
			if (this.isFbCourse)
			{
				var postToWallURl = document.location.protocol + "//" + document.location.host + "/lms/fb/app/training/canvas/?action=showFeedDialog";
				this.surveyURL = "/lms/learn/survey.jsp?acro=" + this.acro + "&redirectTo=" + escape(postToWallURl);
			}
			else if (this.launchEnvironment == "TF") {
				this.surveyURL = "/lms/learn/showSurvey.jsp?" +  params.toURLString();
			}
			else 
				this.surveyURL = rootDir + "/showSurvey.jsp"
		}

		// If the course is running within a 3rd party LMS.
		if (this.is3rdLMS)
		{
			this.scorm=this.isScorm();
			params.put("scorm", (this.isScorm() ? "T" : "F"));
			if (this.isScorm() && this.launchEnvironment == "CB")
			{
				wndCourse = wndCourse.parent;
				this.surveyURL=null;
			}
		}

		this.addToTimeOnPage();
		this.secondsInCourse = parseInt(this.secondsInCourse,10);

		completionCookie = ThisPage.getCompletionCookie(this.acro);
		params.put("bmark", bmark);
		if (this.launchEnvironment == "TF")
		{
			params.put("secs", this.secondsInCourse);
			params.put("sestime", 	parseInt(this.sessionTime,10) );
		}
		else
			params.put("secs", parseInt(this.sessionTime,10) );
		params.put("lekey", this.launchEventKey);
		params.put("completion", completionCookie);

		if (this.useFsStyle)
		{
			params.put("tfassmnt", this.pt_resultsDataString);
			if (this.fsTopicCompletionString.length > 0)
				params.put("topics", this.fsTopicCompletionString);
			if ( (typeof(this.wndContent.crsTitle) != "undefined" && this.wndContent.crsTitle.indexOf(resStr.fsPracticeExam)>-1) ||
				(this.acro.substring(0,4)=="fhfd" && this.fsNumberOfLessons==8  && this.successDate != "") )
					params.put("score", this.fsExamScore);
		}
		if (this.surveyURL != null)
			params.put("surveyurl", this.surveyURL);

		// MindLeaders Create course
		if (this.courseType=="CAA")
		{
			if (this.design2011) caatData=this.wndContent.parent; // data is in course.htm
				else caatData=self;
			params.put("mlcreate_interaction", caatData.interactionPage);
			params.put("mlcreate_score", caatData.lastAssessmentScore);
			params.put("mlcreate_c2agree", caatData.clickToAgreeResult);
			params.put("mlcreate_survey", caatData.surveySubmitted);
		}

		if (this.isPreview)
		{
			wndCourse.close();
			return;
		}

		
		switch (launchEnvironment)
		{
			case "FB":  // The plan is not to use this, but I left it in in case it is needed in the interim. JAR
			case "TF":
				url = "/lms/learn/exitCourse.jsp?" + params.toURLString();
				if (this.useTdScoring)
				{
					cwh=this;	
					if (this.access)
					{
						cwh=parent.coursewareHandler;
						cwh.addToTimeOnPage();
					}
					if (zipAndShip)
					{
						scormParms=cwh.zs_getScormParms();
						url = rootDir + "/mlscorm.htm?action=exit" + scormParms + "&Suspend_Data=" +  escape(cwh.zs_getSuspendData(false));
						if (this.spLaunchUrl != null) url = this.spLaunchUrl + "?action=exit" + scormParms + "&Suspend_Data=" +  escape(cwh.zs_getSuspendData(false));
					}
					else
					{
						mlParms="&" + cwh.ml_getMlParms();
						blobParms="&suspend_data=" +  escape(cwh.zs_getSuspendData(false));
						if (cwh.al_restartTheCourse) blobParms="&overwrite=1&suspend_data=" + escape("&statever=" + cwh.stateVer + "&ttime=" + parseInt(cwh.totalTime,10) + "&fullpg=" + this.wndContent.sSet.restartEntryPage);
						url = "/lms/learn/exitCourse.jsp?action=exit" + mlParms + blobParms;
					}
				}
				break;
			case "ML":
				url = rootDir + "/learn/exitCourse.jsp?" + params.toURLString();
				break;
			case "CB":
				url = scriptsDirectory + "launchlob.exe?" + params.toURLString();
				break;
			default:
				alert("Launch environment unknown.");
		}

		// Tell them to wait. Moved to end by JAR
		var theDoc = this.wndContent.document;
		theDoc.open();
		theDoc.write("<html><link rel=\"stylesheet\" href=\"" + rootDir + "/shared/images/skins/1/shared_2011.css\" type=\"text/css\">");
		theDoc.write("<body class=closeMsg>");
		theDoc.write("<table width=\"100%\" height=\"100%\">");
		theDoc.write("<tr>");
		theDoc.write("<td align=\"center\" valign=\"middle\" height=\"100%\">");
		theDoc.write(resStr.courseExiting);
		theDoc.write("</td>");
		theDoc.write("</tr>");
		theDoc.write("</table>");
		theDoc.write("</body></html>");
		theDoc.close();

		//window.clipboardData.setData("Text",unescape(url));
		wndCourse.location.href = url;
	}

	function onImageClick(type)
	{
		if (self.name== 'bsv_popupQuestion') return;
		if (typeof(this.wndContent.isTfCourse) != "undefined" && this.wndContent.isTfCourse) return;
		if (this.isCaatEmbed) return;
		this.goPage(type);
	}

	function onHotWordClick(type, arg1, arg2)
	{
		if (typeof(arg1) == "undefined") arg1="";
		if (typeof(arg2) == "undefined") arg2="";
		
		// Prevent launch of supplied file download page if site Id is listed in special_cases.js
		if (type.toLowerCase()==this.acro + "sp.htm" && typeof(siteIdsNoSuppliedFiles) != "undefined" && siteIdsNoSuppliedFiles.indexOf("," + this.siteId.toLowerCase() + ",") > -1)
		{
			alert("Your training administrator has disabled file downloading.");
			return;
		}

		if (type.indexOf("abtacc.htm") > -1) type="accInstruction";
		if (arg1.indexOf("sk=") > -1) skinDir=arg1.substring(3,arg1.length);
		if (type=="floatwin")
		{
			// For type=="floatwin", arg1 = the htm and arg2 = the window parameters (optional)
			var popParms="toolbar=no,menubar=yes,resizable=yes,width=500,height=400,scrollbars=yes";
			if (arg2 != "" && arg2.indexOf("width=0,") == -1 ) popParms=arg2;
			ThisPage.floatWin(rootDir + "/course.htm?fullpg=" + getCoursesDirectory(this.acro) + this.acro + "/" + arg1, "floatWin",popParms);
		} else this.goPage(type);
	}

	function onKeyClick(key)
	{
		if (!this.keys.exists(key))
			return;
		// Add-a-Note, p and n keys only
		if(typeof(parent.isDnote) != "undefined" && parent.isDnote && key != "p" && key!="n") return;
		
		// Embed in CAAT -- no keystrokes
		if (this.isCaatEmbed) return;
		
		// TM lobs -- no keystrokes
		if (this.courseType == "TML") return;

		//Sco Only
		if (this.scoOnly && "achkrst".indexOf(key) > -1) return;

		//FS style omit keystrokes
		if (this.useFsStyle && "acghkrst".indexOf(key) > -1) return;

		if (typeof(this.wndContent.c_keysOff) != "undefined" && this.wndContent.c_keysOff.indexOf(key) > -1) return;

		// Video courses and pop quizes/scores, no keys
		if (this.wndContent.crsAcronym.indexOf("v_") > -1 || self.name.indexOf("quiz") > -1 || self.name.indexOf("popscores") > -1) return;

		var type = "";
		var isAccessibilityQuestionWindow =
			(this.wndContent.name.indexOf("acc_question_window") != -1);
		//ECDL: turn off scores and SA
		if (key == "a" && ThisPage.allowSA(this.acro) == false) return;
		if (key == "s" && ThisPage.allowScores(this.acro) == false) return;

		if (this.inSkillAssessment)
		{
			if (!this.keys.col[key].isAllowed(ks_InSkillAssessment))
				return;
		}
		else if (isAccessibilityQuestionWindow)
		{
			if (!this.keys.col[key].isAllowed(ks_InAccessibilityQuestionWindow))
				return;
		}
		else
		{
			if (!this.keys.col[key].isAllowed(ks_InMlieCourseWindow))
				return;
		}

		if (this.keys.col[key].type != "")
			this.goPage(this.keys.col[key].type);
	}

	function onFoobarButtonClick(type)
	{
		if (this.isCoursePageLoading)
		{
			// Wait for course page to load before doing anything else.
			return;
		}
		// Display first c2c instructions if next button is clicked on first c2c page.
		if (type=="next" && typeof(this.wndContent.firstc2c) != "undefined" && this.wndContent.firstc2c==true)
			this.wndContent.nextPage = this.wndContent.currPage + "?instr=yes"

		this.goPage(type);
	}

	function onFlashClick(type)
	{
		this.goPage(type);
	}

	function goPage(type)
	{
		if (typeof(this.wndContent.showingModalDialog) != "undefined" && this.wndContent.showingModalDialog) return;
		if (typeof(this.wndContent.useLocalNav) != "undefined" && this.wndContent.useLocalNav)
		{
			this.wndContent.localNav(type);
			return;
		}

		var pgType = "";
		if (typeof(this.wndContent.pgType) != "undefined") pgType = this.wndContent.pgType;

		if (type == this.acro.substring(0,3) + "title.htm") type="title"; // if link to acrotitle.htm, use type.
		if (type.substring(0,4) == "bsv_")
		{
			bsvType=type.substring(4,type.length);
			type="bsv";
		}
		var crsDir =
			((typeof(this.wndContent.isSalsa) != "undefined" && pgType.indexOf( "question" ) != 0 ) ?
			(salsaCoursesDirectory + this.wndContent.serID) : (getCoursesDirectory(this.acro) + this.acro)) + "/";

		if (this.tabBar != null)
		{
			var tabLink = this.tabBar.getTabLinkWithUrl(type);
			if (tabLink != null && tabLink.pointWhenClicked && tabLink != this.tabBar.currentTabLink)
				this.tabBar.selectTabLink(tabLink);
		}

		var dest="";
		var servlet = "/lms/ScoreServer.srv";

		switch (type)
		{
		case "audioOn":
			ThisPage.setPreference(PR_PageAudio, "1");
			this.wndContent.location.reload();
			if (this.wndContent.useHtml5Audio) parent.h5Play();
			return;
			break;
		case "audioOff":
			ThisPage.setPreference(PR_PageAudio,"0");
			// ThisPage.setPreference(PR_ShowText,"1");
			this.wndContent.location.reload();
			if (this.wndContent.useHtml5Audio) parent.h5Stop();
			return;
			break;
		case "pause":
			if (this.wndContent.pgTpl=="videopg") this.wndContent.playOrPauseVideo();
			else if (this.wndContent.pgTpl=="doitpg" || this.wndContent.pgTpl=="showme_only") this.wndContent.playOrPauseShowme();
			else if (this.wndContent.pgTpl.indexOf("flsize_slideshow") > -1) this.wndContent.playOrPauseSlides();
			else if (this.wndContent.pgTpl.indexOf("progress") > -1 || this.wndContent.pgTpl=="embed") this.wndContent.playOrPauseAudio();
			return;
			break;
		case "edit":
			var goJsp = false;
			if (this.launchEnvironment == "TF")
				goJsp = true;

			if (this.wndContent.currPage == "satakeit.htm")
				var path = escape(this.acro + "\\" + "test\\" + this.wndContent.currPage);
			else
				var path = escape(this.acro + "\\" + this.wndContent.currPage);

			var retVal = this.floatWin(rootDir + "/cce_checklock.asp?gojsp=" + goJsp + "&page=" + path, "cce",
				'toolbar=no,menubar=no,resizable=yes,width=600,height=440,scrollbars=yes');
			if (retVal == "OK")
				this.wndContent.reload();
			break;
		case "addanote":
			if (this.design2011)
			{
				this.wndContent.showAanEditor();
				return;
			}
			siteId=ThisPage.getSiteId();
			if (siteId !="")
			{
				if (this.wndContent.currPage == "title_page.htm")
					crsPage = sharedDirectory + "templates/title_page.htm?course=" + this.acro;
				else if (this.wndContent.currPage == "fsmenu.htm")
					crsPage = getCoursesDirectory(this.wndContent.crsAcronym) + this.wndContent.crsAcronym + "/" + this.wndContent.crsAcronym.substring(0,2) + "a001.htm";
				else if (this.wndContent.currPage == "bsv_title_page.htm")
					crsPage = sharedDirectory + "templates/bsv/bsv_title_page.htm?acro=" + this.acro;
				else
					crsPage = getCoursesDirectory(this.wndContent.crsAcronym) + this.wndContent.crsAcronym + "/" +
						this.wndContent.currPage;
				aanUrl = rootDir + "/custom/app/dnoteframe.htm?sitejs=" + siteId + "&crsPage=" + escape(crsPage) + "&" + params.toURLString();
				this.floatWin(aanUrl, 'aan','resizable=yes,width=800,height=500,scrollbars=yes,menubar=no,toolbar=no,status=yes');
			}
			else
				alert ("Error: Cannot determine the site ID, which is required to use Add-a-Note.");
			break;
		case "custom": //custom button popup window
			if (typeof(customButton_url) == "undefined")
				return;
			custDest=customButton_url
			// for review of custom courses
			if (typeof(isCustomEditor) != "undefined")
			{
				if (this.wndContent.pgBBar=="bk")
				{
					alert("You cannot add a review comment to this page. Please add your comment to the page that links to this page.");
					return;
				}
				if (this.wndContent.currPage == "title_page.htm")
					crsPage = sharedDirectory + "templates/title_page.htm?course=" + this.acro;
				else
					crsPage = getCoursesDirectory(this.wndContent.crsAcronym) + this.wndContent.crsAcronym + "/" + this.wndContent.currPage;
				custDest=custDest + "?crsPage=" + crsPage;
			}
			this.floatWin(custDest, 'custom',customButton_windowParms);
			break;
		case "printsim":
			this.wndContent.printSimulation();
			return;
			break;
		case "print":
			this.wndContent.focus();
			if (this.wndContent.frames && this.wndContent.frames["eFrame"] != null) this.wndContent.frames["eFrame"].focus();
			var printCode = "try {" +
				"this.wndContent.print();" +
				"}" +
				"catch (e) {" +
				"alert(\"Press Ctrl+P to print.\");" +
				"}";
			eval(printCode);
			return;
			break;
		case "buybook":
			this.floatWin(this.bookURL,"buyBook","resizable=yes,width=750,height=500,scrollbars=yes,menubar=yes,toolbar=yes");
			break;
		case "gettingstarted":
			var gettingStartedAcro = this.isDummies ? "d_di01" : "di1";
			LaunchLob(gettingStartedAcro, this.accessible, this.launchEnvironment);
			break;
		case "help":
			if (this.useFsStyle)
			{
				this.wndContent.fsShowPrompt("help");
				return;
			}
			if (typeof(c_useCourseDirHelp) != "undefined") helpDir=getCoursesDirectory(this.acro) + this.acro + "/";
				else helpDir=localizedSharedDirectory +"help/courses/";
			d11Parm="";
			wSize="width=680,height=500";
			if (this.design2011)
			{
				helpFile="using_this_course_2011.htm";
				d11Parm="&d11=1";
				wSize="width=840,height=650";
			}
				else if (this.useNewDesign) helpFile="using_this_course_mlc.htm";
					else helpFile="using_this_course.htm";
			dest=rootDir + "/course.htm?acro=" + this.acro + d11Parm + "&fullpg=" + helpDir + helpFile + "?course=" + this.acro + ThisPage.getSkinParm("&") + d11Parm;
			if (this.inInstantMentoring()) dest=dest + "&showIM=1";
			this.floatWin(dest, "usingcourses_window",
				"resizable=yes,menubar=yes,toolbar=no," + wSize + ",scrollbars=yes,status=no");
			return;
			break;
		case "exercises":
			this.floatWin(getCoursesDirectory(this.acro) + this.acro + '/' + this.acro + 'xr.htm' + ThisPage.getSkinParm("?"), 'exerciseWin',
				'toolbar=no,menubar=yes,resizable=yes,width=600,height=440,scrollbars=yes');
			break;
		case "notes_open":
			notesUrl= rootDir + "/course.htm?fullpg=" + sharedDirectory +"templates/notes.htm&course=" + this.acro;
			if (location.href.indexOf("getaudio=1")>-1) notesUrl= rootDir + "/course.htm?fullpg=" + sharedDirectory +"templates/getaudio.htm&course=" + this.acro;
			openWin=this.windowIsOpen("notes")
			if (openWin != null)
			{
				openWin.focus();
				openWin.frames[0].document.frmNotes.noteText.focus();
			} else this.floatWin(notesUrl, 'notes','resizable=yes,width=480,height=480,scrollbars=no');
			return;
			break;
		case "notes_print":
			this.wndContent.printUserNotes();
			return;
			break;
		case "notes_backcour":
			this.wndContent.giveCourseFocus();
			return;
			break;
		case "notes_save":
			this.wndContent.savefile();
			return;
			break;
		case "notes_copy":
			this.wndContent.getCourseText();
			return;
			break;
		case "notes_email":
			this.wndContent.emailNotes();
			return;
			break;
		case "notes_close":
			this.wndContent.closeNotesWindow();
			return;
			break;
		case "showme":
			this.wndContent.stopAudio();
			this.wndContent.openFlashSim(this.wndContent.showmeName + ".swf");
			break;
		case "showkeys":
			this.wndContent.showKeyBox();
			break;
		case "quickref":
			qrFile=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.quickrefFile;
			if (typeof(this.wndContent.qrWidth) !="undefined") qW=this.wndContent.qrWidth;
				else qW="680";
			if (typeof(this.wndContent.qrHeight) != "undefined") qH=this.wndContent.qrHeight;
				else qH="500";
			this.floatWin(qrFile, "quickref","resizable=yes,menubar=yes,toolbar=no,width=" + qW + ",height=" + qH + ",scrollbars=yes,status=no");
			return;
			break;
		case "showmepg":
			this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?autorun=1&intro=0";
			break;
		case "doitpg":
			this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?autorun=0&intro=0";
			break;
		case "showexploreflash":
			this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?showexplore=1";
			break;
		case "showexploreit":
			this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?noinstr=1";
			break;
		case "sppage":
			if (typeof(siteIdsNoSuppliedFiles) != "undefined" && siteIdsNoSuppliedFiles.indexOf("," +    this.siteId.toLowerCase() + ",") > -1)
			{
				alert("Your training administrator has disabled file downloading.");
				return;
			}
			dest = getCoursesDirectory(this.acro) + this.acro + "/" + this.acro + "sp.htm";
			break;
		case "supplied": //supplied file in download subdirectory
			if (typeof(siteIdsNoSuppliedFiles) != "undefined" && siteIdsNoSuppliedFiles.indexOf("," +    this.siteId.toLowerCase() + ",") > -1)
			{
				alert("Your training administrator has disabled file downloading.");
				return;
			}
			dest = getCoursesDirectory(this.acro) + this.acro + "/download/" + this.acro + "sp.exe";
			break;
		case "prev":
			var prevPage = this.wndContent.prevPage;
			if (typeof(prevPage) == "undefined" || prevPage == "")
				return;
			if (this.wndContent.name.indexOf("acc_question_window") != -1 && typeof(inSa) == "undefined") //don't turn page in acc question
				return;

			if (this.useFsStyle && this.wndContent.currPage.indexOf("001.htm")>-1) prevPage=rootDir + "/shared/templates/fsmenu.htm?start=" + this.wndContent.unitNum;
		
			if (prevPage=="goPrevLesson") // dynamic js pages
			{
				this.wndContent.goPrevLesson();
				return;
			}
			if (prevPage=="goWelcome") // dynamic js pages
			{
				this.wndContent.goLesson(0);
				return;
			}

			if (this.handleMacro(prevPage))
				return;

			dest=crsDir + prevPage;
			if (this.wndContent.crsAcronym.substring(0,2)=="l_") dest=dest+"?slidenum=last";

			if (prevPage == "frt001.htm" && (this.design2011 || typeof(this.wndContent.c_hideCopyrights) != "undefined") ) dest=getTitlePage(this.acro);
			if (prevPage == this.acro.substring(0,3) + "title.htm") dest=getTitlePage(this.acro);
			if (prevPage=="goback" || pgType=="pop") dest="jsback";
			if (prevPage.indexOf("/") > -1 || prevPage.indexOf("javascript:") > -1) dest=prevPage;
			break;
		case "next":
			if (!this.wndContent.allowNextPage) return;
			this.lastCoursePage=this.wndContent.currPage;
			var nextPage = this.wndContent.nextPage;
			if (typeof(nextPage) == "undefined" || nextPage == "")
				return;

			if (ThisPage.isiPad
				&& this.wndContent.pgTpl=="full_progressive"
				&& this.wndContent.ThisPage.getPreference(PR_PageAudio) != "0"
				&& !this.wndContent.audioIsDone
				&& this.wndContent.currentAudioNum < this.wndContent.progSteps)
				{
					this.wndContent.audioDone();
					return;
				}

			if (this.useFsStyle && nextPage.indexOf("001.htm")>-1) nextPage=this.fsGetNextPage();

			if (nextPage=="goNextLesson") // dynamic js pages
			{
				this.wndContent.goNextLesson();
				return;
			}
			if (nextPage=="goFirstLesson") // dynamic js pages
			{
				this.wndContent.goLesson(1,1);
				return;
			}

			if (nextPage=="goVideo") //bsv
			{
				this.wndContent.goVideo();
				return;
			}

			if (this.wndContent.name.indexOf("acc_question_window") != -1 && typeof(this.wndContent.inSa) == "undefined") //don't turn page in acc question
				return;

 			if (this.handleMacro(nextPage))
				return;

			// For insurance courses, do not allow user to go to the next page if the question is not answered:
			if ( (this.acro.substring(0,3)=="h32" || typeof(this.wndContent.c_mustAnswerQuestions) != "undefined") && !this.wndContent.hasBeenAnswered())
			{
				alert(resStr.answerToContinue);
				return;
			}

			dest=crsDir + nextPage;
			if (nextPage=="sanext")
			{
				if (this.wndContent.hasBeenAnswered())
					dest=this.wndContent.saNextQuestion;
				else
					dest="";
			}
			if (nextPage.indexOf("title") > -1)
				dest=getTitlePage(this.acro);
			// shared congrats page
			if (nextPage.indexOf("congrats") > -1 && ThisPage.allowScores(this.acro) && typeof(this.wndContent.c_congrats) == "undefined")
			{
				if (useClientSideData)
					dest = rootDir + "/shared/images/skins/" + this.wndContent.parent.skinDir + "/pages/congrats_js.htm?acro=" + this.acro;
				else if (this.launchEnvironment == "TF")
					dest = getScorePage("endcourse","");
				else
					dest=scriptsDirectory + "scores.exe?course=" + this.acro + "&type=endcourse" + "&comp=" + ThisPage.getCompletionCookie(this.acro) + ThisPage.getSkinParm("&");
			}
			if (nextPage.indexOf("/") > -1 || nextPage.indexOf("javascript:") > -1)
				dest=nextPage;
			break;
		case "next_ptQuestion": //TF courses post test, go to the next question
			this.wndContent.pt_nextQuestion();
			return;
			break;
		case "dynamicCdCourselist":
			exitButtonClicked = true;
			this.wndContent.exitDynCDCourse("coursemenu");
			return;
			break;
		case "fbexit": //FB isFbCourse
			//dest=rootDir + "/shared/templates/fbmenu.htm?start=" + this.wndContent.unitNum + "&lastseq=" + this.getScoNum(this.wndContent.ScoId);
			this.showSurveyOnExit=true;
			this.onExitClick();
			break;
		case "exit":
		case "courselist":
		case "saexit":
			if (this.isTfCourse)
			{
				this.tf_writeLmsString();
				pText=resStr.exitPrompt;
				pTitle=resStr.exitPromptTitle;
				yesFunction="fsClosePrompt();coursewareHandler.onExitClick();";
				noFunction="fsClosePrompt();";
				this.wndContent.fsYesNoPrompt(pTitle,pText,yesFunction,noFunction)
			} else this.onExitClick();
			return;
			break;
		case "title":
			// IM TEXT TEMPORARILY TURNED OFF if (coursewareHandler.inInstantMentoring() && coursewareHandler.useNewDesign && coursewareHandler.isFirstLaunch && typeof(coursewareHandler.wndContent.pgTpl) != "undefined" && coursewareHandler.wndContent.pgTpl != "mentor_intro") dest=sharedDirectory + "templates/mentor_intro.htm?course=" + acro + ThisPage.getSkinParm("&");
			dest=getTitlePage(this.acro);
			break;
		case "menu":
			// Food Saftey Style menu page
			if (this.pt_inTest)
			{
				this.wndContent.ptShowTestResults("menu");
				return;
			}
			if (this.isFbCourse)
			{
				this.showSurveyOnExit=false;
				this.onExitClick();
				// dest=rootDir + "/shared/templates/fbmenu.htm?start=" + this.wndContent.unitNum + "&lastseq=" + this.getScoNum(this.wndContent.ScoId);
			}
			else
				dest=rootDir + "/shared/templates/fsmenu.htm?start=" + this.wndContent.unitNum + "&lastseq=" + this.getScoNum(this.wndContent.ScoId);
			break;
		case "tools":
			// Food Saftey Style tools popup
			this.wndContent.fsShowPrompt("help");
			return;
			break;
		case "jsback":
			dest="jsback";
			break;
		case "sa":
			dest=this.getSkinnedTemplatePageDirectory(this.acro) +"sainstrc.htm?course=" + this.acro + ThisPage.getSkinParm("&");
			break;
		case "beginSa":
			this.enterSkillAssessment();
			requiredQuestions=this.wndContent.getRequiredSAQuestions();

			// Omit simulation questions from SA if the user does not have flash or there are no sims in sa
			if (this.omitSims == null)
				this.omitSims = (!this.useFlash || typeof(this.wndContent.saFlashSims) == "undefined" || this.wndContent.saFlashSims == "") ? true : false;

			if (this.wndContent.useClientSideData)
			{
				this.wndContent.stopAudio(); // for HTML5 audio
				this.wndContent.createSaQuestionList();
				dest=getCoursesDirectory(this.acro) + this.acro + "/" + coursewareHandler.saQuestionList[0] + ".htm?qnum=1&qtotal=" + coursewareHandler.saQuestionList.length;
			}
			else if (this.launchEnvironment == "TF")
			{
				dest=servlet + "/test.exe/" + this.acro + ".cid/" + "start.sa/" + this.omitSims + ".omitsims";
			}
			else
				dest=scriptsDirectory + "test.exe?course=" + this.acro + "&type=start" + requiredQuestions;
			break;
		case "beginSaAcc":
			this.enterSkillAssessment();
			if (typeof(saFlashSims)=="undefined") saFlashSims="";
			dest=scriptsDirectory + "test.exe?course=" + this.acro + "&type=start&omitQuestionList=" + imageQuestions + saFlashSims + "&loc=" + localizationCode;
			if (this.launchEnvironment == "TF")
			{
				if (this.omitSims == null)
					this.omitSims = (typeof(saFlashSims)!="undefined" && saFlashSims.length != 0)? true : false;
				dest=servlet + "/test.exe/" + this.acro + ".cid/" + "start.sa/" + this.omitSims + ".omitsims/isacc.acc";
			}
			break;
		case "saSkipSim":
			var currPage = this.wndContent.currPage;
			if (typeof(this.wndContent.isSalsa)!="undefined")
				dest=scriptsDirectorySalsa + "text.exe/" + this.wndContent.crsAcronym + "/test/"+ currPage + "?text=0";
			else
				dest=scriptsDirectory + "text.exe/" + this.acro + "/test/"+ currPage + "?text=0";
			if (this.launchEnvironment == "TF")
				dest=servlet + "/text.exe/" + this.acro + ".cid/" + "answer.sa/" + currPage + "/0.sim";
			break;
		case "saNextQ":
			dest=this.wndContent.saNextQuestion;
			break;
		case "sanext":
			if (this.wndContent.hasBeenAnswered())
				dest=this.wndContent.saNextQuestion;
			else
				dest="";
			break;
		case "scores":
			courseTemplateParm="";
			if (typeof(this.wndContent.useCourseScoreTemplate) != "undefined") courseTemplateParm="&crstpl=" + this.wndContent.useCourseScoreTemplate;
			if (typeof(this.wndContent.useScoresTemplate) != "undefined") courseTemplateParm="&sharedtpl=" + this.wndContent.useScoresTemplate;
			if (this.wndContent.useClientSideData)
				dest=sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/scoresa_js.htm?acro="+ this.acro + "&comp=" + ThisPage.getCompletionCookie(this.acro);
			else if (this.launchEnvironment == "TF")
			{
				if (courseTemplateParm.indexOf("scores_course.htm")!=-1)
					dest = getScorePage("scores_course", courseTemplateParm);
				else
					dest = getScorePage("contents", courseTemplateParm);
			}
			else
				dest=scriptsDirectory + "scores.exe?course=" + this.acro + "&type=contents"+ courseTemplateParm + "&comp=" + ThisPage.getCompletionCookie(this.acro) + ThisPage.getSkinParm("&");
			break;
		case "popscores":
			winName="popscores";
			courseTemplateParm="";
			if (typeof(this.wndContent.useCourseScoreTemplate) != "undefined") courseTemplateParm="&crstpl=" + this.wndContent.useCourseScoreTemplate;
			if (typeof(this.wndContent.useScoresTemplate) != "undefined") courseTemplateParm="&sharedtpl=" + this.wndContent.useScoresTemplate;
			if (this.launchEnvironment == "TF")
				dest = getScorePage("popscores",courseTemplateParm);
			else
				dest=scriptsDirectory + "scores.exe?course=" + this.acro + "&type=contents"+ courseTemplateParm + "&comp=" + ThisPage.getCompletionCookie(this.acro) + ThisPage.getSkinParm("&");
			params.put("fullpg",dest);
			this.floatWin(rootDir + "/course.htm?course=" + this.acro, winName,'resizable=yes,width=640,height=480,scrollbars=yes');
			return;
			break;
		case "scores,ceu":
			if (useClientSideData)
				dest = rootDir + "/shared/images/skins/" + this.wndContent.parent.skinDir + "/pages/scoreceu.htm?acro=" + this.acro;
			else if (this.launchEnvironment == "TF")
				dest = getScorePage("ceu", "");
			else
				dest=scriptsDirectory + "scores.exe?course=" + this.acro + "&type=ceu" + "&comp=" + ThisPage.getCompletionCookie(this.acro);
			break;
		case "scores_tf":
			this.wndContent.fsShowPrompt("scores_tf");
			return;
			break;
		case "series transcript":
		case "series_transcript":
			seriesTranscript = sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/scores_series.htm";
			stParms= "?" + params.toURLString() + "&completion=" + this.courseCompletionString;
			if (this.useTdScoring)
			{
				if (typeof(this.wndContent.calcScoresWithSa) != "undefined")  this.wndContent.calcScoresWithSa();
				uKeyParm=ThisPage.getPassedParm("userkey");
				if (uKeyParm != null && uKeyParm != "") uKeyParm="&userkey=" + uKeyParm;
					else uKeyParm="";
				stParms="?tdscoring=1&jsp=/lms/learn/seriesScoreData.jsp&" + this.ml_getMlParms() + "&suspend_data=" + escape(this.zs_getSuspendData(false)) + uKeyParm;
			}
			else if (this.launchEnvironment == "TF")
				stParms+="&jsp=/lms/learn/seriesScoreData.jsp";
			else
				stParms+="&jsp=" + rootDir + "/learn/seriesScoreData.jsp";
			dest=seriesTranscript + stParms;
			if (this.isBSV)
			{
				winName="bsv_series_transcript";
				this.floatWin(rootDir + "/course.htm?course=" + this.acro + "&loc=" + coursewareHandler.localizationCode + "&fullpg=" + escape(dest) , winName,'resizable=yes,width=675,height=530,scrollbars=yes');
				return;
			}
			if (this.useFsStyle)
			{
				dest = sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/scores_series_fs.htm" + stParms;
				winName="fs_series_transcript";
				courseHtm="/course.htm";
				if (coursewareHandler.localizationCode != "") courseHtm="/course_utf8.htm";
				this.floatWin(rootDir + courseHtm + "?course=" + this.acro + "&loc=" + coursewareHandler.localizationCode + "&fullpg=" + escape(dest) , winName,'resizable=yes,width=675,height=530,scrollbars=yes');
				return;
			}
			break;
		case "glossarygame":
			dest=rootDir + "/shared/templates/glossary_game.htm?acro=" + this.acro;
			this.floatWin(dest,"glossarygame",'height=460,width=660,status=0;toolbar=0,menubar=0,scrollbars=0,resizable=0');
			return;
		break;
		case "flashcards":
			dest=rootDir + "/shared/templates/flashcards.htm?acro=" + this.acro;
			hw="height=370,width=475";
			if (!ThisPage.isIE) hw="height=365,width=515";
			this.floatWin(dest,"flashcards",hw + ",status=0;toolbar=0,menubar=0,scrollbars=0,resizable=0");
			return;
		break;
		case "glossary":
			if (typeof(this.wndContent.showGlossary) != "undefined" && this.wndContent.showGlossary==false) return;
			if (this.useFsStyle)
			{
				this.wndContent.fsShowPrompt("glossary");
				return;
			}
			seriesTitle=ThisPage.getSeriesTitle();
			if (this.design2011)
				glossaryURL= sharedDirectory +"templates/glossary_2011.htm?course=" + this.acro + "&stitle=" + escape(seriesTitle) + ThisPage.getSkinParm("&");
			else
				glossaryURL= sharedDirectory +"templates/glossary_search.htm?course=" + this.acro + "&internet=" + this.internetSearchEnabled + "&reflib=" + this.reflibEnabled + "&stitle=" + escape(seriesTitle) + ThisPage.getSkinParm("&");
			var openWin=this.windowIsOpen("glossary")
			if (openWin != null) openWin.focus();
				else this.floatWin(glossaryURL, 'glossary','resizable=yes,width=640,height=480,scrollbars=yes');
			break;
		case "encyclopedia":
			if (typeof(this.wndContent.hasEncyclopedia) == "undefined" || !this.wndContent.hasEncyclopedia) return;
			if (this.useFsStyle)
			{
				this.wndContent.fsShowPrompt("encyclopedia");
				return;
			}
			seriesTitle=ThisPage.getSeriesTitle();
			encyclopediaURL= sharedDirectory +"templates/encyclopedia.htm?course=" + this.acro + "&stitle=" + escape(seriesTitle) + ThisPage.getSkinParm("&");
			var openWin=this.windowIsOpen("encyclopdedia")
			if (openWin != null) openWin.focus();
				else this.floatWin(encyclopediaURL, 'encyclopedia','resizable=yes,width=600,height=400,scrollbars=yes');
			break;
		case "other_resources":
			if (this.useFsStyle)
			{
				this.wndContent.fsShowPrompt("other_resources");
				return;
			}
			seriesTitle=ThisPage.getSeriesTitle();
			other_resourcesURL= sharedDirectory +"templates/resources.htm?course=" + this.acro + "&stitle=" + escape(seriesTitle) + ThisPage.getSkinParm("&");
			var openWin=this.windowIsOpen("encyclopdedia")
			if (openWin != null) openWin.focus();
				else this.floatWin(other_resourcesURL, 'other_resources','resizable=yes,width=600,height=400,scrollbars=yes');
			break;
		case "mindex":
			this.floatWin(sharedDirectory + 'mindex/mxmain.htm' + ThisPage.getSkinParm("?"), 'mindex','resizable=yes,width=280,height=450,scrollbars=no')
			break;
		case "search":
			if (ThisPage.getCookie("TmsSessn") != null) return;
			ThisPage.setCookie("lastSelectedCourses", this.acro, 36000);
			this.floatWin(sharedDirectory + 'search/shmain.htm' + ThisPage.getSkinParm("?"), 'search_window', 'resizable=yes,width=575,height=400,scrollbars=yes');
			break;
		case "accInstruction":
			if (this.isCustom) dest=sharedDirectory + "access/abtacc.htm?course=" + this.acro + ThisPage.getSkinParm("&");
				else dest=sharedDirectory + "access/text_only.htm?course=" + this.acro;
			break;
		case "access":
			if (this.wndContent.useClientSideData)
			{
				params.put("access","1");
				if (this.stateVer != "") params.put("statever", this.stateVer); // on first launch, state is not in params
				accHref=rootDir + "/acc_frame.htm?jsdat=1&access=1"; // parms added automatically
			}
				else accHref=crsDir + this.acro + "ac.htm?access=1" + ThisPage.getSkinParm("&");
			this.floatWin(accHref, 'access_window','resizable=yes,width=620,height=450,scrollbars=yes,menubar=yes,toolbar=yes,status=yes');
			break;
		case "textonly":
			var textonlyHref=crsDir + this.acro + "ac.htm?access=1&printversion=1" + ThisPage.getSkinParm("&");
			if (this.stateVer != "") params.put("statever", this.stateVer); // on first launch, state is not in params
			this.floatWin(textonlyHref, 'access_window','resizable=yes,width=680,height=450,scrollbars=yes,menubar=yes,toolbar=no,status=no');
			break;
		case "progrpt":
			if (typeof(this.wndContent.scoType) != "undefined") scoType=this.wndContent.scoType;
				else scoType="";
			var progrptHref;
			if (this.wndContent.useClientSideData)
			{
				if (this.design2011)
					progrptHref = sharedDirectory + "progrpt/prtpl_js_2011.htm";
				else
					progrptHref = sharedDirectory + "progrpt/prtpl_js.htm";
			}
			else if (this.launchEnvironment == "TF")
				progrptHref = "/lms/learn/progrpt.jsp";
			else
				progrptHref = scriptsDirectory + "progrpt.exe";
			progrptHref +="?course=" + this.acro +"&indexwin=yes&scotype="+scoType+ ThisPage.getSkinParm("&");
			this.floatWin(progrptHref, 'progrpt_window', 'resizable=yes,width=300,height=450,scrollbars=yes');
			break;
		case "mentorpop":
			if (this.instantMentorClassKey == "noseat")
				imLaunchUrl = sharedDirectory + "templates/instant_mentor_no_seat.htm";
			else
			{
				imLaunchUrl = this.mentorHost + "/lms/learn/mentor/imFrame.jsp?classkey=" + this.instantMentorClassKey +
					"&fname=" + escape(this.userFirstName) + "&lname=" + escape(this.userLastName) +
					"&sid=" + escape(this.siteId) + "&uid=" + escape(this.userId) +
					"&pg=" + this.wndContent.currPage + "&acro=" + this.acro + "&from=";
				if (this.launchEnvironment == "TF")
					imLaunchUrl += "c";
				else
					imLaunchUrl += "w";
			}
			if (this.isBSV && typeof(this.wndContent.WMPlay) != "undefined" && this.wndContent.WMPlay.PlayState == 2) this.wndContent.WMPlay.Pause();
			this.floatWin(imLaunchUrl, 'chat','width=515,height=515,location=0,resizable=1');
			break;
		case "ceus":
			stParms= "?" + params.toURLString();
			if (this.useTdScoring)
			{
				if (typeof(this.wndContent.calcScoresWithSa) != "undefined")  this.wndContent.calcScoresWithSa();
				stParms="?tdscoring=1&" + this.ml_getMlParms() + this.zs_getSuspendData(false);
			}
			if (!this.isBSV && isMindLeaders && this.hasSeriesCeus()) dest=sharedDirectory + "ceus/ceus_series.htm" + stParms; // !BSV added 2011
				else dest=sharedDirectory + "ceus/ceus.htm" + stParms;
			break;
		case "ceu,scores":
			if (useClientSideData)
				ceuScores = rootDir + "/shared/images/skins/" + this.wndContent.parent.skinDir + "/pages/scoreceu_js.htm?acro=" + this.acro;
			else if (this.launchEnvironment == "TF")
				ceuScores = getScorePage("ceu", "");
			else
				ceuScores=scriptsDirectory + "scores.exe?course=" + this.acro + "&type=ceu" + "&comp=" + ThisPage.getCompletionCookie(this.acro);
			this.floatWin(ceuScores, 'ceuWin', 'toolbar=no,menubar=yes,resizable=yes,width=620,height=460,scrollbars=yes');
			break;
		case "ceu,eval":
			var ceuEval = sharedDirectory + "ceus/ceueval.htm";
			this.floatWin(ceuEval, 'ceuWin', 'toolbar=no,menubar=yes,resizable=yes,width=620,height=460,scrollbars=yes');
			break;
		case "ceu,app":
			var ceuApp = "ceus/ceuapp.jsp?isMindleaders=1&course=" + this.acro;
			if (!isMindLeaders) ceuApp = "http://courses.mindleaders.com" + sharedDirectory + ceuApp;
			else if (this.launchEnvironment == "TF") ceuApp = "/lms/learn/" + ceuApp;
			else ceuApp = sharedDirectory + ceuApp;
			
			this.floatWin(ceuApp, 'ceuWin', 'toolbar=no,menubar=yes,resizable=yes,width=620,height=460,scrollbars=yes');
			break;
		case "ceu,series,app":
			seriesAcronym=this.acro;
			ceuApp = "ceus/ceuseriesapp.jsp?isMindleaders=1&series=" + seriesAcronym;
			if (this.launchEnvironment == "TF") ceuApp = "/lms/learn/" + ceuApp;
			else ceuApp = sharedDirectory + ceuApp;
			this.floatWin(ceuApp, 'ceuWin', 'toolbar=no,menubar=yes,resizable=yes,width=620,height=460,scrollbars=yes');
			break;
		case "ceu,series,scores":
			ceuScores = sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/scoreceu_series.htm"
			if (this.launchEnvironment == "TF")
				ceuScores = ceuScores + "?jsp=/lms/learn/seriesScoreData.jsp";
			else
				ceuScores = ceuScores + "?jsp=" + rootDir + "/learn/seriesScoreData.jsp";
			ceuScores = ceuScores + "&completion=" + this.courseCompletionString;
			this.floatWin(ceuScores, 'ceuWin', 'toolbar=no,menubar=yes,resizable=yes,width=620,height=460,scrollbars=yes');
			break;
		case "ceu,series,eval":
			var ceuEval = localizedSharedDirectory + "ceus/ceu_series_eval.htm?series=" + this.wndContent.seriesTitle;
			this.floatWin(ceuEval, 'ceuWin', 'toolbar=no,menubar=yes,resizable=yes,width=620,height=460,scrollbars=yes');
			break;
		case "evaluate":
			if ((this.evalUrl != null || isMindLeaders) && typeof(this.wndContent.c_useEmailEvaluation) == "undefined")
			{
				params.put("ctitle", this.getTitle());
				params.put("cc", this.getSiteEvaluationCc());
				dest = this.evalUrl + "?" + params.toURLString();
				ThisPage.floatWin(dest, 'evaluation', 'resizable=yes,width=740,height=450,scrollbars=yes,menubar=yes');
			}
			else
			{
				if (typeof(this.wndContent.evaluationCc) != "undefined") ccParm="&cc=" + this.wndContent.evaluationCc;
				else if (siteEvaluationCc != "") ccParm="&cc=" + siteEvaluationCc;
					else ccParm="";
				eSubject = escape(resStr.evalCourseEval + " " + this.wndContent.crsTitle);
				if (typeof(c_eSubject) != "undefined") eSubject=escape(c_eSubject);
				evalUrl= "mailto:" + this.wndContent.evaluationEmail + "?subject=" + eSubject + "&body="
					 + escape(this.wndContent.evaluationBody)+ ccParm;
				location.href=evalUrl;
			}
			return;
			break;
		case "al_proctor_form":
			pForm=sharedDirectory + "templates/compliance/certificates/md_proctor_form.htm?pinfo=" + this.al_proctorInfo + "&sinfo="  + this.al_personalInfo + "&examdate=" + this.successDate;
			this.floatWin(pForm, 'proctorWin', 'toolbar=no,menubar=no,resizable=yes,height=600,width=600,scrollbars=yes');
		break;
		case "certificate":
			var customIdParm = "&customid=" + ThisPage.getCustomId();
			var executeCertif;
			useJsParm="";
			if (this.useTdScoring)
			{
				executeCertif = sharedDirectory + "certif/certificate_js.htm?"; // changed 4/2012 to add relative paths for zipship. JAR
				cHours=this.courseLength;
				if (!this.isBSV && cHours != "")  // convert to hours for non-BSV
					cHours=Math.round(parseInt(this.courseLength,10) / 60);
				useJsParm="&usejs=1&title=" + escape(this.wndContent.crsTitle) + "&hours=" + cHours + "&clen=" + this.courseLength;
			}
			else if (this.launchEnvironment == "TF")
				executeCertif = "/lms/learn/certificate.jsp?";
			else executeCertif = scriptsDirectory + "certif.exe?";
			if (this.certificateStyle=="4") winDim="width=670,height=900,";
 				else  winDim="width=920,height=670,";
			if (typeof(this.wndContent.c_certificateWallpaper) != "undefined") certBgParm="&bg=" + this.wndContent.c_certificateWallpaper;
				else certBgParm="";
			executeCertif += "course=" + this.acro + "&style=" + this.certificateStyle + customIdParm + "&loc=" + this.localizationCode + certBgParm + useJsParm;
			this.floatWin(executeCertif, 'certificateWin', 'toolbar=yes,menubar=yes,resizable=yes,' + winDim + 'scrollbars=yes');
			break;
		case "firstUnit":
			dest=crsDir + "frt001.htm";
			if (this.design2011 || typeof(this.wndContent.c_hideCopyrights) != "undefined") dest=crsDir + this.acro.substring(0,2) + "a001.htm";
			// IM TEXT TEMPORARILY TURNED OFF if (this.inInstantMentoring() && this.useNewDesign && this.isFirstLaunch && typeof(this.wndContent.pgTpl) != "undefined" && this.wndContent.pgTpl != "mentor_intro") dest=sharedDirectory + "templates/mentor_intro.htm?course=" + this.acro + ThisPage.getSkinParm("&");
			break;
		case "preferences":
			dest=sharedDirectory + "preferences/preferences.htm?acro=" + this.acro + "&env=" + this.launchEnvironment;
			break;
		case "replay":
			pageTpl=this.wndContent.pgTpl;
			if (ThisPage.isiPad || pageTpl=="scovie" || pageTpl=="activityonpg" || pageTpl=="actmatch" || pageTpl=="actimage" || pageTpl=="actfull") this.wndContent.location.reload(); //replayFlash("scomovie");
				else if (pageTpl=="cyoa") this.wndContent.replayCyoaAudio();
				else if (pageTpl=="decision_point_dhtml") this.wndContent.location.reload();
				else if (pageTpl.indexOf("video") > -1) this.wndContent.replayVideo();
				else if (this.useFsStyle && pageTpl.indexOf("fs_asmnt") == -1) this.wndContent.location.reload();
				else if (this.wndContent.pgTpl.indexOf("flsize") > -1  || this.wndContent.pgTpl.indexOf("actfull") > -1 || this.wndContent.pgTpl.indexOf("actchoice") > -1 || this.wndContent.pgTpl.indexOf("_progress") > -1) this.wndContent.location.reload();
				else if (pageTpl=="full_exploreit") this.wndContent.playAudioFile(this.wndContent.pgAudio + ".mp3");
				else if (pageTpl=="showme_only") this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?autorun=1&intro=0";
				else if (pageTpl=="doitpg_only") this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?autorun=0&intro=0";
				else if (pageTpl=="doitpg") this.wndContent.location.href=getCoursesDirectory(this.acro) + this.acro + "/" + this.wndContent.currPage + "?&intro=0&autorun=" + this.wndContent.ThisPage.getPassedParm("autorun");
				else if (pageTpl=="embed") this.wndContent.playPgAudio();
				else if (pageTpl.indexOf("fs_asmnt") > -1 || pageTpl.indexOf("flash") == -1 && typeof(this.wndContent.pgAudio) != "undefined") this.wndContent.replayFlash("audioplayer");
				else if (pageTpl.indexOf("flash") > -1) this.wndContent.location.reload();
					else this.wndContent.replayFlash("movie");
			break;
		case "togglescovie":
			if (this.wndContent.pgTpl=="scovie") this.wndContent.toggleVersion();
			break;
		case "shortcut":
		if (!ThisPage.allowSA(this.acro) || !ThisPage.allowScores(this.acro))
			var shortcut = sharedDirectory + "help/courses/shortcut_keys_nosa.htm" + ThisPage.getSkinParm("?");
		else
			var shortcut = sharedDirectory + "help/courses/shortcut_keys.htm" + ThisPage.getSkinParm("?");
		this.floatWin(shortcut, 'keys', 'resizable=no,width=350,height=450,scrollbars=yes');
			break;
		case "showmehow":
			this.wndContent.stopAudio();
			var showme = rootDir + "/course.htm?acro=" + this.acro + "&fullpg=" + sharedDirectory + "templates/showmes.htm";
			this.floatWin(showme, 'showme', 'resizable=yes,width=730,height=550,scrollbars=yes');
			break;
		case "techlabs":
			if (coursewareHandler.techLabSubscription=="2")
				tl=rootDir + "/course.htm?acro=" + this.acro + "&fullpg=" + sharedDirectory + "templates/techlabs_pit.htm";
			else
				tl=rootDir + "/course.htm?acro=" + this.acro + "&fullpg=" + sharedDirectory + "templates/techlabs.htm";
			this.floatWin(tl, 'techlabs', 'resizable=yes,width=700,height=550,scrollbars=yes');
			break;
		case "phoenix": // Get college credit from Phoenix University. Url is set in special_cases.js
			phWin=window.open (phoenixCreditUrl, 'phoenixWin');
			break;
		case "podcast":
			podcastUrl=sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/podcast.htm?acro=" + this.acro + "&title=" + escape(this.getTitle());
			this.floatWin(podcastUrl, 'podcastWin', 'resizable=no,width=350,height=450,scrollbars=yes');
			break;
		case "orientation":
			var isSmall = (screen.height <= 600);
			var orientationHeight = screen.height <= 540 ? screen.height : 540;
			var orientationWidth = screen.width <= 540 ? screen.width : 800;
			var orientationUrl = rootDir + "/shared/help/OrientationTool.htm?isTool=1&isSmall=" + isSmall +
				"&isDummies=" + ThisPage.isDummies(this.acro);
			this.floatWin(orientationUrl, "orientation_window",
				"resizable=no,width=" + orientationWidth + ",height=" + orientationHeight + ",scrollbars=yes");
			break;
		case "techsupport":
			if (this.techSupportUrl.indexOf("mindleaders.com/support/") > -1 && typeof(this.wndContent.displayStudentInfo) != "undefined") tsParms=this.wndContent.displayStudentInfo("techsup");
				else tsParms="";
			window.open(this.techSupportUrl + tsParms,"techsupport","resizable=yes,scrollbars=yes,menubar=yes,toolbar=yes");
			return;
			break;
		case "caat_support":
			if (this.design2011)
			{
				this.wndContent.caatShowSupportMessage();
				return;
			}
			if (supportMessage.indexOf("name@your")>-1) supportMessage="If you have any comments or questions about this learning object, please contact <a href=\"mailto:" + supportEmail + "\">" + supportEmail + "</a>.";
			if (typeof(this.wndContent.embeddedPages) != "undefined")
			{
				curpg=this.wndContent.embeddedPages[this.wndContent.currPageNum];
				if (curpg.indexOf(".mht") > -1 || curpg.indexOf(".doc") > -1 || curpg.indexOf(".pdf") > -1 || curpg.indexOf(".ppt") > -1)
				{
					alert(supportMessage)
					return;
				}
			}
			//turn off mouseover in msgDiv so we can use Close button
			obj=this.wndContent.document.getElementById("msgDiv");
			if (obj!=null) obj.onmouseover="";
			leftpos=parseInt((document.body.clientWidth/2) - 200);
			showFloatingMessage(this.wndContent,supportMessage + "<br><br><center><a href=\"javascript:showFloatingMessage(self,'',0,0,0,false,'')\">Close</a></center>",400,200,leftpos,true,"Getting Support")
			return;
		break;
		case "reflib":
			LaunchLob("", this.accessible, this.launchEnvironment,"REFL");
			return;
			break;
		case "startExam": // alcohol
			dest=localizedSharedDirectory + "templates/compliance/alcohol_exam_eula.htm";
			break;
		case "bsv":
			switch (bsvType)
			{
			case "overview":
				if (typeof(this.wndContent.document.WMPlay) != "undefined" && this.wndContent.document.WMPlay.PlayState == 2) this.wndContent.document.WMPlay.document.WMPlay.Pause();
				pos=this.wndContent.getCurrentLocation();
				acro=this.wndContent.crsAcronym;
				overviewUrl= sharedDirectory + "templates/bsv/bsv_title_page.htm?bsvid=" + acro + "&pos=" + pos;
				this.wndContent.location.href=overviewUrl;
				break;
			case "transcript":
					objPanel=this.wndContent.document.getElementById("transpanel");
					if (objPanel.style.display == "block") this.wndContent.showSlides();
						else this.wndContent.showContents(objPanel, 'transcript', 'Transcript');
				break;
			case "contributors":
					objPanel=this.wndContent.document.getElementById("contribpanel");
					if (objPanel.style.display == "block") this.wndContent.showSlides();
						else this.wndContent.showContents(objPanel, 'conatributors', 'Contributors');
				break;
			case "index":
					objPanel=this.wndContent.document.getElementById("indexpanel");
					if (objPanel.style.display == "block") this.wndContent.showSlides();
						else this.wndContent.showContents(objPanel, 'index', 'Index');
				break;
			case "quiz":
					objPanel=this.wndContent.document.getElementById("quizpanel");
					if (objPanel.style.display == "block")
					{
						this.wndContent.showSlides();
					}
					else
					{
						if (this.wndContent.numQuizQuestions==0) this.wndContent.quizframe.document.location.reload(); // refresh the page is no questions
						this.wndContent.showContents(objPanel, 'quiz', 'Quiz');
					}
				break;
			case "reference":
					objPanel=this.wndContent.document.getElementById("refpanel");
					if (objPanel.style.display == "block") this.wndContent.showSlides();
						else this.wndContent.showContents(objPanel, 'reference', 'Reference');
				break;
			case "faq":
					objPanel=this.wndContent.document.getElementById("faqpanel");
					if (objPanel.style.display == "block") this.wndContent.showSlides();
						else this.wndContent.showContents(objPanel, 'faq', 'FAQ');
				break;
			case "ceus":
					objPanel=this.wndContent.document.getElementById("ceuspanel");
					if (objPanel.style.display == "block") this.wndContent.showSlides();
						else this.wndContent.showContents(objPanel, 'ceus', 'CEUs');
				break;
			case "help":
				if (typeof(this.wndContent.document.WMPlay) != "undefined" && this.wndContent.document.WMPlay.PlayState == 2) this.wndContent.document.WMPlay.document.WMPlay.Pause();
				if (this.design2011)
				{
					bsv_helpUrl=rootDir + "/course.htm?d11=1&fullpg=" + sharedDirectory +"help/video/using_video_course_2011.htm";
					ThisPage.floatWin(bsv_helpUrl, 'bsv_help', 'resizable=yes,width=840,height=650,scrollbars=yes');
				}
				else
				{
					bsv_helpUrl=rootDir + "/course.htm?fullpg=" + sharedDirectory +"help/video/using_video_course.htm";
					ThisPage.floatWin(bsv_helpUrl, 'bsv_help', 'resizable=yes,width=640,height=450,scrollbars=yes');
				}
				break;
			case "evaluation":
				if (typeof(this.wndContent.document.WMPlay) != "undefined" && this.wndContent.document.WMPlay.PlayState == 2) this.wndContent.document.WMPlay.document.WMPlay.Pause();
				this.goPage("evaluate");
				return;
				break;
			case "exit":
				if (typeof(this.wndContent.document.WMPlay) != "undefined" && this.wndContent.document.WMPlay.PlayState == 2)
					this.wndContent.document.WMPlay.Pause();
				this.onExitClick();
				return;
				break;
			case "scores":
				scoreTemplateParm="&sharedtpl=bsv_scores.htm";
				winName="bsv_popscores"
				if (this.wndContent.useClientSideData)
					dest=sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/bsv_scores_js.htm?acro="+ this.acro + "&tdscoring=1";
				else if (this.launchEnvironment == "TF")
					dest = getScorePage("bsv","");
				else
					dest=scriptsDirectory + "scores.exe?course=" + this.acro + "&type=contents"+ scoreTemplateParm + "&comp=" + ThisPage.getCompletionCookie(this.acro) + ThisPage.getSkinParm("&");
				if (this.wndContent.pgTpl != "certinst") this.floatWin(rootDir + "/course.htm?course=" + this.acro + "&loc=" + coursewareHandler.localizationCode + "&fullpg=" + escape(dest) , winName,'resizable=yes,width=675,height=530,scrollbars=yes');
					else this.wndContent.location.href=dest;
				return;
				break;
			case "progress":
				if (typeof(this.wndContent.document.WMPlay) != "undefined" && this.wndContent.document.WMPlay.PlayState == 2)
					this.wndContent.document.WMPlay.Pause();
				this.wndContent.openBsvProgress();
				return;
				break;
			default:
				objPanel=this.wndContent.document.getElementById("nothingpanel");
				this.wndContent.showContents(objPanel, 'slides', 'Slides');
			}
			return;
			break;
		case "closewindow":
			top.close();
			break;
		case "backcour_from_prompt":
		case "backcour":
			if (!this.inToolMode && !this.design2011)
				alert(resStr.error_backInvalidTool);
			if (this.inSkillAssessment)
			{
				if (this.design2011)
				{
					if (type=="backcour") // backcour_from_prompt is type when coming here from prompt div
					{
						this.wndContent.fsShowPrompt('exitSa');
						return;
					}
				}
				else if (this.askToAbortSkillAssessment(false))
					return;
				this.exitSkillAssessment();
			}
			dest=this.getBookmarkUrl();
			this.inToolMode = false;
			this.toolCaption = "";
			break;
		case "scoreend_backcour":
			dest=this.getBookmarkUrl();
			break;
		case "nextEmbed":
			this.wndContent.goNextEmbed();
		break;
		case "prevEmbed":
			this.wndContent.goPrevEmbed();
		break;
		case "autotestSkip":
			goNextQuestion(-1);
		break;
		case "lowvideo":
			this.wndContent.setVideoSize('low');
			return;
			break;
		case "highvideo":
			this.wndContent.setVideoSize('high');
			return;
			break;
		case "hidevideo":
			this.wndContent.hideVideo();
			return;
			break;
		case "showvideo":
			this.wndContent.showVideo();
			return;
			break;
		case "hidetext":
			// ThisPage.setPreference(PR_ShowText,"0");
			if (this.wndContent.pgTpl=="scovie")
			{
				this.wndContent.toggleVersion();
				return;
			}

			// FOR SLIDESHOW TEXT
			if (typeof(this.wndContent.showSlideText) != "undefined")
			{
				this.wndContent.toggleSlides();
				return;
			}

			this.wndContent.resizeFlash(false);
			if (ThisPage.getPreference(PR_PageAudio) != "1") // if audio is off, turn it on
			{
				ThisPage.setPreference(PR_PageAudio, "1");
				this.wndContent.location.reload();
			}
			else
			{
				this.foobar.update();
			}
			return;
			break;
		case "showtext":
			// ThisPage.setPreference(PR_ShowText,"1");
			if (this.wndContent.pgTpl=="scovie")
			{
				this.wndContent.toggleVersion();
				return;
			}

			// FOR SLIDESHOW TEXT
			if (typeof(this.wndContent.showSlideText) != "undefined")
			{
				this.wndContent.toggleSlides();
				return;
			}

			this.wndContent.resizeFlash(true);
			this.foobar.update();
			return;
			break;
		case "start_lesson":
			dest=crsDir + this.wndContent.currPage.substring(0,3) + "001.htm";
			break;
		case "tml_help": // Help for tm lobs
			this.wndContent.openTMHelp();
			break;
		default:
			if (type.indexOf(".pdf") >-1 || type.indexOf(".doc") >-1 || type.indexOf(".xls") >-1 || type.indexOf(".ppt") >-1 || type.indexOf(".sql") >-1)
			{
				this.floatWin(getCoursesDirectory(this.acro) + this.acro + '/' + type, 'fileWin',
					'toolbar=no,menubar=yes,resizable=yes,width=600,height=440,scrollbars=yes');
			return;
			}
			if(type.indexOf("/") == 0 || type.indexOf("http:/") == 0 ) dest=type;
				else if (dest != "jsback")
					dest=crsDir+type;
		}
		if (dest != "")
			this.addToTimeOnPage();

		if (dest=="jsback")
		{
			// fixes the problem with going to a pop page using search.
			if (this.wndContent.location.href.indexOf("search.exe?") > -1) dest = crsDir + this.wndContent.currPage.substring(0,this.wndContent.currPage.length-5) + ".htm";
			else
			{
				this.goBack();
				return;
			}
		}
		if (dest.indexOf("0.sim") > -1 )
			this.wndContent.scoredata.location.href = dest;
		else if (dest != "" && dest!=crsDir)
			this.loadUrl(dest);
	}

	function addToTimeOnPage()
	{
		if (this.timePageLoaded == 0)
			return;

		var secondsOnPage = ((new Date()).getTime() - this.timePageLoaded) / 1000;
		if ((secondsOnPage > this.pageTimeLimit) && !this.isBSV)
		{
			secondsOnPage = this.pageTimeLimit;
		}

		secondsOnPage = parseInt(secondsOnPage,10);
		this.sessionTime += secondsOnPage;
		this.secondsInCourse += secondsOnPage;
		this.totalTime = parseInt(this.totalTime,10) + secondsOnPage - 0;
		this.timePageLoaded = 0;

		if (!this.isBSV && !this.isTfCourse && !this.useFsStyle && parseInt(this.secondsInCourse,10) > parseInt(this.reportInterval,10) )
			this.reportProgress();
	}

	function handleMacro(kw)
	{
		var re = /^type\(([^\)]*)\)$/i;
		var match = re.exec(kw);
		if (match != null)
		{
			this.goPage(match[1]);
			return true;
		}

		return false;
	}

	function getSkinnedTemplatePageDirectory(acro)
	{
		if (this.isDummies) //dummies courses
			templateDir=sharedDirectory + "images/skins/dummies/pages/";
		else templateDir=sharedDirectory + "images/skins/" + this.wndContent.parent.skinDir + "/pages/";
		return templateDir;
	}

	function getTitlePage(acro)
	{
		if (this.isCustom) //custom courses
		{
			titlePage=getCoursesDirectory(acro) + acro + "/" + acro.substring(0,3) + "title.htm";
		}
		else if (this.isFbCourse)
		{
			titlePage=getCoursesDirectory(acro) + acro + "/" + topicLinks.links[1].url;
		}
		else
		{
			titlePage=sharedDirectory + "templates/title_page.htm?course=" + acro + ThisPage.getSkinParm("&");
		}
		return titlePage;
	}

	// go back function call by back buttons (designed to trick instant mentor)
	function goBack()
	{
		if (this.inSkillAssessment) // for scenario's in skill assessment, just go back to the question page
		{
			this.wndContent.history.back();
			this.wndContent.history.back();
			return;
		}

		var goBackUrl = this.getGoBackUrl();

		this.inJsBack = true;
		if (this.stack.peek() != "")
			this.stack.pop();

		if (goBackUrl == "")
			return;
		if (goBackUrl == this.referrer)
			this.wndContent.parent.location.href = goBackUrl;
		else
		{
			this.fromJsBack=true; //if (goBackUrl.indexOf("?")==-1) goBackUrl += "?jsback=1"
			this.wndContent.location.href = goBackUrl;
		}
	}

	function getGoBackUrl()
	{
		if (this.bookmarkUrl.indexOf("sa_required") > -1 && this.wndContent.pgTpl=="certinst")
		{
			if (this.launchEnvironment == "TF") return getScorePage("scoreend", "");
				else return scriptsDirectory + "scores.exe?course=" + this.acro + "&type=scoreend" + "&comp=" + ThisPage.getCompletionCookie(this.acro);
		}

		if (this.stack.peek() == "")
			return "";

		if (this.stack.peek(-1) != "")
			return this.stack.peek(-1);
		if (this.getBookmarkUrl() != "")
			return this.getBookmarkUrl();
		if (this.referrer != "")
			return this.referrer;

		return "";
	}

	// Prompts the user as to whether they want to abort the skill assessment.  This works in one of two ways:
	// 1) if called from onBeforeWindowUnload, it returns a string that is displayed in the standard IE
	//    onBeforeUnload() confirmation message box.  If the user responds not to abort the skill assessment, then
	//    IE will not unload the window.  This is the only way to prevent the window from closing in IE.
	// 2) in all other cases, the user is asked whether to abort the skill assessment.  The method returns
	//    true if they want to abort the skill assessment and false otherwise.
	function askToAbortSkillAssessment(isOnBeforeWindowUnload)
	{
		var isSalsa = (typeof(this.wndContent.isSalsa)!="undefined");
		var what = isSalsa ? resStr.Test : resStr.SAlc;
		if (isOnBeforeWindowUnload)
			return resStr.notCompleted + " " + what + ".\n" +
				resStr.saNextTime + " " + what + ", " + resStr.saStartOver +"\n\n";
		else
			return (!confirm(resStr.notCompleted + " " + what + ".\n" +
				resStr.saNextTime + " " + what +  ", " + resStr.saStartOver +"\n\n" +
				resStr.saClickOk + " " + what + " " + resStr.saOrCancel + " " + what + "."));
	}

	function enterSkillAssessment()
	{
		if (this.inSkillAssessment)
			return;

		this.inSkillAssessment = true;

		if (this.tabBar != null)
			this.tabBar.disable();

		this.closePoppedWindows();
	}

	function exitSkillAssessment()
	{
		if (!this.inSkillAssessment)
			alert("CoursewareHandler.exitSkillAssessment() called when not in SA.");

		this.inSkillAssessment = false;

		if (this.tabBar != null)
			this.tabBar.enable();
	}

	function completeSkillAssessment()
	{
		if (!this.inSkillAssessment)
			alert("CoursewareHandler.completeSkillAssessment() called when not in SA.");

		// Tell whomever is interested that the SA is complete, so they can enable features that were
		// disabled due to any pretest requirements.
		if (window.opener != null && typeof(window.opener) != "undefined" && !window.opener.closed)
		{
			if (this.launchEnvironment != "TF")
				if (typeof(window.opener.parent.onSkillAssessmentComplete) != "undefined")
					window.opener.parent.onSkillAssessmentComplete(this.acro);
		}
		this.pretestRequired = false;
		this.exitSkillAssessment();
	}

	function loadUrl(url)
	{
//alert(url)
		this.wndContent.location.href = url;
	}

	function setSkinDir(url)
	{
		var lurl = url.toLowerCase();
		if (lurl.indexOf("cid=d_") > -1)
			this.wndContent.parent.skinDir="dummies";
		else if(ThisPage.crsMode == "mlie" && lurl.indexOf(".jsp") > -1)
		{
			if (typeof(useCustomSkinDir) != "undefined" && useCustomSkinDir) this.wndContent.parent.skinDir="custom";
				else this.wndContent.parent.skinDir= "1";
		}
	}

	// textToFind: text to find in the course
	// searchType: 0=all words, 1=any word, 2=exact phrase
	// searchSynonyms: true or false
	function searchThisCourse(textToFind,searchType,searchSynonyms)
	{
		var dest = null;
		var launchPage="";
		if (typeof(this.bookmarkUrl) != "undefined") launchPage=this.bookmarkUrl;
		var intSearchSynonyms = (searchSynonyms)? 1 : 0;
		if (typeof(this.wndContent.useJsSearch) != "undefined" && this.wndContent.useJsSearch)
		{
			if (this.design2011)
				dest = rootDir + "/shared/search/search_js_2011.htm?indexwin=yes";
			else
				dest = rootDir + "/shared/search/search_js.htm?indexwin=yes";
		}
		else dest = rootDir + "/scripts/search.exe?indexwin=yes";
		dest+="&textToFind=" + escape(textToFind) +
		"&numberOfCoursesSelected=1" +
		"&selectedCourses=" + this.acro +
		"&searchType=" + searchType +
		"&searchSynonyms=" + intSearchSynonyms +
		"&firstCourseNumber=1" +
		"&launchEnvironment="+ this.launchEnvironment +
		"&launchAcro=" + this.acro +
		"&launchPage=" + launchPage;

		//oldSize="width=350,height=500"
		this.floatWin(dest,"shresults","width=430,height=550,status=no,scrollbars,resizable");
	}

	function inInstantMentoring()
	{
		return (this.instantMentorClassKey != "" && !this.isCustom);
	}

	// get different score pages according to type and parms. Parms need to begin with "&"
	function getScorePage(type, parms)
	{
		var scoreJsp = "/lms/learn/scores/scores.jsp";
		if (typeof(parms)=="undefined") parms="";
		var tpl = "";

		switch (type)
		{
		case "scoreend":
			tpl = "scoreend";
			break;
		case "access":
		case "access-sa":
			tpl = "scoreacc";
			break;
		case "ceu":
			tpl = "scoreceu";
			break;
		case "endcourse":
			tpl = "endofcourse";
			break;
		case "bsv":
			tpl = "bsv_scores";
			break;
		case "popscores":
		case "scores_course":
			tpl = "scores_course";
			break;
		default:
			tpl = "scoresa";
		}

		return scoreJsp + "?scorestpl=" + tpl + "&course=" + this.acro + "&comp=" + ThisPage.getCompletionCookie(this.acro) + ThisPage.getSkinParm("&") + parms;
		//TEST DUMMIES return scoreJsp + "?scorestpl=" + tpl + "&course=" + this.acro + "&sk=dummies" + parms;
	}

	function cloneForContentWindow(wndContent)
	{
		var clone = new CoursewareHandler(this.acro,this.params);
		clone.wndContent = wndContent;
		return clone;
	}

	function floatWin(url,name,params)
	{
		var name = (name != "") ? this.launchEnvironment + "_" + this.acro + "_" + name : "";

		var delim = (url.indexOf("?") == -1) ? "?" : "&";
		url += delim + this.params.toURLString();

		var wnd = ThisPage.floatWin(url,name,params);

		if (name != "")
			this.addPoppedWindow(wnd);
	}

	function addPoppedWindow(newWnd)
	{
		var copyIdx = 0;
		for (var idx=0; idx < this.poppedWindows.length; idx++)
		{
			var wnd = this.poppedWindows[idx];
			if (!wnd.closed)
			{
				this.poppedWindows[copyIdx] = this.poppedWindows[idx];
				copyIdx++;
			}
		}
		this.poppedWindows.length = copyIdx;
		this.poppedWindows[this.poppedWindows.length] = newWnd;
	}

	function closePoppedWindows()
	{
		for (var idx=0; idx < this.poppedWindows.length; idx++)
		{
			var wnd = this.poppedWindows[idx];
			if (!wnd.closed)
				wnd.close();
		}
		this.poppedWindows = new Array();
	}

	function windowIsOpen(wName)
	{
		for (var idx=0; idx < this.poppedWindows.length; idx++)
		{
			var wnd = this.poppedWindows[idx];
			if (!wnd.closed && wnd.name.indexOf("_" + wName) > -1) return wnd;
 		}
		return null;
	}

	function getScoFullPage(scoId)
	{
		if (this.topicLinks==null) return null;
		for (var index in this.topicLinks.links)
		{
			var topicLink = this.topicLinks.links[index];
			if (topicLink.id == scoId)
			{
				fullpg = getCoursesDirectory(acro) + acro + "/" + topicLink.url;
				return fullpg;
			}
		}
		return null;
	}

	function hasToolLink(linkId)
	{
		for (var idx=1; idx <= this.aboutLinks.count; idx++)
		{
			var link = this.aboutLinks.links[idx];
			if (link.id==linkId) return true;
		}
		return false;
	}

	function showProgress(show)
	{
		if (this.useFsStyle) return;
		if (this.wndContent != null)
		{
			if (this.scoOnly) return;
			cWin=this.wndContent;
			if (typeof(cWin.pgCount) == "undefined") return;
			progDiv=cWin.document.getElementById("progressDiv");
			if (progDiv == null) return;
			if (show)
			{
				pgCount=cWin.pgCount;
				pgNum=parseInt(cWin.pgNum.substring(5,8));
				if (isNaN(pgNum)) return;
				pgNum=parseInt(cWin.pgNum.substring(5,8));
				unitNum = "0abcdefghijklmnopqrstuvwxyz".indexOf(cWin.currPage.substring(2, 3)); //a=1
				var lessonLen=pgCount.split(",");
				numUnits=lessonLen.length;
				prgTable="<table bgcolor=\"#FFFFFF\"><tr><td nowrap>" +
					"<table class=\"progress\" cellpadding=0 cellspacing=0 border=0 width=500><tr><td nowrap>"
				totalPages=0;
				imgDir=rootDir + "/shared/images/skins/" + this.wndContent.parent.skinDir + "/images/";
				cProgImg="<div class=\"progressInner\" style=\"position:absolute;top:0;left:0;\">&nbsp;&nbsp;&nbsp;" + resStr.courseProgress + "</div>";
				for (i=0; i < numUnits; i++) { totalPages += parseInt(lessonLen[i]); }
				pagesViewed=0;
				for (i=0; i < unitNum-1; i++)
				{
					pagesViewed += parseInt(lessonLen[i]);
				}
				pagesViewed += pgNum;
				percentageViewed= parseInt( (pagesViewed / totalPages) * 100);
				progressWidth=parseInt(500 * (pagesViewed / totalPages) )
				if (percentageViewed > 100 || cWin.nextPage=="congrats.htm") percentageViewed = 100;
				if (percentageViewed == 100) progressWidth = 500;
				if (percentageViewed == 0)
				{
					progressWidth=1;
					percentageViewed=1;
				}
				prgTable += "<div style=\"position:relative;\"><img src=\"" + imgDir + "progress.gif\" height=15 width=" + progressWidth + ">" + cProgImg + "</div>";
				prgTable += "</td></tr></table></td><td align=left>&nbsp;&nbsp;<span class=\"progressText\" style=\"display:inline\">" + percentageViewed + "% complete</span></td></tr></table>";
				displayHeight=cWin.document.body.clientHeight;
				progDiv.style.top=displayHeight + cWin.document.body.scrollTop - 28;
				progDiv.style.left="15";
				progDiv.innerHTML=prgTable;
				progDiv.style.visibility="visible";
			} else
			{
				progDiv.style.visibility="hidden";
				progDiv.innerHTML="";
			}

			repaintDivs(cWin);
		}
	}

	// ************** Set Evaluation CC email by Site ID ********************
	function getSiteEvaluationCc()
	{
		if (typeof(this.wndContent.ccSites) != "undefined" && this.siteId != "")
		{
			for (i=1; i < this.wndContent.ccSites.length; i++)
			{
				if (this.siteId==this.wndContent.ccSites[i].toLowerCase()) return this.wndContent.ccAddresses[i];
			}
		}
		return "";
	}

	function allowEvaluation()
	{
		if ( (this.wndContent != null && typeof(this.wndContent.c_hideEvaluation) != "undefined") || typeof(c_hideEvaluation) != "undefined") return false;
		if (this.siteId != null && typeof(siteIdsNoEvaluation) != "undefined" && siteIdsNoEvaluation.indexOf("," + this.siteId + ",") > -1) return false;
			else return true;
	}

	function allowPodcast()
	{
		if (this.siteHasPodcasts && this.courseHasPodcast) return true;
			else return false;
	}

	// ********** Determine if the course has series-level CEUs *************
	function hasSeriesCeus()
	{
		if (!this.hasCeus || this.wndContent.crsAcronym.indexOf("v_ud") != -1 || typeof(has_Ceus_Series_Title)=="undefined") return false;
		serTitle=ThisPage.getSeriesTitle(true);
		for (i=0; i<has_Ceus_Series_Title.length; i++)
		{
			if ( this.titleMatch(serTitle,has_Ceus_Series_Title[i]) ) return true;
		}
		return false;
	}

	function titleMatch(subsTitle, matchTitle)
	{
		subsTitle = subsTitle.replace( " (Videos)", "" );
		matchTitle = matchTitle.replace( " (Videos)", "" );
		matchTitle = matchTitle.replace( "(", "\\(" );
		matchTitle = matchTitle.replace( ")", "\\)" );
		var reg = new RegExp("^(BSV )?"+matchTitle+"( Series)?$", "i");
		if ( subsTitle.match(reg) )
			return true;
		return false;
	}

	function al_forceExit()
	{
		this.wndContent.showingModalDialog=false;
		this.goPage('exit');
	}
	
	function ml_buildQuesRecString()
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;

		cwh.quesRecString="";
		if (cwh.quesRec == "") return;
		var quesRecs = cwh.quesRec.split("@");
		for (i=0; i < quesRecs.length; i++)
		{
			if (quesRecs[i].substring(4,6) == "11") cwh.quesRecString+="1"; // scored and answered correct
				else if (quesRecs[i].substring(4,6) == "10") cwh.quesRecString+="2"; // scored and answered incorrect
				else if (quesRecs[i].substring(4,6) == "01") cwh.quesRecString+="3"; // answered but not scored
					else cwh.quesRecString+="0"; // not answered
		}
	}
	
	function ml_setSuccessStatus()
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;
		else if (typeof(pgBBar) != "undefined" && (pgBBar=="bsvQuestions" || pgBBar=="popQuiz") )
			cwh = parent.window.opener.coursewareHandler;

		if (this.fsWithDat) // for fsWithDat, mastery of questions does not give success
			this.successSetting="3";
		if (cwh.courseCompleted && cwh.completionDate=="") cwh.completionDate=ThisPage.todaysDate();
		if (cwh.hasMastery && cwh.masteryDate=="") cwh.masteryDate=ThisPage.todaysDate();
		if (cwh.isBSV && cwh.quesRec=="") cwh.successSetting="3"; // If no questions in BSV, make sure success only requires completion
		if (cwh.successDate=="")
		{
			// cwh.successSetting: 0=mastery;1=comp and mastered; 2=mastered or comp; 3=completed.
			if (cwh.successSetting=="0" && cwh.hasMastery) cwh.successDate=ThisPage.todaysDate();
				else if (cwh.successSetting=="2" && (cwh.hasMastery || cwh.courseCompleted) ) cwh.successDate=ThisPage.todaysDate();
				else if (cwh.successSetting=="3" && cwh.courseCompleted) cwh.successDate=ThisPage.todaysDate();
				else if (cwh.successSetting=="1" && cwh.hasMastery && cwh.courseCompleted) cwh.successDate=ThisPage.todaysDate();
			// Report progress if successDate set. This should handle series certificate.
			if (cwh.successDate!="") cwh.reportProgress();
		}
//alert("qr: " + this.quesRec + " setting: " + this.successSetting + " sucdate: " + this.successDate + " comp: " + this.courseCompleted + " mast: " + this.masteryDate + "\n" + location.href)
	}

	function ml_getCourseStatus()
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;
		if (cwh.successDate != "") return "passed";
				else return "incomplete";
	}
	
	function ml_getScore()
	{
		// Return score for ML
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;

		if (cwh.useFsStyle && typeof(cwh.wndContent) != "undefined" && !cwh.fsWithDat)
		{
			if (typeof(cwh.wndContent.isExamCourse) != "undefined" || // alcohol exam
				(cwh.acro.substring(0,4)=="fhfd" && cwh.fsNumberOfLessons==8 && cwh.successDate != "") || // Food handler with exam returns the exam score, not 100%
				(typeof(cwh.wndContent.crsTitle) != "undefined" && cwh.wndContent.crsTitle.indexOf(resStr.fsPracticeExam)>-1) ) // food safety exam
					return cwh.fsExamScore;
			else return ""; // food safety mgfd01-9
		}

		if (cwh.isBSV && cwh.quesRec=="") return ""; // If no questions in BSV, set score to null
			//else if (cwh.isBSV && cwh.hasMastery) return cwh.bestCourseScore;
			else if (cwh.isBSV && cwh.courseCompleted) return cwh.bestCourseScore;
			else if (cwh.courseCompleted || cwh.bestSaScore > 0) return cwh.weightedCourseScore;
			else return "";
	}

	function ml_getCourseCompletionPercentage()
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;

		if (cwh.isBSV || cwh.useFsStyle)
		{
			unitsCompleted=0;
			for (i=0;i < cwh.courseCompletionString.length;i++)
			{
				if (cwh.courseCompletionString.charAt(i) == "1") unitsCompleted++;
			}
			if (cwh.courseCompletionString.length == 0) cwh.courseCompletionPercentage=0;
				else cwh.courseCompletionPercentage=(unitsCompleted / cwh.courseCompletionString.length) * 100;
		}
		
		return parseInt(cwh.courseCompletionPercentage,10); // For OTS, set in submit_question, calcScores
	}

	function ml_getCourseMasteryPercentage()
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;

		if (cwh.useFsStyle && typeof(crsTitle) != "undefined" && crsTitle.indexOf(resStr.fsPracticeExam)>-1)
		{
			if (cwh.fsExamScore >= cwh.masteryPercent) return 100;
				else return 0;
		}
		if (cwh.useFsStyle) return cwh.ml_getCourseCompletionPercentage();

		if (cwh.isBSV && cwh.courseCompletionPercentage < 100) return 0; 		// if BSV, return 0 if cwh.courseCompletionPercentage=0 but keep mastery percentage for when they do complete

		return cwh.courseMasteryPercentage; // For OTS and BSV, set in submit_question, calcScores. Also in setCompletionCookie for BSV w/out questions
	}

	function zs_getLessonStatus()
	{
		// passed if mastered, completed if course completed but not mastered, and incomplete otherwise
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;

		if (cwh.isBSV && cwh.quesRec=="" && ThisPage.hasCompletedCourse(cwh.acro) ) return "passed"; // If no questions in BSV, set as passed
		if (cwh.fsWithDat)
		{
			if (cwh.courseCompleted) return "passed";
				else return "incomplete";
		}
		if (cwh.hasMastery) return "passed";
			else if (cwh.courseCompleted) return "completed";
				else return "incomplete";
	}
	
	function zs_getScore()
	{
		// Return score for ZS scorm
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;
 		if (cwh.acro.substring(0,4)=="fhfd" && cwh.fsNumberOfLessons==8  && cwh.successDate != "")
 			return cwh.fsExamScore; // Food handler with exam returns the exam score, not 100%
		if (cwh.useFsStyle && typeof(crsTitle) != "undefined" && crsTitle.indexOf(resStr.fsPracticeExam)>-1)
			return cwh.fsExamScore;
		if (cwh.isBSV && cwh.quesRec=="" && ThisPage.hasCompletedCourse(this.acro) ) return "100"; // If no questions in BSV, set score to 100
		if (cwh.hasMastery || cwh.courseCompleted)
		{
			if (parseInt(cwh.bestSaScore, 10) > parseInt(cwh.bestCourseScore,10) ) return coursewareHandler.bestSaScore;
				else if (cwh.courseCompleted) return coursewareHandler.bestCourseScore;
		}
		return ""; // changed to null to be consistent with Central, JAR 5/12
	}

	function zs_getTime(totSecs,hideHours)
	{
		if (typeof(hideHours)=="undefined") hideHours=false; // used in course activity time limit display, common.js
		var hours=Math.floor(totSecs/3600); 
		var minutes=Math.floor(totSecs/60) - (hours * 60);
		var seconds=parseInt(totSecs - (hours*3600) - (minutes * 60),10);

		if (hours.toString().length < 2) hours="0" + hours;
		if (minutes.toString().length < 2) minutes="0" + minutes;
		if (seconds.toString().length < 2) seconds="0" + seconds;

		if (hideHours && hours=="00")
			return(minutes + ":" + seconds);
		else
			return(hours + ":" + minutes + ":" + seconds);
	}
	
	function zs_getSuspendData(isDebug)
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;

		sData="";
		// if isDebug, puts a line break between the current standalone parms for the clipboard
		if (isDebug) brk="\n";
			else brk="";
				
		cwh.ml_buildQuesRecString();
		
		if (cwh.useFsStyle)
			if (cwh.fsTopicCompletionString.length > 0) sData+="&topics=" + cwh.fsTopicCompletionString + brk;
		sData+= "&srec=" + cwh.scoresRec;
		sData+=brk
		sData+= "&sarec=" + cwh.saScoresRec; // not used in bsv or fs, but passed anyway
		sData+=brk
		sData+="&qrec=" + cwh.quesRecString;
		sData+=brk
		if (cwh.al_pageCompletionString != "") sData+="&pgcomp=" + cwh.al_pageCompletionString + brk; // for Alcohol, completed "middle" pages.
		if (cwh.al_proctorInfo != "") sData+="&proctorinfo=" + cwh.al_proctorInfo + brk; // for Alcohol, completed "middle" pages.
		sData+="&pref=" + cwh.preferenceString;
		sData+=brk
		sData+="&comp=" + cwh.courseCompletionString;
		sData+= brk;	
		sData+="&sucdate=" + cwh.successDate;
		sData+= brk;
		sData+="&ttime=" + parseInt(cwh.totalTime,10);
		sData+= brk;
		if (cwh.al_personalInfo!="") sData+="&pinfo=" + cwh.al_personalInfo + brk;
		if (cwh.al_verificationInfo!="") sData+="&vinfo=" + cwh.al_verificationInfo + brk;
		if (cwh.al_certName != "") sData+="&certname=" + cwh.al_certName + brk;
		if (cwh.stateVer != "") sData+="&statever=" + cwh.stateVer + brk;
		if (cwh.fsExamScore != 0) sData+="&fscore=" + cwh.fsExamScore + brk;
		if (cwh.fsExamData != "") sData+="&examdata=" + cwh.fsExamData + brk;
		if (!cwh.access) // no bookmark for accessibility
		{
			sBmark=cwh.getBookmarkUrl();
			
			if (cwh.isBSV)
			{
				sData+="&pos=" + cwh.videoPosition;
			}
			else if (typeof(cwh.wndContent) != "undefined" && cwh.wndContent.pgType == "alcohol_exam_lockdown")
				x=1; // sData+="&pg=" + cwh.wndContent.examPage; // NO Bookmark added in alcohol_exam_lockdown
			else if (sBmark.indexOf("/" + cwh.acro + "/") > -1)
			{
				sBmark=sBmark.substring(sBmark.lastIndexOf("/")+1,sBmark.length);
				sData+="&pg=" + escape(sBmark);
			} else sData+="&fullpg=" + escape(sBmark);
			sData+= brk;
		}
		return sData;
	}

	function ml_getMlParms()
	{
		cwh=this;
		//if (this.access) cwh=parent.coursewareHandler;
		mlparms="acro=" + cwh.reportAcro +
			"&repacro=" + cwh.reportAcro +
			"&launchacro=" + cwh.acro +
			"&lobStartUuid=" + cwh.uuid +
			"&status=" + cwh.ml_getCourseStatus() +
			"&score=" + cwh.ml_getScore() +
			"&comper=" + cwh.ml_getCourseCompletionPercentage() + 
			"&mastper=" + cwh.ml_getCourseMasteryPercentage() + 
			"&stime=" + cwh.sessionTime +
			"&lekey=" + cwh.launchEventKey +
			"&loc=" + cwh.localizationCode +
			"&env=" + cwh.launchEnvironment +
			"&redirectTo=" + escape(cwh.redirectTo) + 
			"&3rd=" + (cwh.is3rdLMS ? "1" : "0");

		if (cwh.surveyURL != null)
			if(!this.isFbCourse)
			{
				mlparms+="&surveyurl=" + escape(cwh.surveyURL + "?acro=" + cwh.reportAcro);
			}
			else
			{
				mlparms+="&surveyurl=" + escape(cwh.surveyURL);
			}
		if (cwh.is3rdLMS)
		{
			mlparms+="&scorm=" + (cwh.scorm ? "T" : "F");
			var aicc_url = params.get("aicc_url");
			if (aicc_url != null) mlparms+="&aicc_url=" + escape(aicc_url);
			var aicc_sid = params.get("aicc_sid");
			if (aicc_sid != null) mlparms+="&aicc_sid=" + escape(aicc_sid);
		}
		if (cwh.useFsStyle)
		{
			mlparms+="&fs=1";
			if (cwh.pt_resultsDataString != "undefined") mlparms+="&tfassmnt=" + cwh.pt_resultsDataString;
		}
		if (cwh.courseType=="CAA")
		{
			if (this.design2011) caatData=this.wndContent.parent; // data is in course.htm
				else caatData=self;
			mlparms += "&mlcreate_interaction=" + caatData.interactionPage;
			mlparms += "&mlcreate_score=" + caatData.lastAssessmentScore;
			mlparms += "&mlcreate_c2agree=" + caatData.clickToAgreeResult;
			mlparms += "&mlcreate_survey=" + caatData.surveySubmitted;
		}

		return mlparms;
	}

	function zs_getScormParms()
	{
		cwh=this;
		if (this.access) cwh=parent.coursewareHandler;
		var bmark = cwh.isBSV ? cwh.videoPosition.toString() : escape(cwh.getBookmarkUrl());

		sParms="&Lesson_Location=" + bmark +
			"&Lesson_Status=" + cwh.zs_getLessonStatus() +
			"&Score=" + cwh.zs_getScore() +
			"&Time=" + cwh.zs_getTime(cwh.sessionTime);

		return sParms;
	}

	function ml_reportSaScore()
	{
		if (this.useFsStyle) this.fsReportProgress();
			else this.reportProgress();
	}
	
	function ml_relaunchWithNewBlob() // FOR TESTING RELAUNCH
	{
		if (typeof(parent.useAnswerEvaluationJs) != "undefined" && useAnswerEvaluationJs) this.wndContent.calcScoresWithSa();
		dest=rootDir + "/shared/launchlob/detect.htm?acro=" + this.acro + 
		"&repacro=" + this.reportAcro +
		"&url=" + rootDir + "/courseware.htm" +
		"&netlibrary=" + params.get("netlibrary") +
		"&internetSearchEnabled=" + params.get("internetSearchEnabled") +
		"&kpId=" +   params.get("kpId") +
		"&crstitle="  + params.get("crstitle") +
		"&userid=" + params.get("userid") +
		"&type=" + params.get("type") +
		"&techlabs=" +   params.get("techlabs") +
		"&lekey=" +   params.get("lekey") +
		"&evalurl=" +   params.get("evalurl") +
		"&siteid=" +   params.get("siteid") +
		"&fname=" +   params.get("fname") +
		"&lname=" +   params.get("lname") +
		"&3rd=" +   params.get("3rd") +
		"&env=" +   params.get("env") +
		"&access=" +   params.get("access") +
		"&instantMentorClassKey=" +   params.get("instantMentorClassKey") +
		"&aan=" +   params.get("aan") +
		"&tsurl=" +   params.get("tsurl") +
		"&clen=" +   params.get("clen") +
		"&ceus=" +   params.get("ceus") +
		"&reflibEnabled=" +   params.get("reflibEnabled") +
		"&phoenix=" +   params.get("phoenix");
		if (this.useFsStyle)
			dest+="&fs=1";
		dest+=this.zs_getSuspendData(false);
		
		top.location.href=dest;
	}

} // END OF Courseware Handler

if (typeof(makeCoursewareHandler) != "undefined")
{
	coursewareHandler = new CoursewareHandler(crsAcronym,params);
	coursewareHandler.wndContent = self;
}

if (self.name.indexOf("bsv_") >- 1) window.onunload=continueVideo;
function continueVideo()
{
	if (typeof(opener) != "undefined")
	{
		cWindow=opener.coursewareHandler.wndContent;
		if (typeof(cWindow.playVideo) != "undefined" && !cWindow.endOfVideo) cWindow.playVideo();
	}
}

