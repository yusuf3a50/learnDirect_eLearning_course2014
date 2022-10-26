var mlclientpageDate="062012";
var CT_Course = 1;
var CT_Tools = 2;
var NT_Home = 1;
var NT_Topics = 2;
var NT_InstantMentoring = 3;
var NT_CourseTools = 4;
var NT_Search = 5;
var NT_Help = 6;

//The PR_ number is the sequence in preference cookie string
var PR_NumPrefs=10;
var PR_UseWmv=0; // Replaced by site settting. The default video format is FLV (0). A value of 1 forces WMV (IE only). Replaces PR_CPLanguage= 0, which is no longer used.
var PR_LessonIntro = 1; //1 on, 0 off
var PR_SoundEffects=2; //1 on, 0 off
var PR_TextSize=3; //1=small, 2=medium (default), 3=large
var PR_Theme=4;
var PR_ShowFullTextPage=5; // Whether to hide text on full image pages
var PR_PageAudio=6; // page audio
var PR_AutoSearch=7; // auto search links on: 0 off, 123456789, to indicate links to use
var PR_PageTransitions=8; // smooth page transitions
var PR_ToolTips=9; // show tool tips
var PR_ShowText=10; // show text on videopg and flsize pages
var defaultPrefs="0;1;1;2;0;1;1;12345;0;1;0;";
var defaultPrefsArray=defaultPrefs.split(";");
var prefTime= 60*60*24*365*12; //12 years

function MlPage()
{
	this.getCacheElem = getCacheElem;
	this.isClientOnlyDataEnabled = isClientOnlyDataEnabled;
	this.setClientOnlyData = setClientOnlyData;
	this.getClientOnlyData = getClientOnlyData;
	this.getCookie = getCookie;
	this.setCookie = setCookie;
	this.writeLmsStylesheetHtml = writeLmsStylesheetHtml;
	this.getLmsStylesheetHtml = getLmsStylesheetHtml;
	this.writeCourseStylesheetHtml = writeCourseStylesheetHtml;
	this.getCourseStylesheetHtml = getCourseStylesheetHtml;
	this.getLmsObject = getLmsObject;
	this.floatWin = floatWin;
	this.getParmFromSearch = getParmFromSearch;
	this.getParmFromUrl = getParmFromUrl;
	this.getPassedParm = getPassedParm;
	this.replaceText = replaceText;
	this.trim = trim;
	this.replaceSpecialCharacters = replaceSpecialCharacters;
	this.searchMarkersToSpecialCharacters = searchMarkersToSpecialCharacters;
	this.searchSpecialCharactersToMarkers = searchSpecialCharactersToMarkers;
	this.searchHtmlFormat = searchHtmlFormat;
	this.FindAPI = FindAPI;
	this.findWnd = findWnd;
	this.getScreenWidth = getScreenWidth;
	this.getScreenHeight = getScreenHeight;
	this.scrollElementIntoView = scrollElementIntoView;
	this.is3rdPartyLms = is3rdPartyLms;
	this.isGettingStarted = isGettingStarted;
	this.isDummies = isDummies;
	this.hasActiveX = hasActiveX;
	this.getPreference = getPreference;
	this.setPreference = setPreference;
	this.getSkinDir = getSkinDir;
	this.getSkinParm = getSkinParm;
	this.writeSharedGif = writeSharedGif;
	this.writeCourseGif = writeCourseGif;
	this.getSeriesTitle = getSeriesTitle;
	this.writeSeriesTitle = writeSeriesTitle;
	this.getCourseTitle = getCourseTitle;
	this.writeCourseTitle = writeCourseTitle;
	this.getAcro = getAcro;
	this.getAcroFromPath = getAcroFromPath;
	this.setDummiesValues = setDummiesValues;
	this.addBookButton = addBookButton;
	this.getCustomId = getCustomId;
	this.getSiteCustomDirectory = getSiteCustomDirectory;
	this.getAssocId = getAssocId;
	this.getSiteId = getSiteId;
	this.printPage = printPage;
	this.lmsObject = "";
	this.allowScores = allowScores;
	this.allowSA = allowSA;
	this.allowSaByAcro=allowSaByAcro;
	this.allowSeriesTranscript = allowSeriesTranscript;
	this.copyToClipboard = copyToClipboard;
	this.getAcroFromId = getAcroFromId;
	this.isSco = isSco;
	this.setCompletionCookie=setCompletionCookie;
	this.getCompletionCookie=getCompletionCookie;
	this.hasCompletedCourse=hasCompletedCourse;
	this.todaysDate=todaysDate;
	this.addEvent=addEvent;
	this.getObjectives = getObjectives;
	this.formatTime = formatTime;
	// New for alcohol courses, 6/11
	this.checkDateFormat=checkDateFormat;
	this.dataEncrypt=dataEncrypt;
	var agt = navigator.userAgent.toLowerCase();
	this.browserVersion = 0;
	this.isIE = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
	this.isNav = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
						&& (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
						&& (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
	this.isNavMac = false;
	this.isSafari=agt.indexOf('safari') != -1 && agt.indexOf("chrome") == -1;
	this.isiPad = agt.indexOf("ipad") != -1;
	this.isChrome = agt.indexOf("chrome") != -1;
	this.ieComp=0; // The IE compatibility mode
	if (this.isIE)
	{
		if (document.documentMode) // IE8 or later
			this.ieComp = document.documentMode;
		else // IE 5-7
		{
			ieComp=5; // Assume quirks mode unless proven otherwise
			if (document.compatMode && document.compatMode == "CSS1Compat")
				ieComp=7; // standards mode
		}
	}
	
	this.isVersion=isVersion; // For AS, determine state
	
	this.getInnerText=getInnerText;

	if (this.isIE)
	{
		var re = /msie ([^;]*);/;
		var matches = re.exec(agt);
		if (matches != null)
			this.browserVersion = parseFloat(matches[1]);
	}
	else
		this.browserVersion = parseFloat(navigator.appVersion);

	if (this.isNav && this.browserVersion >= 5)
	{
		var re = /netscape6\/([\d\.]*)/;
		var matches = re.exec(agt);
		if (matches != null)
			this.browserVersion = parseFloat(matches[1]);
		else
			this.browserVersion = 6;
	}

	if (this.isNav && navigator.platform.substring(0,1) == "M")
	{
		this.isNav = false;
		this.isNavMac = true;
	}

	this.isWin = (navigator.appVersion.indexOf("Windows") != -1);
	this.userID = this.getCookie("id");
	this.evalPrompt = this.getCookie("evalprmpt");

	if (typeof(useNewDesign) == "undefined") useNewDesign=false;
	this.crsMode = "mlie";

	function hasActiveX()
	{
		var hasActiveX = false;
		if (this.isIE)
		{
			hasActiveX = true;
			eval("try {var xmlHttp = new ActiveXObject(\"Microsoft.XMLHTTP\");} catch(e){ hasActiveX = false; }");
		}
		return hasActiveX;
	}

	function getCookie(name)
	{
		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1)
		{
			begin = dc.indexOf(prefix);
			if (begin != 0)
				return null;
		}
		else
			begin += 2;
		var end = document.cookie.indexOf(";", begin);
		if (end == -1)
			end = dc.length;

		var val = unescape(dc.substring(begin + prefix.length, end));
		if (val == "\"\"") return null;
		if (!this.isIE && val == "") return null;
		return val;
	}

	function setCookie(name, value, seconds)
	{
		var today = new Date();
		var expires = null;
		if (typeof(seconds) != "undefined" && seconds != "session")
		{
			expires = new Date();
			expires.setTime(today.getTime() + (seconds * 1000));
		}
		thisCookie = name + "=" + escape(value) + "; path=/"
			+ ((expires == null) ? "" : ("; expires=" + expires.toGMTString()));
		document.cookie = thisCookie;
	}

	function getCacheElem(cacheElem)
	{
		if (typeof(cacheElem) == "undefined")
		{
				alert(resStr.error_noCache);
				return null;
		}
		return cacheElem;
	}

	function isClientOnlyDataEnabled(cacheElem)
	{
		var isEnabled = true;

		cacheElem = this.getCacheElem(cacheElem);
		if (cacheElem == null)
			return false;

		eval("try { cacheElem.load(\"MlClientOnlyData\"); } catch(e) { isEnabled = false; }");

		return isEnabled;
	}

	function getClientOnlyData(name,defValue,cacheElem)
	{
		if (typeof(defValue) == "undefined")
			defValue = null;

		if (this.isIE && this.browserVersion >= 5)
		{
			cacheElem = this.getCacheElem(cacheElem);
			if (cacheElem == null)
				return defValue;

			if (!this.isClientOnlyDataEnabled(cacheElem))
				// Browser has userdata disabled.
				return defValue;

			value = cacheElem.getAttribute(name);
		}
		else
			value = this.getCookie(name);

		if (value == null)
			value = defValue;

		return value;
	}

	function setClientOnlyData(name,value,cacheElem)
	{
		if (this.isIE && this.browserVersion >= 5)
		{
			cacheElem = this.getCacheElem(cacheElem);
			if (cacheElem == null)
				return;

			if (!this.isClientOnlyDataEnabled(cacheElem))
				// Browser has userdata disabled.
				return;

			cacheElem.setAttribute(name,value);
			cacheElem.save("MlClientOnlyData");
		}
		else
			this.setCookie(name,value);
	}

	function getLmsStylesheetHtml(pathPrefix)
	{
		if (typeof(pathPrefix) == "undefined")
			pathPrefix = "";
		// Changed to handle zip and ship. JAR 4/2012
		if (pathPrefix.charAt(pathPrefix.length-1) =="/") pathPrefix=pathPrefix.substring(0,pathPrefix.length-1);
		if (pathPrefix=="/dpec" ||  pathPrefix=="") pathPrefix=rootDir;
		var path = pathPrefix + "/shared/style/";
		return '<link rel="stylesheet" href="' + path + 'shared_files.css" type="text/css">';
	}

	function writeLmsStylesheetHtml(pathPrefix)
	{
		document.write(this.getLmsStylesheetHtml(pathPrefix));
	}

	function getCourseStylesheetHtml(skinDir)
	{
		if (typeof(skinDir) == "undefined")
			skinDir = this.getSkinDir();
		courseStyleSheet="course";
		if (ThisPage.getPreference(PR_TextSize)=="1") courseStyleSheet=courseStyleSheet+"_small";
			else if (ThisPage.getPreference(PR_TextSize)=="3") courseStyleSheet=courseStyleSheet+"_large";

		addStyleSheet="";
		// FB Add stylesheet
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler.isFbCourse) addStyleSheet="<link rel=\"stylesheet\" href=\"" + rootDir + "/shared/images/skins/" + skinDir + "/course_fb.css\" type=\"text/css\">"; //FB
		if (typeof(useStyleSheet) != "undefined") addStyleSheet="<link rel=\"stylesheet\" href=\"" + rootDir + "/shared/images/skins/" + skinDir + "/" + useStyleSheet + "\" type=\"text/css\">";
		if ( (typeof(coursewareHandler) != "undefined" && coursewareHandler.design2011) || location.search.indexOf("d11=1") > -1)
			courseStyleSheet="course_2011";

		var acro=getAcro();
		if (acro.indexOf("c_") > -1 && typeof(c_useDefaultSkin) == "undefined")
		{
			return "<link rel=\"stylesheet\" href=\"" + getCoursesDirectory(acro) + acro +
				"/skin/" + courseStyleSheet + ".css\"" + " type=\"text/css\">";
		}
		else if (acro.indexOf("d_") == -1 && skinDir=="custom") //(skinDir=="custom" || (typeof(parent.useCustomSkinDir) != "undefined" && parent.useCustomSkinDir))
		{
			styleDir = siteCustomDirectory + this.getCustomId() + "/";
			return "<link rel=\"stylesheet\" href=\"" + styleDir +
				courseStyleSheet + ".css\"" + " type=\"text/css\">";
		}
		else
		{
			return "<link rel=\"stylesheet\" href=\"" + rootDir +
				"/shared/images/skins/" + skinDir + "/" + courseStyleSheet + ".css\"" +
				" type=\"text/css\">" + addStyleSheet;
		}
	}

	function writeCourseStylesheetHtml(skinDir)
	{
		if (typeof(skinDir) == "undefined")
			skinDir = this.getSkinDir();
		document.write(this.getCourseStylesheetHtml(skinDir));
	}

	function getSkinDir(acro)
	{
		// first use acronym to determine if dummies
		if (typeof(acro) =="undefined") acro = getAcro();

		if (acro.substring(0,2)=="d_")
		{
			skinDir="dummies";
			this.setDummiesValues();
			return skinDir;
		}
		else
		{
			if (typeof(skinDir) == "undefined" || skinDir=="")
			{
				skinDir=this.getPassedParm("sk");
				if (skinDir=="")
				{
					skinDir = "1";
					if (acro.indexOf("d_") == -1)
					{
						var parentExists = true;
						try {var doc = parent.document;} catch(e){parentExists = false;}
						if(parentExists && typeof(parent.skinDir) != "undefined") skinDir = parent.skinDir;
						if (parentExists && typeof(parent.useCustomSkinDir) != "undefined" && parent.useCustomSkinDir) skinDir="custom";
						if (typeof(useCustomSkinDir) != "undefined" && useCustomSkinDir) skinDir="custom";
					}
				}
			}
			return skinDir;
		}
	}

	function getLmsObject(wnd)
	{
		if (typeof(wnd) == "undefined")
			wnd = self;

		if (wnd == null)
			return null;

		if (this.lmsObject == "")
			this.lmsObject = this.FindAPI(wnd);

		return this.lmsObject;
	}

	function is3rdPartyLms(wnd)
	{
		if (typeof(wnd) == "undefined")
			wnd = self;

		if (typeof(wnd.is3rdPartyLms) != "undefined")
			return true;

		if (wnd == top || wnd.parent == null || wnd == wnd.parent)
				return false;

		return this.is3rdPartyLms(wnd.parent);
	}

	function FindAPI(wnd)
	{
		if (typeof(wnd.API) != "undefined" && wnd.API != null)
		  	return wnd.API;

		if (this.is3rdPartyLms(wnd))
			return null;
		
		if (wnd == top || wnd.parent == null || wnd == wnd.parent)
		{
			if ((typeof(wnd.callingWindow) == "undefined") || (wnd.callingWindow == null))
				return null;
			else
				return this.FindAPI(wnd.callingWindow);
		}
		
		return this.FindAPI(wnd.parent);
	}

	function findWnd(wnd,name)
	{
		var tWnd;

		// Am I the window?
		if (wnd.name == name)
		  	return wnd;

		// Are any of my children the window?
		for (var idx = 0; idx < wnd.frames.length; idx++)
		{
			tWnd = this.findWnd(wnd.frames[idx],name);
			if (tWnd != null)
				return tWnd;
		}

		// Is my opener or anybody in its lineage the window?
		if (wnd.opener != null && !wnd.opener.closed)
		{
			tWnd = this.findWnd(wnd.opener,name);
			if (tWnd != null)
				return tWnd;
		}

		if (this.is3rdPartyLms(wnd) || wnd == top || wnd.parent == null || wnd == wnd.parent)
			return null;

		// Is my parent the window?
		return this.findWnd(wnd.parent,name);
	}

	function floatWin(Destination,RemoteName,Parms)
	{
			if (typeof(Parms) == "undefined")
				Parms = "";
			var newWind;
			newWind=window.open(Destination,RemoteName,Parms);
			if (typeof(newWind)=="undefined" || newWind==null) alert(resStr.popupBlockerMsg);
				else newWind.focus();

			return newWind;
	}

	function getParmFromSearch(search,parm,lowerCase)
	{
		if (typeof(lowerCase) == "undefined")
			// Maintains compatibility with code that called this without the parameter.
			lowerCase = true;

		var parmList = "&" + search + "&";
		var re = new RegExp("&" + parm + "=([^&#]*)[&#]","i");
		var foundArray = re.exec(parmList);
		if (foundArray == null)
			return "";

		return lowerCase ? foundArray[1].toLowerCase() : foundArray[1];
	}

	function getPassedParm(parm,lowerCase)
	{
		if (location.search == "")
			return "";

		return getParmFromSearch(location.search.substring(1,location.search.length),parm,lowerCase);
	}

	function getParmFromUrl(url,parm,lowerCase)
	{
		var quesIndex = url.indexOf("?");
		if (quesIndex == -1)
			return "";

		var search = url.substr(quesIndex+1);
		return getParmFromSearch(search,parm,lowerCase);
	}

	function replaceText(theString,sFindText,sReplaceText,firstOnly,matchCase)
	{
		if (typeof(matchCase)=="undefined") matchCase=false; // Added matchCase, JAR 4/12
		if (typeof(firstOnly) == "undefined") firstOnly=false;
		my_theString=theString.toString();
		var lcString=my_theString.toLowerCase();
		var whereFind= lcString.indexOf(sFindText.toLowerCase());
		if (matchCase)
		{
			lcString=my_theString;
			whereFind= lcString.indexOf(sFindText);
		}
		while (whereFind > -1)  {
			var leftHalf=my_theString.substring(0,whereFind);
			var rightHalf=my_theString.substring(whereFind+sFindText.length, my_theString.length);
			my_theString=leftHalf + sReplaceText + rightHalf;
			if (firstOnly)
				whereFind=-1;
			else
			{
				if (matchCase)
				{
					lcString=my_theString;
					whereFind= lcString.indexOf(sFindText, leftHalf.length + sReplaceText.length);
				}
				else
				{
					lcString=my_theString.toLowerCase();
					whereFind= lcString.indexOf(sFindText.toLowerCase(), leftHalf.length + sReplaceText.length);
				}
			}
		}
		return my_theString;
	}

	function trim(stringToTrim, side) // trim spaces from string
	{
		if (typeof(side)=="undefined") side=="b";
		if (side=="l")
			return stringToTrim.replace(/^\s+/,"");
		else if (side=="r")
			return stringToTrim.replace(/\s+$/,"");
		else
			return stringToTrim.replace(/^\s+|\s+$/g,"");
	}

	function replaceSpecialCharacters(s)
	{
		var findChar = new Array("<", ">", "\"", "&lt;", "&gt;", "&","#", "(", ")", "'", "\\");
		for (var i=0;i<findChar.length; i++)
		{
			s=replaceText(s, findChar[i], "");
		}
		return s;
	}

	function searchSpecialCharactersToMarkers(s)
	{
		var findChar = new Array("<", ">", "\"", "&lt;", "&gt;", "&","#", "(", ")", "'", "\\");
		var replaceChar = new Array("!lt!", "!gt!", "!quot!", "!lt!", "!gt!", "!amp!", "!sharp!", "!oparen!", "!cparen!", "!squot!", "!bslash!");
		for (var i=0;i<findChar.length; i++)
		{
			s=replaceText(s, findChar[i], replaceChar[i]);
		}
		return s;
	}

	function searchMarkersToSpecialCharacters(s)
	{
		var replaceChar = new Array("<", ">", "\"", "&lt;", "&gt;", "&","#", "(", ")", "'", "\\");
		var findChar = new Array("!lt!", "!gt!", "!quot!", "!lt!", "!lt!", "!amp!", "!sharp!", "!oparen!", "!cparen!", "!squot!", "!bslash!");
		for (var i=0;i<findChar.length; i++)
		{
			s=replaceText(s, findChar[i], replaceChar[i]);
		}
		return s;
	}

	function searchHtmlFormat(s)
	{
		var findChar = new Array("<", ">","\"");
		var replaceChar = new Array("&lt;", "&gt;", "&quot;");
		for (var i=0;i<findChar.length; i++)
		{
			s=replaceText(s, findChar[i], replaceChar[i]);
		}
		return s;
	}

	function getScreenWidth()
	{
		return screen.availWidth - 10;  // for side borders
	}

	function getScreenHeight(isStatus)
	{
		if (typeof(isStatus) == "undefined")
			isStatus = true;

		var offset = isStatus ? 57 : 30;
		return screen.availHeight - offset; // for caption and status
	}

	function scrollElementIntoView(elem)
	{
		var body = document.body;
		var elemTop = elem.offsetTop;

		var tElem = elem;
		while (tElem.offsetParent != body)
		{
			tElem = tElem.offsetParent;
			elemTop += tElem.offsetTop;
		}

		var elemBottom = elemTop + elem.offsetHeight;
		var elemHeight = elemBottom - elemTop + 1;
		var scrollTop = body.scrollTop;
		var scrollBottom = scrollTop + body.clientHeight
		var v;

		if (elemTop > scrollBottom || elemBottom > scrollBottom)
		{
			if (body.clientHeight > elemHeight)
				v = elemTop - (body.clientHeight - elemHeight)
			else
				v = elemTop;
		}
		else if (elemBottom < scrollTop || elemTop < scrollTop)
		{
			v = elemTop;
		}
		else
			return;

		if (this.isIE) document.parentWindow.scrollTo(body.scrollLeft,v);
		else document.defaultView.scrollTo(body.scrollLeft,v);
	}

	function isGettingStarted(cid)
	{
		return (cid == "de1" || cid == "di1" || cid == "dn1" || cid == "d_di01");
	}

	function isDummies(acro)
	{
		return (acro.indexOf("d_") == 0);
	}

	// takes a number (PR_*), returns the pref value;
	function getPreference(prefNum)
	{
		prefString=this.getCookie("preferences"); // semicolon delimited
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler !=null) prefString=coursewareHandler.preferenceString;
		if (prefString==null || prefString.indexOf(";") < 0 || prefString.indexOf(",") != -1)
		{
			prefString=defaultPrefs;
			this.setCookie("preferences", prefString, prefTime);
			if (typeof(coursewareHandler) != "undefined" && coursewareHandler !=null) coursewareHandler.preferenceString=prefString;
		}
		var prefs = new Array;
		prefs=prefString.split(";");
		if (prefs[prefNum]==null || typeof(prefs[prefNum])=="undefined" || prefs[prefNum]=="" || prefs[prefNum]=="undefined") prefs[prefNum]=defaultPrefsArray[prefNum];
		if (prefNum==PR_AutoSearch && prefs[prefNum].length==1)
		{
				prefs[prefNum]=defaultPrefsArray[prefNum];
				this.setPreference(prefNum,defaultPrefsArray[prefNum]);
		}
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler !=null && typeof(coursewareHandler.useFsStyle) != "undefined" && coursewareHandler.useFsStyle)
		{
			if (prefNum==PR_PageAudio) prefs[prefNum]=1; // never turn off audio
			if (prefNum==PR_TextSize) prefs[prefNum]=2; // never change text size
			//if (prefNum==PR_AutoSearch) prefs[prefNum]=0; // never turn on autosearch
		}
		return prefs[prefNum];
	}

	function setPreference(prefNum,newValue)
	{
		var prefs = new Array;
		var newPrefs="";

		prefString=this.getCookie("preferences"); // semicolon delimited
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler !=null) prefString=coursewareHandler.preferenceString;
		if (prefString==null || prefString.indexOf(";") < 0) prefString=defaultPrefs;
		prefs=prefString.split(";");
		prefs[prefNum]=newValue;
		for (var i=0;i<=PR_NumPrefs;i++)
		{
			if (typeof(prefs[i])=="undefined" || prefs[i]==null || prefs[i]=="") prefs[i]=defaultPrefsArray[i];
			newPrefs=newPrefs+ prefs[i] + ";";
		}
		this.setCookie("preferences", newPrefs, prefTime);
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler !=null) coursewareHandler.preferenceString=newPrefs;
	}

	// write skinned gifs in non-foobared pages
	function writeSharedGif(gifName, gHeight, gWidth, alt, imgParms)
	{
		skinDir = this.getSkinDir();
		var sharedImageDir = localizedSharedDirectory + "images/skins/" + skinDir + "/images/";
		if ( (typeof(coursewareHandler) != "undefined" && coursewareHandler.design2011) || location.search.indexOf("d11=1") > -1) sharedImageDir = localizedSharedDirectory + "images/skins/1/images/2011/";
		if (skinDir=="custom") sharedImageDir = siteCustomDirectory + this.getCustomId() + "/images/";
		var acro=getAcro();
		if (acro.indexOf("c_") > -1 && typeof(c_useDefaultSkin) == "undefined") sharedImageDir = getCoursesDirectory(acro) + acro + "/skin/images/";
		var altTag="";
		if (typeof(alt) != "undefined") altTag=" title=\"" + alt + "\"";
		if (typeof(imgParms) == "undefined") imgParms="";
		imgCode="<IMG SRC=\""+ sharedImageDir + gifName +".gif\" HEIGHT=" + gHeight + " WIDTH=" + gWidth + " border=0" + altTag + imgParms + ">";
		if (typeof(useNewDesign) != "undefined" && useNewDesign && "mastery_title,nomastery_title,".indexOf(gifName + ",") > -1)
			imgCode = "<div id=\"sgifDiv \" style=\"display:inline;position:relative;left:-50px;\">" + imgCode + "</div>";
		if (gifName != "") document.write (imgCode);
	}

	function getSkinParm(delimiter)
	{
		skDir=ThisPage.getSkinDir();
		if (skDir != "1" ) return delimiter + "sk=" + skDir;
			else return "";
	}

	// write branded and unbranded gifs from course dir, including map if passed
	function writeCourseGif(acro, gifName, gHeight, gWidth, pictureParms)
	{
		var crsDir = getCoursesDirectory(acro) + acro + "/";
		// drop the d_ from the gif name if not dummies version
		if (acro.substring(0,2) != "d_" && gifName.substring(0,2)=="d_") gifName=gifName.substring(2,gifName.length); //if it is a dummies course, use the d_gifname.gif
		if (typeof(pictureParms) == "undefined") pictureParms="";
		imgCode="<IMG SRC=\""+ crsDir + gifName +".gif\" HEIGHT=" + gHeight + " WIDTH=" + gWidth + " border=0 " + pictureParms + ">";
		document.write (imgCode);
	}

	function writeSeriesTitle()
	{
		document.write(this.getSeriesTitle());
	}

	function writeCourseTitle(showSeries)
	{
		crsTitle=this.getCourseTitle();
		if (typeof(skinDir) != "undefined" && skinDir=="dummies") this.setDummiesValues();
		if (typeof(showSeries) != "undefined" && !showSeries)
			document.write(crsTitle.substring(crsTitle.indexOf(":") + 1, crsTitle.length));
		else
			document.write(crsTitle);
	}

	function getSeriesTitle(useJsVersion)
	{
		if (typeof(skinDir) != "undefined" && skinDir=="dummies") this.setDummiesValues();
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler.isBSV && typeof(crsTitle) == "undefined") crsTitle = coursewareHandler.wndContent.crsTitle;
		if (typeof(useJsVersion) == "undefined" || useJsVersion==false) crsTitle=this.getCourseTitle();
		if (typeof(crsTitle) == "undefined") return "";
		whereColon = crsTitle.indexOf(":");
		if (whereColon == -1) return crsTitle;
			else return crsTitle.substring(0,whereColon);
	}

	function getCourseTitle()
	{
		var passedCourseTitle=unescape(getPassedParm("crstitle",false));
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler.isBSV && typeof(crsTitle) == "undefined") crsTitle = coursewareHandler.wndContent.crsTitle;
		if (passedCourseTitle != "") return passedCourseTitle;
			else return crsTitle;
	}

	function getAcro()
	{
		if (typeof(crsAcronym) != "undefined") return crsAcronym;
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler.acro != null) return coursewareHandler.acro;
		var passedAcro=getPassedParm("cid",true);
		if (passedAcro == "") passedAcro=getPassedParm("course",true);
		if (passedAcro != "") return passedAcro;
		pathAcro=getAcroFromPath();
		if (pathAcro != "") return pathAcro;
		return "";
	}

	function getAcroFromPath()
	{
		var pagePath=location.href.toLowerCase();
		var whereCourses=pagePath.indexOf("courses/");
		if (whereCourses < 0) return "";
		var whereSlash=pagePath.indexOf("/",whereCourses + 8);
		var acro=pagePath.substring(whereCourses + 8, whereSlash);
		return acro;
	}

	function setDummiesValues()
	{
		if (typeof(d_crsTitle) != "undefined") crsTitle=d_crsTitle;
		c_sideIndent=8;
		if (!this.isGettingStarted(getAcro())) this.addBookButton();
	}

	function addBookButton()
	{
		bookButton="book,buybook,48,29," + resStr.buyBook;
		isSaPage = (location.href.indexOf("sainstrc.htm") > -1) || (typeof(inSa) != "undefined" && inSa);
		if (!isSaPage && typeof(customButton) != "undefined" && customButton.indexOf("buybook") == -1)
		{
			if (customButton == "scores;") customButton="scores"; //anomaly in scripting
			if (customButton != "") customButton=customButton + ";" + bookButton;
				else customButton= bookButton;
		}
	}
	function getCustomId()
	{
		var customId=this.getCookie("customid");
		if (customId == "undefined" || customId == null || customId.indexOf("site:") > -1) customId = "";
		if (customId.indexOf(":") > -1) customId=customId.substring(0,customId.indexOf(":"));
		return customId;
	}

	function getSiteId()
	{
		//site id is the custom id. If it is the site only, it is preceded by "site:" If there is a colon in the customId, the site follows the colon
		var siteId=this.getCookie("customid");
		if (siteId == "undefined" || siteId == null) siteId = "";
			else if (siteId.indexOf(":") > -1) siteId=siteId.substring(siteId.indexOf(":") + 1,siteId.length);
			
		//launchLob with "Add-a-Note" has set siteid cookie
		if (siteId == "")
			siteId=this.getCookie("siteid");

		return siteId;
	}

	function getSiteCustomDirectory()
	{
		var customId=this.getCustomId();
		if (customId != "") return siteCustomDirectory + customId + "/";
			else return "";
	}

	function getAssocId()
	{
		var customIdCookie=this.getCookie("customid");
		if (customIdCookie.indexOf(":") > -1) return customIdCookie.substring(customIdCookie.indexOf(":") + 1,customIdCookie.length);
			else return "";
	}

	function printPage()
	{
		if (window.print) setTimeout('window.print();',200);
			else if (this.isNavMac) alert(resStr.macPrint);
			else alert(resStr.pcPrint);
	}

	// Turns off scores functionality (ECDL courses)
	function allowScores(cAcro)
	{
		var parentExists = true;
		try {var doc = parent.document;} catch(e){parentExists = false;}
		if( (typeof(showScores) != "undefined" && showScores==false) || (parentExists && typeof(parent.showScores) != "undefined" && parent.showScores==false) || (typeof(coursewareHandler) != "undefined" && coursewareHandler != null && (coursewareHandler.scoOnly || coursewareHandler.useFsStyle ) ) ) return false;
		return true;
	}

	// Turns off SA
	function allowSA(cAcro)
	{
		if ( typeof(siteIdsNoSa) != "undefined" && typeof(coursewareHandler) != "undefined" && coursewareHandler != null && siteIdsNoSa.indexOf("," + coursewareHandler.siteId.toLowerCase() + ",") > -1) return false;
		if (!allowSaByAcro(cAcro)) return false;
		var parentExists = true;
		try {var doc = parent.document;} catch(e){parentExists = false;}
		if( (typeof(showSA) != "undefined" && showSA==false) || (parentExists && typeof(parent.showSA) != "undefined" && parent.showSA==false) || (typeof(coursewareHandler) != "undefined" && coursewareHandler != null && coursewareHandler.scoOnly) ) return false;
		return true;
	}

	function allowSaByAcro(cAcro)
	{
		if ( typeof(noSaByAcroSiteIds) != "undefined" && typeof(coursewareHandler) != "undefined" && coursewareHandler != null)
		{
			for (i=1;i<noSaByAcroSiteIds.length;i++)
			{
				if (noSaByAcroSiteIds[i]==coursewareHandler.siteId.toLowerCase() && noSaByAcroCourses[i].indexOf("," + cAcro + ",") >-1) return false;
			}
		}
		return true;
	}

	// Turns off Series Transcript Link
	function allowSeriesTranscript(cAcro)
	{
		if (coursewareHandler == null || !allowScores(cAcro) || coursewareHandler.isCustom || coursewareHandler.isDummies ||
			coursewareHandler.scoOnly || coursewareHandler.launchEnvironment == "CB" || zipAndShip ||
			(typeof(hideSeriesCertificate) != "undefined" && hideSeriesCertificate.indexOf(cAcro.toLowerCase()) > -1) ) return false;
		return true;
	}

	function copyToClipboard(itemId, getHtml)
	{
		if (!this.isIE) return;
		if(document.getElementById)
			obj=document.getElementById(itemId);
		if (obj != null)
		{
			if (typeof(getHtml) != "undefined" && getHtml) window.clipboardData.setData('Text', obj.innerHTML);
				else window.clipboardData.setData('Text', obj.innerText);
		}
	}

	// set the completion cookie to a string of zeros and ones; it starts with all zeros, and is all ones when 100% completed
	// The set and get CompletionCookie functions now use coursewareHandler.courseCompletionString as backup storage of the cookie (April 2010)
	// acro is no longer needed but kept for compatibility
	function setCompletionCookie(acro,numMarkers,setMarkerNum)
	{
		completionCookie = this.getCompletionCookie(acro);
		// if no cookie is set, set it to a string 0s numMarkers long
		if (completionCookie == null || completionCookie == "" || completionCookie == "0" || completionCookie == "undefined")
		{
			completionCookie = "0";
 			for (i=1;i < numMarkers;i++) {completionCookie += "0";}
		}
		if (setMarkerNum > 0) newCompletionCookie = completionCookie.substring(0,setMarkerNum-1) + "1" + completionCookie.substring(setMarkerNum,numMarkers+ 1)
			else newCompletionCookie=completionCookie;
		//for testing: newCompletionCookie="1111111111";
		cCookie=acro + "_completion";
		if (typeof(coursewareHandler)!="undefined" && coursewareHandler != null)
		{
			if (coursewareHandler.useFsStyle && coursewareHandler.crsVersion !="") cCookie=acro + "_" + coursewareHandler.crsVersion + "_completion"; // allows for multiple versions of courses; not used
			// give completion if last marker and at least 70% complete in case markers were skipped
			if (coursewareHandler.isBSV && setMarkerNum==10 && coursewareHandler.ml_getCourseCompletionPercentage() >= 70) newCompletionCookie="1111111111";
			coursewareHandler.courseCompletionString=newCompletionCookie;
			if (coursewareHandler.isBSV)
			{
				if (newCompletionCookie=="1111111111")
				{
					coursewareHandler.courseCompleted=true;
					if (coursewareHandler.quesRec=="")  // If no questions in BSV, make sure success only requires completion
					{
					 	coursewareHandler.successSetting=3;
					 	coursewareHandler.courseMasteryPercentage=100;
					}
					coursewareHandler.ml_setSuccessStatus();
				}
				if (completionCookie != newCompletionCookie) coursewareHandler.reportProgress();
			}
			if (coursewareHandler.launchEnvironment=="CB") this.setCookie(cCookie, newCompletionCookie);
		}
	}

	function getCompletionCookie(acro)
	{
		cCookie=acro + "_completion";
		if (typeof(coursewareHandler) != "undefined" && coursewareHandler != null && coursewareHandler.useFsStyle && coursewareHandler.crsVersion !="") cCookie=acro + "_" + coursewareHandler.crsVersion + "_completion";
		completionCookie = this.getCookie(cCookie);
		if (completionCookie == null || completionCookie == "" || completionCookie == "0")
		{
			if (typeof(coursewareHandler) != "undefined" && coursewareHandler != null) completionCookie = coursewareHandler.courseCompletionString;
				else completionCookie="0";
		}
		return completionCookie;
	}

	function hasCompletedCourse(acro)
	{
		completionCookie = this.getCookie(acro + "_completion");
		if (coursewareHandler != null && coursewareHandler.useFsStyle && coursewareHandler.crsVersion !="") completionCookie = this.getCookie(acro + "_" + coursewareHandler.crsVersion + "_completion");

		if (completionCookie == null || completionCookie == "" || completionCookie == "0")
		{
			if (typeof(coursewareHandler) != "undefined" && coursewareHandler != null) completionCookie = coursewareHandler.courseCompletionString;
				else completionCookie="0";
		}

		if (completionCookie.indexOf("0") > -1) return false;
			else return true;
	}

	function todaysDate()
	{
		var months=new Array("","January","February","March","April","May","June","July","August","September","October","November","December");
		var time=new Date();
		var lmonth=months[time.getMonth() + 1];
		var date=time.getDate();
		var year=time.getYear();
		if (year < 2000) year = year + 1900;
		return lmonth + " " + date + ", " + year;
	}

	function addEvent(obj, evType, fn)
	{
		if (obj.addEventListener)
		{
			obj.addEventListener(evType, fn, true); 
			return true; 
		} else if (obj.attachEvent)
		{
			var r = obj.attachEvent("on"+evType, fn); 
			return r; 
		} else
		{ 
			return false;
		}
	}

	function getObjectives(win,num,title)
	{
		if (typeof(win) == "undefined") win=self;
		objectives=win.objectives;
		if (typeof(objectives) == "undefined") return "";
		if (title.indexOf("Course Intro") > -1) return resStr.mouseIntro;
			else if (title.indexOf("Course") > -1 && title.indexOf("Review") > -1) return resStr.mouseReview;
		if (typeof(objectives[num]) == "undefined" || objectives[num]=="") return "";
		if (objectives[num].indexOf("<NIS>") != -1)
		{
			objText=objectives[num];
		}
		else
		{
			bullet="<td valign=top><img src=\"" + rootDir + "/shared/images/skins/" + this.getSkinDir() + "/images/bullet.gif\"></td>"
			objText=resStr.mouseObj;
			if (typeof(win.objIntro) != "undefined") objText=win.objIntro;
			objText+="<br><table><tr>"
			objs=objectives[num].split("|");
			for (i=0;i<objs.length;i++)
			{
				objText += bullet + "<td class=\"popText\">" + objs[i] + "</td></tr>";
			}
			objText += "</table>"
		}
		return objText;
	}

	function getInnerText(obj)
	{
		if (this.isIE) return obj.innerText;
			else return obj.textContent; //USE THIS?: ffGetInnerText(obj);
	}

	function ffGetInnerText(objNode)
	{
		var iText = "";
		var children = objNode.childNodes;
		for(var i=0; i < children.length; i++)
		{
			if (children[i].nodeType == 3)
				iText+= children[i].nodeValue;
		}
		return iText;
}


	function formatTime(mins)
	{
		if (mins < 60) return mins + " " + resStr.minutes;
		hours=parseInt(mins/60);
		if (hours==1) return resStr.oneHour;
		if (mins % 60 == 0) return hours + " " + resStr.hours;
			else return hours + " " + resStr.hours + ", " + (mins % 60) + " " + resStr.minutes;
	}

/******* Alcohol Safety New Features  ********************************/
	function isVersion(ver) // which state?
	{
		if (ver.indexOf(",") > -1)
		{
			verArray=ver.split(",");
			for (i=0;i < verArray.length;i++)
			{
				if (verArray[i]==coursewareHandler.stateVer) return true;
			}
			return false;
		}
		return ver==coursewareHandler.stateVer;
	}
	
	function checkDateFormat(dateValue)
	{
		var validformat=/^\d{2}\/\d{2}\/\d{4}$/ 
		if (!validformat.test(dateValue))
			return false;
		else
		{
			dateParts=dateValue.split("/");
			if (parseInt(dateParts[0],10) < 1 || parseInt(dateParts[0],10) > 12) return false;
			if (parseInt(dateParts[1],10) < 1 || parseInt(dateParts[1],10) > 31) return false;
			if (parseInt(dateParts[2],10) < 1900 || parseInt(dateParts[2],10) > 2100) return false;
		}
		return true;
	}
	
	function dataEncrypt(txt)
	{
		return txt;
	}

} // END of MlPage()

function getAcroFromId(id)
{
	var course_id = null;
	if (id.substring(1,2) == "_")
	{
		//Dummies (d_) or custom (c_) course
		if (id.substring(2).indexOf("_") == -1)
			//course acro
			course_id = id;
		else
		{
			//sco
			course_id = id.substring(0, id.substring(2).indexOf("_") + 2);
		}
	}
	else
	{
		if (id.indexOf("_") == -1)
			//course acro
			course_id = id;
		else
		{
			//sco
			course_id = id.substring(0, id.indexOf("_"));
		}
	}
	return course_id;
}

function isSco(id)
{
	//currently counts as a sco any page with an underscore. Needs to be rewritten.
	if (id.indexOf("_esmx") > -1) return false; // added by JAR 1/13
	if (id.substring(0,2) == "v_") return false;
	if (id.substring(0,2) == ".htm") return false;
	if (id.substring(1,2) == "_")
	{
		//Dummies (d_) or custom (c_) course
		if (id.substring(2).indexOf("_") != -1)
		{
			//sco
			return true;
		}
	}
	else if (id.indexOf("_") != -1 && id.indexOf(".") == -1)
	{
			//sco
			return true;
	}
	return false;
}

function isTrue(attribute)
{
  if (typeof(attribute) == "boolean")
    return attribute;
  if (typeof(attribute) == "string")
    return (attribute.substr(0,1).toLowerCase() == "t");

  return false;
}

function popFlash(fName, fTitle, fHeight, fWidth, fBgcolor)
{
	var acro=ThisPage.getAcro();
	crsDir = getCoursesDirectory(acro) + acro + "/";
	if (typeof(fBgcolor)=="undefined") fBgcolor="FFFFFF";
	if (typeof(flashBgcolor)!="undefined") fBgcolor=flashBgcolor;
	fUrl=sharedDirectory + "templates/flashwin.htm?acro=" + acro + "&coursedir=" + crsDir + 
		"&fname=" + fName + "&fheight=" + fHeight + "&fwidth=" + fWidth + "&title=" + fTitle + "&fbgcolor=" + fBgcolor;
	var winWidth=parseInt(fWidth) + 5;
	var winHeight=parseInt(fHeight) + 5;
	var winParms="toolbar=no,menubar=no,resizable=no,width=" + winWidth + ",height=" + winHeight + ",scrollbars=no";
	ThisPage.floatWin(fUrl,"flashwin",winParms);
}

// *********************** Mouseover Tool Tip Code *******************************
function showFloatingMessage(target,text,wWidth,wTop,wLeft,show,label,event)
{
	var thisPage = new MlPage();
	goodTarget=(typeof(target) != "undefined" && target && typeof(target.document) != "undefined") // && target.document.readyState == "complete");
	if (!goodTarget || thisPage.getPreference(PR_ToolTips) == "0") return;
//	if (typeof(target.pgTpl) != "undefined" && target.pgTpl.indexOf("slideshow") > -1) return;
	var scrollAmount=target.document.body.scrollTop;
	if (wTop=="mouse") wTop=e.y;
	if (wLeft=="left") wLeft=e.x  - wWidth;
		else if (wLeft=="center") wLeft=e.x - parseInt(wWidth/2);
		else if (wLeft=="right" || wLeft=="mouse") wLeft=e.x;
	if (typeof(label) == "undefined") label="";
		else if (label != "") label += "<br>";
	messageDiv=target.document.getElementById("msgDiv");
	if (messageDiv == null) return;
	if (show)
	{
		messageLabelDiv=target.document.getElementById("msgLabelDiv");
		messageTextDiv=target.document.getElementById("msgTextDiv");

		if (messageLabelDiv != null) messageLabelDiv.innerHTML=label;
		messageTextDiv.innerHTML=text;
		if (typeof(wWidth) != "undefined") messageDiv.style.width=wWidth;
			else messageDiv.style.width="200";
		if (typeof(wTop) != "undefined") messageDiv.style.top=wTop + scrollAmount;
			else messageDiv.style.top="0";
		if (typeof(wLeft) != "undefined") messageDiv.style.left=wLeft;
			else messageDiv.style.left="0";
		messageDiv.style.visibility="visible";
	}
	else
	{
		messageDiv.style.visibility="hidden";
		if (typeof(target.clearMessageText()) != "undefined") target.clearMessageText();
	}
	repaintDivs(target);
}

function repaintDivs(target)
{
	if (typeof(target)=="undefined") target=self;
	var rDivs=new Array;
	rDivs[0]="np";
	if (typeof(pgTpl) != "undefined" && pgTpl.indexOf("drop") > -1) rDivs[1]="pgText";
	for (i=0; i<rDivs.length; i++)
	{
		obj=target.document.getElementById(rDivs[i]);
		if (obj != null && obj.style.display != "none")
		{
			obj.style.display="none"
			obj.style.display="block"
		}
	}
}

function writeMouseoverDiv()
{
	divText="<DIV ID=\"msgDiv\" STYLE=\"position:absolute; top:100; left:100; visibility:hidden; z-index:2;display:inline\"" +
		" onmouseover=\"showFloatingMessage(self,'',0,0,0,false,'')\">" +
		"<TABLE class=\"popBox\" WIDTH=\"100%\"><TR><TD>" +
		"<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0><TR><TD>" +
		"<span id=\"msgLabelDiv\" class=\"popLabel\"></span>" +
		"<span id=\"msgTextDiv\" class=\"popText\"></span>" +
		"</TD></TR></TABLE></TD></TR></TABLE></DIV>";
	document.write(divText);
}

function buttonRollover(objName,imgName,isOver,imageDir)
{
	if (!useNewDesign) return;
	if (typeof(sharedImageDir)=="undefined") sharedImageDir=rootDir + "/shared/images/skins/1/images/";
	if (typeof(imageDir) == "undefined") imageDir=sharedImageDir;
	thisBut=document.getElementById(objName);
	if (thisBut != null)
	{
			if (thisBut.src.indexOf("checking_") == -1) thisBut.src = imageDir + imgName + (isOver ? "_on" : "") + ".gif";
	}
	return true;
}
// ******************* End Mouseover Tool Tip Code ***************************

// This function is called from within the course js of the courses to get SA and scoring
function AllowIcdlScoresAndSABySite()
{
	if (typeof(IcdlPrivilegedSiteIds) == "undefined") return;
	var thisSiteId="";
	if (typeof(parent.params) != "undefined" && parent.params.get("siteid") != null) thisSiteId=parent.params.get("siteid").toLowerCase();
		else if (typeof(params) != "undefined" && params.get("siteid") != null) thisSiteId=params.get("siteid").toLowerCase();
			else return;

	if (IcdlPrivilegedSiteIds.indexOf("," + thisSiteId + ",") > -1)
	{
		aboutLinks.add(new AboutLink("skillassessment","Take a Skill Assessment","sa"));
		aboutLinks.add(new AboutLink("scores","View My Scores","scores"));
		showScores=true;
		showSA=true;
	}
}

// ******************* End ICDL Function ***************************
// Works like eval, but will not cause an error if varString is not defined
function evalVar(varString)
{
	try { varValue=eval(varString); } catch(e) { return "undefined"; };
	return varValue;
}
function getStringBetween(txt,startTag,endTag) // used to show copyright on welcome page
{
	if (txt.indexOf(startTag)==-1 || txt.indexOf(endTag)==-1) return "";
	newTxt=txt.substring(txt.indexOf(startTag) + startTag.length,txt.length);
	newTxt=newTxt.substring(0,newTxt.indexOf(endTag) );
	return newTxt;
}

function cpy(txt)
{
	ag = navigator.userAgent.toLowerCase();
	if ((ag.indexOf("msie") != -1) && (ag.indexOf("opera") == -1)) window.clipboardData.setData("Text", txt);	
}
// *************** Write Links - here so it can be called in popup files without common.js *******
function writeLinkText(url, text)
{
	if (typeof(text)=="undefined") text=url;
	internetSearchEnabled=true;
	if (typeof(coursewareHandler) != "undefined" && typeof(coursewareHandler.internetSearchEnabled) != "undefined")
		internetSearchEnabled=coursewareHandler.internetSearchEnabled;
	if (internetSearchEnabled)
	{
		if (typeof(floatWin) == "undefined") document.write("<a href=\"" + url + "\" target=\"_blank\" title=\"Open " + url + " in a new window\">" + text + "</a>");
			else document.write("<a href=\"javascript:floatWin('" + url + "','internet_win','resizable=yes,width=640,height=480,scrollbars=yes,menubar=yes')\" title=\"Open " + url + " in a new window\">" + text + "</a>");
	} else if (text.indexOf("http://") == -1) document.write(text + " (" + url + ") ");
		else document.write(text);
}


function getMouseEvents( event ) {

    event = event || window.event;

    var e = { event: event,
        target: event.target ? event.target : event.srcElement,
        which: event.which ? event.which :
            ( (event.button == 2) ? 3 : 1 ),
        x: event.x ? event.x : event.clientX,
        y: event.y ? event.y : event.clientY
    }
    return e;
}

/************ design2011 functions ****************/
// Change feature references -- this is in mlclientpage so it can be called from accessiblity
function featureRef(txt)
{
	switch(txt)
	{
		case "from the Course Tools tab":
		case "on the Course Tools tab":
			if (coursewareHandler.design2011) txt="in the Course Tools";
			break;
		case "use the Course Tools tab":
			if (coursewareHandler.design2011) txt="use the Course Tools";
			break;
		default:
	}
	document.write(txt);
}

function downloadSlides()
{
	cwh=coursewareHandler;
	if (cwh == null || typeof(cwh.aboutLinks) == "undefined") return;
	for (var idx=1; idx <= cwh.aboutLinks.count; idx++)
	{
		var link = cwh.aboutLinks.links[idx];
		if (link.caption=="Download Slides")
		{
			window.open(link.url,"slides","toolbar=no,menubar=no,resizable=yes,width=400,height=400");
			return;
		}
	}
}

function goReferencePage()
{
	cwh=coursewareHandler;
	if (cwh == null || typeof(cwh.aboutLinks) == "undefined") return;
	for (var idx=1; idx <= cwh.aboutLinks.count; idx++)
	{
		var link = cwh.aboutLinks.links[idx];
		if (link.caption=="Reference" || link.caption=="MindNotes")
		{
			coursewareHandler.goPage(link.url);
			return;
		}
	}
}
