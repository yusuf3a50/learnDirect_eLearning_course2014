// Specify the siteids, in lowercase, separated by commas, to get SA and Scoring in ICDL.
// Site Id must be preceded and followed by a comma. Used in mlclientpage.js.
var IcdlPrivilegedSiteIds=",icdlus001qppa,icdlus001qpp,";

// Series that contain show me how pages -- 
seriesWithShowmes="fl8del,iissix,msof07,msvist,xicrys,dw04mx,excl03,lnot65,maccs3,outlk3,phshcs,prj3ms,prjsv3,pwpt03,qb04in,w290sa,w291ni,w23293,w294ad,word03,07acce,e10upg,o10upg,p10upg,w10upg,a10upg,10word,10exce,10sb10,10ab10,10ob10,10pb10,10eb10,10wb10,10proj,8windo,12qboo,";
seriesWithShowmes+="07exce,msvteu,07word,07aexc,07shar,07pwrp,07outl,07adac,07proj,lono85,07visi,7seven,4photo,4dream,4flash,10offc,";
partialSeries=",";

// Series that contain techlabs -- 
seriesWithLabs="c81206, c90106, 802ccn, ccitft, 822ccn, 816ccn, c82506, aessen, 602apl, 603apl, nwplus, cnetpl, scrtyp, csecpl, or079i, or319i, or32iz, or33iz, or43iz, x270pr, w271su, xpapps, w290sa, w291ni, w293np, 620msv, wind08, sql431, 443mci, 444mci, w294ad, 701apl, 702apl, 640win,";

// Series that contain PIT labs -- 
seriesWithLabsPit="510vcp, win7ad, 701pex, 702pex, 005pex, 802ccn, 816ccn, 822ccn, 701apl, 702apl, 236mct, w271su, xpapps, exmang, w290sa, w291ni, w293np, w294ad, svseca, sql431, 432sql, 433sql, 541mct, 542mct, 630mct, 631mct, 640win, 643win, 646mcp, 647mcp, 680mct, wind08, 622msv, 662mct, x270pr, 902pex, 813pex, 832pex, 662mct, 902ccn, 813ccn, 832ccn, 667mct, 66mdct, 80mdcn, 68mdct, 12netp, apwin7,";

// ************** Set BSV Host Streaming Server by Site ID ********************
var bsvHostSites = new Array;
var bsvHostServers = new Array;
bsvHostSites[1]="xmain";
bsvHostServers[1]="mms://trix/";

// ************** Set Video to Low for On-Page Videos by Site ID ********************
var lowVideoSites = ",navyfe001,milcom001,saintl002b,"; // lowercase siteid, begin with comma and separate by commas

// ************** Set Evaluation CC email by Site ID ********************
var ccSites = new Array;
var ccAddresses = new Array;
ccSites[1]="xmain";
ccAddresses[1]="jrubino@mindleaders.com";

// ************** Turn off Evaluation by Site ID ********************
var siteIdsNoEvaluation = ",cyberu002,bankof002a,"; // each id must be preceded and followed by a comma

// ************** Turn off Certificate by Site ID ********************
var siteIdsNoCertificate = ",vuepoi001b,humang001,eca01,eca01lms,"; // each id must be preceded and followed by a comma

// ************* Hide series certificates for these one-course or incomplete series ************* //
// each acro must be preceded and followed by a comma
var hideSeriesCertificate=",401k01,bcs205,cb1,cs1,d_4001,hrin09,ie7d01,mlhr01,moti02,rd1,v_ud02,v_ud03,v_ud04,v_ud05,chbi01,inbi01,ie80011,10sb01,10ab01,10ob01,10pb01,10eb01,10wb01,lawman,ngotng,10proj,12ciss,8windo,";

// ************** Turn off SA by Site ID ********************
var siteIdsNoSa = ",jarexample,"; // each id must be preceded and followed by a comma

// ************** Turn off SA for individual courses by Site ID ********************
var noSaByAcroSiteIds = new Array;
var noSaByAcroCourses = new Array;
noSaByAcroSiteIds[1]="granit003";
noSaByAcroCourses[1]=",shar02,shar03,shar04,sehk02,kubsh2,kubsh3,sxha01,sxha02,sxma01,sxma02,sxma03,sxhc01,sxhc02,sxcmp1,sxcmp2,sxcmp3,"; // each course acro must be preceded and followed by a comma
noSaByAcroSiteIds[2]="motori001";
noSaByAcroCourses[2]=",cu1,cu2,cu3,cu4,cu5,"; // each course acro must be preceded and followed by a comma
noSaByAcroSiteIds[3]="kubota001";
noSaByAcroCourses[3]=",kubsh1,kubsh2,kubsh3,sxha01,sxha02,sxma01,sxma02,sxma03,sxhc01,sxhc02,sxcmp1,sxcmp2,sxcmp3,"; // each course acro must be preceded and followed by a comma
noSaByAcroSiteIds[4]="unitri001";
noSaByAcroCourses[4]=",shar02,shar03,shar04,sxha01,sxha02,sxma01,sxma02,sxma03,sxhc01,sxhc02,sxcmp1,sxcmp2,sxcmp3,"; // each course acro must be preceded and followed by a comma
noSaByAcroSiteIds[5]="linksn001";
noSaByAcroCourses[5]=",sxma01,mngs01,mngs02,mngs03,comm01,comm02,comm04,v_l117,v_l120,v_c203,v_c204,v_c205,v_c206,sxhc01,sxhc02,sxcmp1,sxcmp2,sxcmp3,"; // each course acro must be preceded and followed by a comma
noSaByAcroSiteIds[6]="usgasa001";
noSaByAcroCourses[6]=",sxha01,sxha02,sxma01,sxma02,sxma03,sxhc01,sxhc02,sxcmp1,sxcmp2,sxcmp3,"; // each course acro must be preceded and followed by a comma

// ************** Turn off Supplied Files by Site ID ********************
var siteIdsNoSuppliedFiles = ",navyfe001,"; // each id must be preceded and followed by a comma

// ************** Force WMVs by Site ID ********************
var sitesUsingWmv=",allegh003,mcstra001,mcstra001b,savann001,learnc001p,jbhunt001,samplemlroot,"; // each id must be preceded and followed by a comma

// ************** Phoenix University Series ********************
var phoenixCreditUrl="http://www.mindleaders.com/courses/phoenix.aspx";
var seriesPhoenix=",07word,mgfdsf,07acce,07adac,07aexc,07exce,07outl,07proj,07pwrp,07shar,07visi,07word,7seven,a2kmou,axpmou,e2kexp,e2kmou,excl03,expmou,fhfdsf,grou55,gw65nv,i4pcap,ie6int,ie7del,ie8010,lono85,ltnt65,maccs3,mgfdsf,msof07,msvteu,no5lib,o2klib,offc11,ofxpnw,osxpnw,outlk3,oxpmou,p2kmou,prj3ms,prjmou,pwpt03,pxpmou,sp03ms,vis2k2,w2kexp,w2kmou,word03,wxpmou,"; // each series acronym must be preceded and followed by a comma

// ************** Sites with custom Add-a-Note Icons ********************
var sitesWithCustomAanIcon=",rmsecond,dunkin001dbc,dunkin001dd,dunkin001br,"; // each id must be preceded and followed by a comma

// ************** Sites with custom Add-a-Note Icons ********************
var sitesWithNoLogo=",capi01,uko01,vise01,minduk001,"; // each id must be preceded and followed by a comma

// ************** Sites that should not show Mindleaders logo ********************
var sitesWithNoLogo=",capi01,uko01,vise01,minduk001,"; // each id must be preceded and followed by a comma

// ************** Alcohol Proctored Exams ********************
proctoredSiteIds=",jartest|ML"; // comma delimited siteId1|pw1,siteId2|pw2. Start with a comma. The pw is case sensitive.

// ************** Welcome Page Banner (OTS Only) ********************
useWelcomePageBanner=false;
welcomePageBannerImage="http://storefront.mindleaders.com/resources/custom/003/_images/_support/redesign.gif";
welcomePageBannerUrl="http://www.mindleaders.com/news/articles/elearning-redesign-2011";
welcomePageBannerPlacement="bottom"; // top or bottom

// ************** Add Messages to the Title Page for a Series ********************
var seriesWithMessages = ",chbizz,inbizz,10word,10exce,e2242k,appnet,arcnet,exmang,s228ad,sql229,vbnweb,xmlbas,vbwind,wac315,xmc320,wsad50, w217ad,w219dd,w216na,w221nd,w218nm,winpro,w220sc,w215sr,10ab10,10ob10,10pb10,10eb10,10wb10,lawman,ngotng,11mdcp,3imdlc,41mdcp,51md11,52md11,53md11,66mdct,68mdct,80mdcn,bimdna,12ciss,8windo,"; // each series acronym must be preceded and followed by a comma. Use lowercase.
// For each series acronym, create a message with this format. Use lowercase for the variable name: 
msg_chbizz="To see only the course video and have a quick check of your understanding, use the Course Topics tab to go directly to the Course in Review lesson.";
msg_inbizz="To see only the course video and have a quick check of your understanding, use the Course Topics tab to go directly to the Course in Review lesson.";
msg_12ciss="Additional courses are coming to complete this series. Please check back soon for more.";
msg_8windo="Additional courses are coming to complete this series. Please check back soon for more.";
msg_lawman="Additional courses are coming to complete this series. Please check back soon for more.";
msg_ngotng="Additional courses are coming to complete this series. Please check back soon for more.";
msg_e2242k="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_appnet="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_arcnet="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_exmang="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_s228ad="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_sql229="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_vbnweb="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_xmlbas="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_vbwind="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_wac315="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_xmc320="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_wsad50="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w217ad="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w219dd="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w216na="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w221nd="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w218nm="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_winpro="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w220sc="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_w215sr="This course was originally released as part of study guide for a certification exam. The exam is no longer offered by the vendor however the content remains valid for this topic.";
msg_10ab10="The contents of this course are also available as part of the Office 2010 series."
msg_10ob10="The contents of this course are also available as part of the Office 2010 series."
msg_10pb10="The contents of this course are also available as part of the Office 2010 series."
msg_10eb10="The contents of this course are also available as part of the Office 2010 series."
msg_10wb10="The contents of this course are also available as part of the Office 2010 series."
msg_bimdna="The contents of this course are also available as part of the Certified Business Analysis Professional (CBAP v2) series."
msg_11mdcp="The contents of this course are also available as part of the CompTIA Security+ 2011 (SY0-301) series."
msg_41mdcp="The contents of this course are also available as part of the VMware Certified Professional VCP-410 series."
msg_66mdct="The contents of this course are also available as part of the Microsoft Exchange Server 2010 MCTS 70-662 series."
msg_80mdcn="The contents of this course are also available as part of the Cisco Related Series by MindLeaders CCNA 640-802 series."
msg_53md11="The contents of this course are also available as part of the Oracle Database 11g Administration II (1Z0-053) series."
msg_51md11="The contents of this course are also available as part of the Oracle Database 11g SQL Fundamentals I (1Z0-051) series."
msg_3imdlc="The contents of this course are also available as part of the ITIL Version 3 Foundation Certificate EX0-101 series."
msg_52md11="The contents of this course are also available as part of the Oracle Database 11g Administration I (1Z0-052) series."
msg_68mdct="The contents of this course are also available as part of the Windows 7 Configuration MCTS 70-680 series."