var parentExists = true;
try {var doc = parent.document;} catch(e){parentExists = false;}

function ResourceStrings_en()
{
// courselisting.htm
	this.popMessage1="<b>Warning:</b> You may have a popup blocker running, which might prevent you from using some features in the courses. For instructions on how to turn off popup blockers, ";
	this.popMessage2="<b>right-click</b> here</a>, and select Open in New Window from the shortcut menu.";
// auto_search.js
	this.srhLinkTextGlossary="Search&nbsp;the&nbsp;Glossary";
	this.srhLinkTextCourse="Search&nbsp;this&nbsp;Course";
	this.srhLinkTextWeb="Search&nbsp;the&nbsp;Web";
	this.srhLinkTextDictionary="Dictionary";
	this.srhLinkTextEncyclopedia="Search&nbsp;the&nbsp;Encyclopedia";
	this.srhLinkTextRefLib="My Reference Library";
	this.Close="Close";
// certificate.js
	this.cert_noAcro="An error occurred trying to load the certificate: Cannot find course acronym.";
	this.cert_estHours="Estimated Course Hours";
	this.cert_estMins="Estimated Course Minutes";
	this.cert_seriesNumberOfCourses="Courses in Series";
// common.js
	this.sContinue="Continue...";
	this.selectTrue="Select True";
	this.sTrue="True";
	this.sFalse="False";
	this.selectFalse="Select False";
	this.yes="Yes";
	this.selectYes="Select Yes";
	this.no="No";
	this.selectNo="Select No";
	this.selectAnswer="Select answer ";
	this.checkAnswer="Checking your answer...";
	this.evalQuestion="Evaluate this question";
	this.checkResults="Checking your results...";
	this.skipQuestion="Skip this question...";
	this.error_loadPageAcro="An error occurred trying to load this course page: Cannot find the course acronym.";
	this.submitAnswer="Submit your answer";
	this.viewSim="View the simulation";
	this.printCert="Print a Certificate of Mastery.";
	this.imExerciseLink="Click here</a> to find out how you can access Certified Mentors for Exercise assistance.";
	this.macromediaTm = "Made with Macromedia is a trademark of Macromedia, Inc.";
	this.audioOff = "Turn audio off";
	this.audioOn = "Turn audio on";
	this.replayAudio = "Replay the audio";
	this.replayAnimation="Replay the animation";
	this.showmeAlt="Show me how";
	this.keyboardAlt="Show keyboard shortcuts";
	this.doitAlt="Let me try";
	this.exploreitAlt="Explore it";
	this.showmeButtonInstruction="If you want to see the task performed, click the Show Me button in the navigation bar.";
	this.doitButtonInstruction="If you want to try performing the task yourself, click the Do It button in the navigation bar.";
	this.exploreShowmeInstructions="If you want the areas explained to you, click the <b>Show Me</b> button in the navigation bar.";
	this.firstShowmeInstructions="If you want to see this task performed, click the Show Me button in the navigation bar.";
	this.quickrefAlt="Open reference material"
	this.Unit="Unit";
	this.checkboxMsg="Please try again. More than one answer is correct.";
	this.radioMsg="You have not selected an answer.";
	this.dropdownMsg="Please try again. You did not specify an answer for each choice.";
// Question n of n
	this.Question="Question";
	this.Of="of";
// courseframe.js
	this.eLearning="e-Learning";
// courseware.js
	this.defaultCaption="e-Learning that works.";
	this.answerToContinue="Please answer this question before continuing.";
	this.error_stackEmpty="Stack is empty";
	this.error_backInvalidTool="Back to course is not valid. You are not in a tool.";
	this.error_backInvalidCourse="Back to course is not valid. You are not in a course.";
	this.notCompleted="You have not completed the"
	this.Test="test";
	this.SAlc="skill assessment";
	this.saNextTime="The next time you take this";
	this.saStartOver= "you will have to start over from the beginning.";
	this.saClickOk="Click OK to exit the";
	this.saOrCancel="or Cancel to continue taking the";
	this.evalCourseEval="Evaluation for"
	this.courseExiting="<p><b>Please wait...</b></p><p>Do not close this window.  Your course progress is being saved.</p>";
// foobar.js
	this.editPage="Edit this page";
	this.AddNote="Add a note to this page";
	this.goTools="Go to the Tools page";
	this.viewHelp="View the Help";
	this.printPage="Print this page";
	this.printSim="Print this procedure";
	this.viewCrslist="Exit the course and mark your place";
	this.bsv_viewCrslist="Exit the program";
	this.goNext="Go to the next page";
	this.goPrevious="Go to the previous page";
	this.exitSa="Exit the Skill Assessment";
	this.goCourse="Go back to the course.";
	this.goMenu="Go to the course menu";
	this.goTools="View the course tools";
	this.viewScores="View your scores.";
	this.goNext="Go to the next page";
	this.openIm="Open Instant Mentor live classroom.";
// footer.js
	this.returnQuestionStatus="Return to the question";
	this.returnQuestionLink="Click here</A> to return to the question.";
	this.SummaryOts="Summary";
	this.SummaryDummies="What You've Learned";
// LmsObject.js
	this.error_LmsObjectNoCrsId="You must specify the course ID to LmsObject.launchSco() when no course is currently open.";
	this.error_LmsObjectNotInCrs="You cannot call LmsObject.goToCourseUrl() when you are not in a course.";
	this.mustCompleteSa="You must complete or exit the skill assessment before you can access other functionality.";
	this.eLearningWorks="e-Learning that works.";
	this.cannotCompleteSa="Can't complete SA.  Not in a course.";
// mlclientpage.js
	this.error_noCache="No cache element was supplied. getClientOnlyData() cannot be invoked.";
	this.buyBook="Buy the book for this course.";
	this.macPrint="Press 'Cmd+p' on your keyboard to print.";
	this.pcPrint="Press 'Ctrl+p' on your keyboard to print.";
// navigate.js
	this.nav_viewAbout="View information about this course";
	this.nav_about="About This Course";
	this.nav_viewTopics="View the course topics";
	this.nav_topics="Course Topics";
	this.nav_viewGlossary="Go to the Glossary";
	this.nav_glossary="Glossary";
	this.nav_viewSa="Go to Skill Assessment";
	this.nav_sa="Skill Assessment";
	this.nav_viewScores="View your scores";
	this.nav_scores="Scores";
	this.nav_viewCeus="Request Continuing Education Units";
	this.nav_ceus="Continuing Education Units (CEUs)";
	this.nav_viewEval="Evaluate this course";
	this.nav_eval="Evaluate This Course";
	this.nav_viewRefLib="Access your reference library.";
	this.nav_refLib="Reference Library";
	this.nav_books24x7="Powered by Books24x7";
	this.nav_viewMasterTopics="View the Topics for all available courses";
	this.nav_masterTopics="Master Topics";
	this.nav_viewSearch="Search the courses";
	this.nav_search="Search the Courses";
	this.nav_viewPrefs="Set your course preferences";
	this.nav_prefs="My Preferences";
// printbut.js
	this.clickToPrint="Click Here to Print";
// scorepages.js
	this.error_lessonTitles="Error: Unable to determine lesson titles.";
	this.goLesson="Go to this lesson";
	this.noQuestions="No&nbsp;Questions"; //use non-breaking space
	this.notMasteredText ="<b>Since you have not mastered all lessons in the course, you have not yet mastered this course.</b>";
	this.masteredText="<b>Congratulations</b>, you have mastered this course. Click the Certificate button below to view your Certificate of Mastery.";
	this.masteredTextNoCertificate="<b>Congratulations</b>, you have mastered this course.";
	this.masteredTitle="Congratulations!";
	this.notMasteredTitle="You've Reached the End of the Course";
	this.evaluationText="<br><br>Click the Evaluation button to send us your comments or suggestions for this course.";
	this.exitText="<br><br>Click the Exit button to exit the course.";
	this.last_notMasteredText="You have not yet mastered this course. Press <b>S</b> or click the Scores button <script>writeScoresButtonImage();</scr" + "ipt> to view your scores and determine which lessons you need to revisit.";
	this.last_notMasteredTextSa="<br><br> You can also achieve mastery by taking the Skill Assessment. Press <b>A</b> to begin the Skill Assessment.";
	this.last_masteredText="You have mastered this course. Press <b>S</b> or click the Scores button <script>writeScoresButtonImage();</scr" + "ipt> to view your scores and print a mastery certificate.";
	this.mentor="If you would like additional assistance in mastering the concepts of this course, or have specific questions on the areas you need to revisit, please contact your Mentor by clicking the Mentor button on the Navigation bar.";
	this.emsScores="Scores for";
	this.emsOverall="Overall Course Score";
	this.emsBestSa="Best Skill Assessment Score";
	this.emsMastery="These scores meet or exceed the mastery level of";
	this.emsNoMastery="These scores do not meet the mastery level of";
	this.emsByLesson="Scores by Lesson";
// scovie.js
	this.replayIntro="Replay the introduction";
// srhresult.htm
	this.srhSearch="Search for:";
	this.srhTitle="Search Results";
	this.srhCourse="Course";
	this.srhCourses="Courses";
	this.srhOf="of";
	this.srhNoMatches="No matches were found.";
	this.srhNoAdditionalMatches="No additional matches were found.";
	this.srhMatches="Matches";
	this.srhNone="None";
	this.srhSearched="courses searched";
	this.srhInstructions="Enter a term and click the Search button."
// search.js
	this.srh_badChar="Please enter the text to search for. Do not include angle brackets (< >) or quotation marks.";
	this.srh_waitForLoad="Please wait for the list of courses to finish loading before you search.";
	this.srh_selectCrs="Please select the courses to search.";
// skill.js
	this.sa_correctFdbk="That's correct.";
	this.sa_incorrectFdbk="That's incorrect.";
	this.sa_completed="You have completed the Skill Assessment. Click the Scores button to view your scores.";
	this.sa_accCompleted="You have completed the Skill Assessment. Press N  to view your scores.";
	this.sa_accLinkText="View Your Scores";
	this.sa_simRight="You completed the simulation successfully.";
	this.sa_simWrong="You did not complete the simulation successfully.";
	this.sa_salsaRunningHead_question="SALSA: Question ";
	this.sa_runningHead_of= " of ";
	this.sa_runningHead_question="Skill Assessment: Question ";
	this.sa_runningHead="Skill Assessment";
	this.sa_nextQuestionMouseover="Go to the next question.";
	this.sa_scoresMouseover="View your scores.";
// tabbar.js
	this.error_tabAdded="Tabs cannot be added once the TabBar is drawn.";
	this.error_tabHide="You cannot hide the last visible tab.";
	this.error_tabDraw="TabBar has already been drawn to the page.";
	this.error_tabOne="There must be at least one tab in the TabBar in order to draw it.";
// verticalSplitter.htm
	this.gripperDisabled="All functionality is disabled while taking a skill assessment.";
// actwin.htm
	this.closeWin="Close This Window";
// progrpt.htm (Progress Report)
	this.progInstr1="You must answer all questions in a lesson at least once for a score to be shown. Checkmarks show which lessons you've completed at least once.<br><br><b>To change your score, you must re-take all questions within the lesson.</b><br><br>Click a question to view it in the course. ";
	this.progInstr2="Click here</A> at any time to update this report.";
//	this.progInstr1="This report tracks your course progress based on the questions you've answered. Any questions you haven't answered are listed below. Click a question link to view the question. After you answer a question, you can <B>";
//	this.progInstr2="click here</A></B> to update the report.";
	this.prUnit="Unit";
	this.prLesson="Lesson";
	this.prCompleted="Completed";
	this.prQuestion="Question";
// navbarcoursetools
	this.navSa="Take the skill assessment for this course.";
	this.navScores="Check your scores for this course.";
	this.navGlossary="View the course glossary of terms.";
	this.navCopyright="View the copyrights.";
	this.navCourse="See what's in this course.";
	this.navCeus="View information about gaining CEUs with this course.";
	this.navEval="Send us your evaluation of this course.";
	this.navAccess="View information about using the accessible version of this course.";
	this.navCredits="View the credits for this course.";
	this.navCert="View information on being certified with this course.";
	this.navPreferences="View and modify your preferences.";
	//this.navProgrpt="View your progress in this course.";
	this.navProgrpt="View which questions you've answered in this course.";
	this.navProgressReport="Progress Report";
	this.navSeriesTranscript="Series Transcript";
	this.navReflib="Access your reference library.";
	this.navPref="My Preferences"
	this.tabAssessment="Assessment";
	this.tabCourseResources="Course Resources";
	this.tabAbout="About This Course";
	this.navConventionsFull="View the conventions used in this course.";
	this.navSyntaxConventionsFull="View the syntax conventions used in this course.";
	this.navCodeConventionsFull="View the code conventions used examples in this course.";
	this.navSuppliedFull="Copy the sample files supplied with this course to your machine.";
	this.navObjectivesFull="View the Exam Objectives.";
	this.navExercisesFull="Print all the exercises in this course.";
	this.navFeaturesFull="View a description of the special features in this course.";
	this.navView="View the";
	this.navResource="course resource.";
	this.navReference="View the reference materials provided with this course.";
	this.navMindnotes="View the MindNotes provided with this course.";
	this.navShowmes="View a list of Show Me's available in this series.";
	this.navPodcasts="Download m-learning for this course.";
	this.navGlossaryGame="Play a game matching terms and definitions.";
	this.navFlashcards="Use flashcards to help memorize key terms and definitions.";
	this.navTechlabs="View the labs related to this series.";
	this.navPhoenix="View information about obtaining college credit.";
	this.navPhoenixLabel="College Credit";
// full mouseover help
	this.navAccessFull="View information about using the accessible version of this course.";
	this.navTextonlyFull="View a printable version of this course.";
	this.navCertFull="View information about using this course to become certified.";
	this.navCeusFull="View information about gaining Continuing Education Units for completing this course.";
	this.navSaFull="Take the Skill Assessment for this course.";
	this.navScoresFull="View your question and Skill Assessment scores for this course.";
	this.navGlossaryFull="View the course glossary of terms.";
	this.navCopyrightFull="View the copyright information for this course.";
	this.navCourseFull="View a synopsis of this course, its objectives, and other courses available in this series.";
	this.navCreditsFull="View the credits for this course.";
	this.navEvalFull="Send us an evaluation of this course.";
	this.navPreferencesFull="View and modify your preferences, such as text size or whether tool tips are displayed.";
	this.navProgrptFull="View which questions you've answered in this course.";
	//this.navProgrptFull="View your progress in this course based on which questions you've answered.";
	this.navReflibFull="Access your reference library.";
	this.navSeriesTranscriptFull="View your scores for all courses in this series.";

// navbar.htm
	this.tabTopics="Course Topics"
	this.tabTopicsOver="View the topics for this course and your current location."
	this.tabIM="Instant Mentoring";
	this.tabIMOver="Get help from your Instant Mentor.";
	this.tabTools="Course Tools";
	this.tabToolsOver="Access additional course features, such as the glossary.";
	this.tabSearch="Search the Course";
	this.tabSearchOver="Search this course for a term or phrase.";
	this.tabHelp="Help"
	this.tabHelpOver="Get help on using this course and navigation shortcut keys.";
	this.tabGripperHelp="Click this gripper to close the feature tabs or drag it to resize them. <br><br>Click on a tab to view its contents.";
	this.tabGripper="Feature Tabs"
	this.tabSearchHelpLabel="Searching This Course";
	this.tabSearchHelp1="Enter a word or phrase to search for course pages that contain all the words, any word, or the exact phrase you entered.";
	this.tabSearchHelp2=" Check the Synonyms box if you want the search to find variants (for example, both singular and plural occurrences) or synonyms of your search terms.";
	this.tabSearchHelp3="<BR><BR>When you click the Search button, links to the found pages are displayed in a separate window. Click a link to go to that page.";
	this.tabClose="Close the Tabs";
	this.tabCloseOver="To close the feature tabs, click either the X button or the tab that is currently open.";
	this.tabEbooks="eBooks Library";
	this.tabPracticeLabs="Practice-Labs";
	this.tabVirtualLabs="Virtual Labs";
//navbarsearch.htm
	this.srhEnter="Enter the words to search for:";
	this.srhAll="All Words";
	this.srhAny="Any Word";
	this.srhExact="Exact Phrase";
	this.srhSyn="Search for Synonyms";
	this.srhButtonText="Search";
//navbarhelp.htm
	this.helpUsing="Using This Course";
	this.helpUsingOver="View help on using this course.";
	this.helpKeyboard="Using the Keyboard";
	this.helpKeyboardOver="View help on using the keyboard.";
	this.helpContact="Contact Technical Support";
	this.helpContactOver="Get help from our technical support staff.";
// printbut.js
	this.keyPrintMac="Press 'Cmd+p' on your keyboard to print article.";
	this.keyPrintPc="Press 'Ctrl+p' on your keyboard to print article.";
	this.clickToPrint="Click Here to Print";
//sainstrc.htm
	this.saInstr1="This Skill Assessment contains questions about the topics covered in the course. ";
	this.saInstr2="You use the buttons shown in the following table to navigate throughout the test:";
	this.click="Click...";
	this.to="To...";
	this.clickToBegin="Click the Begin button to begin the Skill Assessment...";
	this.beginTest="Begin the test.";
	this.beginSa="Begin the Skill Assessment.";
	this.submitAns="Submit your answer.";
	this.viewNext="View the next question.";
	this.noScores="Exit the test. <B>No scores are recorded if you exit the test.</B>";
	this.printScores="View your scores after you answer the last question. Print your scores to ensure you have a permanent record of them.";
	this.saLetters="For multiple-choice questions, you can use the keyboard (A, B, C, etc.) to select your answers, and press Enter to submit. Click the Next Question button or press the N key to go to the next question. "
	this.saInstr2011_1="Use the Start the Skill Assessment button when you're ready to begin.";
	this.saInstr2011_2="Click the Submit button to submit your answer for each question. To view the next question, click the Next Question button.";
	this.saInstr2011_3="To exit the test, click the Back to Course button. <b>No scores are recorded if you return to the course or exit during the Skill Assessment.</b>";
	this.saInstr2011_4="Click the Scores button after you answer the last question to view your scores."; // Print your scores to ensure you have a permanent record of them."
// scoresa.htm
	this.scoresa1="The table below shows your scores for the Skill Assessment and for the course questions. ";
	this.scoresa2="A checkmark (<script>sgif('sapasmal','15','18');</scr" + "ipt>) in the Mastery column indicates that you've scored the mastery level of <script>document.write(masteryPercent)</sc" + "ript>% or better on questions or the Skill Assessment.";
	this.scoresa3="To master the course, you must master all lessons.";
	this.scoresa4="You must answer all questions at least once for a score to be shown for the lesson. To change your score, you must re-take all questions within the lesson. Use the ";
	this.scoresa5="To go directly to a lesson, click the lesson name in the table below.";
	this.scoresaProgrptOver="View a list of questions you have not answered";
	this.scoresaProgrpt="Progress Report</A> to view which questions you've answered.";
// scores_series.htm
	this.scoreSeries="Series";
	this.seriesRH="Series Transcript";
	this.seriesScoresa1="The table below shows your scores for each course in the series";
	this.seriesMouse="You can move your mouse over the column heading for information on interpreting your scores.";
	this.seriesScoresa2="A checkmark (<script>sgif('sapasmal','15','18');</scr" + "ipt>) in the Mastery column indicates that you've completed the course and scored the mastery level of <script>document.write(masteryPercent)</sc" + "ript>% or better on every lesson in that course.";
	this.seriesScoresa3="The Best Score column indicates your best score for the course or for its skill assessment.";
	this.seriesScoresa4="For video-based courses, the Completion column indicates whether you have viewed the course video in its entirety; otherwise, it indicates whether you have answered all questions in the course.";
	this.seriesScoresa5="To master the series, you must master all courses in the series.";
	this.seriesMasteredText="You have mastered this series. To print a Certificate of Mastery, click the Certificate button below.";
	this.seriesNotMasteredText="You have not yet mastered this series.";
	this.seriesCourseNames="Courses";
	this.seriesBestScore="Best Score";
	this.seriesCompletion="Completion";
	this.seriesOpenCertificate="Print a Certificate of Mastery for this series.";
// scores_series_fs.htm
	this.fs_seriesScoresa1="The table below shows your progress for each course in the series";
	this.fs_seriesMouse="You can move your mouse over the column heading for information on interpreting your scores.";
	this.fs_seriesScoresa2="A checkmark (<script>sgif('sapasmal','15','18');</scr" + "ipt>) in the Mastery column indicates that you've completed the course and, for the Practice Exam, scored the mastery level of <script>document.write(masteryPercent)</sc" + "ript>% or better.";
	this.fs_seriesScoresa5="To master the series, you must complete all courses in the series and pass the Practice Exam.";
	this.fs_seriesMasteredText="You have mastered this series. To print a Training Record, click the Print Your Training Record button below.";
	this.fs_seriesBestScore="Exam&nbsp;Score";
	this.fs_seriesOpenRecordOfTraining="Print Your Training Record for this series.";

// scores_course.htm
	this.scoresCourse1="The table below shows your scores for the questions you've answered within this course. Lesson scores are shown after you've answered <B>all</B> questions in the lesson. You can move your mouse over the column heading for information on interpreting your scores.";
	this.scoreScore="Score";
// scores_quiz.htm
	this.scoresQuiz1="The table below shows your scores for the quizzes you've taken in this course. You can move your mouse over the column heading for information on interpreting your scores.";
	this.scoresQuiz2="A checkmark (<script>sgif('sapasmal','15','18');</scr" + "ipt>) in the Mastery column indicates that you've scored the mastery level of <script>document.write(masteryPercent)</script>% or better on a quiz.";
	this.scoresQuiz3="To master the course, you must view the course in its entirety and  master all quizzes.";
	this.scoreQuizTitle="Quiz";
	this.scoreOpenQuiz="Take the Quiz";
	this.quizMasteredWithCompletion="<b>Congratulations</b>, you have completed viewing the course and mastered the quizzes in this course. Click the Certificate button below to view your Certificate of Mastery.";
	this.quizCompletionNoMastery="<b>Although you've completed viewing the course, you have not yet completed the quizzes at a mastery level.</b> Complete the course quizzes at a mastery level to receive a Certificate of Mastery.";
	this.quizMasteredNoCompletion="<b>Although you have completed the quizzes at a mastery level, you have not yet completed viewing the course in its entirety.</b> View the entire course to receive a Certificate of Mastery.";
	this.quizNoCompletionOrMastery="<b>You have not yet viewed the entire course or completed the quizzes at a mastery level.</b> Finish viewing the course and complete the quizzes at a mastery level to receive a Certificate of Mastery.";
	this.openQuiz="Click a quiz title to open the quiz.";
// scoreend.htm
	this.scoreend1="You can use your scores to determine which course topics you want to focus on. To <B>start a specific lesson</B>, click the lesson name in the table below.";
// Score table headings
	this.scoreCourse="Course";
	this.scoreCombined="Score";
	this.scoreName="Name";
	this.scoreMastery="Mastery";
	this.scoreLesson="Lesson Name";
	this.scoreSA="Skill Assessment";
	this.scoreFirst="First Try";
	this.scoreBest="Best Try";
	this.scoreThis="This Try";
	this.scoreOverall="Overall Score";
	this.scoreStatus="Here are your scores.";
	this.scoreRH="Your Scores";
// scoreceu.htm
	this.ceus="Continuing Education Units"
	this.ceusVerify="Scores Verification Form";
	this.ceusScore1="The table below shows your scores for the skill assessment and within the course. Please ensure that your score for each lesson in either the skill assessment or the course meets the requirements of the institution to which you are applying. Your name and signature are <B>required</B> below.";
	this.ceusCertify="I certify that I have achieved the scores shown above.";
	this.ceusName="Name (please print):___________________________________________";
	this.ceusSignature="Signature:______________________________________ Date:_________";
// scoreacc.htm
	this.scoreaccHere="Here are your scores."
	this.scoreaccReq="Score Required for Mastery:";
	this.scoreaccStudent="Student";
	this.scoreaccFirst="Skill Assessment First Try";
	this.scoreaccThis="Skill Assessment This Try";
	this.scoreaccBest="Skill Assessment Best Try";
	this.scoreaccCert="Click here</a> or press C to print a certificate of mastery.<BR>Instructions: The certificate will open in a new window. Press Ctrl + P to print.";
	this.scoreaccPrint="Print a certificate of mastery."
	this.scoreaccReturn="Return to the previous page.";
	this.scoreaccClick="Click here</A> or press B to return to the course.";
	this.scoreaccClose="After saving or printing this page, <A HREF=\"javascript:window.close()\" onMouseover=\"self.status='Close this window'; return true\">click here</A> or press X to close this window.";
// access.js and access-sa.js
	this.acc="Accessibility";
	this.accLinkText_zs="This version of the course is designed for use with a screen-reading program.<BR>\n"
		+ "<BR>When you are done using this course, <A href=\"javascript:navigate('exit')\" title=\"Exit this course\" tabindex=\"7\">click here</A> or press X to exit this course and have your progress recorded.<br><br>";
		+ "<UL type=\"compact\">\n"
		+ "<LI><A href=\"javascript:navigate('achelp')\" title=\"View the Accessibility Help files\" tabindex=\"2\">Click here or press H to view information about using this course</A></LI>\n"
	this.accLinkText ="This version of the course is designed for use with a screen-reading program.<BR>\n"
		+ "<UL type=\"compact\">\n"
		+ "<LI><A href=\"javascript:navigate('achelp')\" title=\"View the Accessibility Help files\" tabindex=\"2\">Click here or press H to view information about using this course</A></LI>\n"
// Removed by JAR 12/3/7 		+ "<LI>[<A href=\"#skipped\" title=\"Skip the course tool links\" tabindex=\"1\">Skip the course tool links</A>]</LI>\n"
	this.accGlossary="<LI><A href=\"javascript:navigate('glossary')\" title=\"View the course glossary\" tabindex=\"3\">Click here or press G to open the Glossary</A></LI>\n";
	this.accEncyclopedia="<LI><A href=\"javascript:navigate('encyclopedia')\" title=\"View the course encyclopedia\" tabindex=\"3\">Click here or press E to open the Encyclopedia</A></LI>\n";
	this.accLinkTextSA = "<LI><A href=\"javascript:navigate('sa')\" title=\"Take the Skill Assesment\" tabindex=\"4\">Click here or press A to take the Skill Assessment (opens in a new window)</A></LI>\n";
	this.accLinkTextScores = "<LI><A href=\"javascript:navigate('scores')\" title=\"View your scores\" tabindex=\"5\">Click here or press S to view your scores</A></LI>\n";
	this.accLinkTranscript = "<LI><A href=\"javascript:navigate('transcript')\" title=\"View your series transcript\" tabindex=\"6\">Click here or press T to view your series transcript</A></LI>\n";
	this.accLinkTextTech= "<LI><A href=\"javascript:navigate('techsupport')\" title=\"Contact Technical Support\" tabindex=\"7\">Click here or press C to contact technical support (opens in a new window)</A></LI>\n";
	this.accLinkTextExit = "<LI><A href=\"javascript:navigate('exit')\" title=\"Exit this course\" tabindex=\"7\">Click here or press X to exit this course</A></LI>\n</UL>\n";
	this.accLinkTextQuestion = "Note that the links to questions throughout this course open a new browser window. When you have finished answering a question, close the question window to return to the course.\n"
	this.accSubmit = "Submit Your Answer";
	this.accQuestion="Question";
	this.goNextQuestion="Go to the Next Question";
	this.accActivityLabel="* Activity";
	this.accActivityIntro="The important concepts are:";
	this.correctTries="Correct tries";
	this.incorrectTries="Incorrect tries";
	this.completedActivity="You have completed this activity.";

// acsainst.htm
	this.accsaSA="Skill Assessment";
	this.accsaPress="Press A  to take the Skill Assessment...";
// glossary_ac.htm
	this.glossaryHeading="<h2>Glossary</h2>";
	this.glossaryShowAll="Show All Terms";
// certificate.htm
	this.certPrintStatus="Select Print from the File menu to print your certificate.";
	this.certCertify="This is to certify that";
	this.certMastered="has mastered the course";
	this.certSeriesMastered="has mastered the series";
	this.certDate="Date";
	this.certTitle="Certificate of Mastery";
	this.certPrintTitle="Printing a Certificate of Mastery";
//qeval.htm
	this.qevalTitle="Question Comments";
	this.qevalText="We strive to make our questions as clear and as accurate as possible. Please let us know if you think that this question can be improved in any way.<BR>&nbsp;<BR><b>How would you rate this question?</b>";
	this.qevalInstructions="We strive to make our questions as clear and as accurate as possible. Please let us know if you think that this question can be improved in any way.";
	this.qevalRate="How would you rate this question?";
	this.qevalPoor="Poor";
	this.qevalExcellent="Excellent";
	this.qevalComments="Your comments or suggestions:";
	this.qevalThanks="Thank you for helping us make our courses better!";
	this.qevalSubmit="Submit Your Comments";
	this.qGoodText="We've received your comments.<BR>&nbsp;<BR>Thank you for sharing your comments with us!";
	this.qBadText="We're sorry, your comments were unable to be submitted.<BR>&nbsp;<BR>We value your comments, so please try again in a moment.";
// flash_install.htm
	this.flashTitle="Installing the Flash Web Player";
	this.flashHeading="Using Learning Activities and Product Simulations";
	this.noAltGifsFlashHeading="This Course Is Best Viewed Using the Flash Web Player";
	this.noAltGifsFlashText="This course includes multimedia designed to be viewed using the Flash Web Player version <b>";
	this.noAltGifsFlashText2="</b> or higher.";
	this.noAltGifsFlashContinue="If you prefer not to install the player, you can click the Continue button to view the course without multimedia elements.";
	this.flashText="Some learning activities and product simulations in this courses require the Flash Web Player version <b>8</b> or higher.";
	this.flashContinue="If you prefer not to install the player, click the Continue button.";
	this.flashCurrent1=" You currently have version";
	this.flashCurrent2="installed.";
	this.flashInstall="To install the Flash Web Player, click the Get Adobe Flash<font size='-1'><sup>&reg;</sup></font> button, and follow the installation instructions on the Adobe website.";
	this.flashAfterInstall="After the Flash player is installed, close the Flash window and click the &quot;Continue&quot; button.";
	this.flashAfterInstallCourse="After the Flash player is installed, you can close this window and return to the course.";
	this.flashThanks="Thanks. We hope you'll find our courses an enjoyable learning experience.";
	this.flashPg1="This page was designed to be viewed using the Flash Web Player."
	this.flashReload="After the Flash player is installed, close the Flash installation window and <a href=\"javascript:location.reload()\">click here</a> to refresh this page."
	this.flashContinuePg="You can continue taking the course without installing the Flash Web Player.";
	this.flashYahooNote="<b>Note:</b> We recommend that you do <b>not</b> install the Yahoo browser toolbar, which may prevent this course from functioning properly.";
	//this.flashYahooNote="<b>Note:</b> We recommend that you do <b>not</b> install the Yahoo browser toolbar, which may be offered with the Flash player, because it can prevent this course from functioning properly.";

// title_page and title_page_nosa.htm
	this.titleWelcome="Welcome to"; //Leave empty to remove welcome;
	this.titleSainstrCB="To take the Skill Assessment from within the course, simply click the Tools button and then click Skill Assessment on the Tools page.";
	this.titleSainstr="To take the Skill Assessment from within the course, simply click the Course Tools tab and then click Take the Skill Assessment.";
	this.titleSainstr2011="To take the Skill Assessment from within the course, simply click Course Tools and then click Skill Assessment.";
	this.titleRich="We hope this is a rich, interactive learning experience for you.";
	this.titleReplay="We hope this instructor presentation is a valuable learning experience for you.";
	this.titleInstr="You can now begin the course or take a <B>Skill Assessment</B>, which consists of questions on topics covered in this course. Taking the Skill Assessment first allows you to determine which topics in the course you should focus on.";
	this.titleInstrNosa="To begin the course, click the Begin the Course button.";
	this.titleTakeSaNow="Take the Skill Assessment now";
	this.titleTakeCourse="Go to the course";
	this.titleRh="Welcome";
	this.titleStatus="Welcome to this course";
// sa_required.htm
	this.saReq1="Your Course Administrator has required that you take this Skill Assessment before you take the course.<BR>&nbsp;<BR>";
	this.saReq2="The results of this Skill Assessment will show your proficiency in the topics covered in the course.<BR>&nbsp;<BR>";
	this.saReq3="To continue, click the arrow in the lower right corner of this page.";
// abtacc.htm
	this.abtaccTitle="Accessibility";
	this.abtaccText="Text-only versions of our courses, designed for use with a screen-reading program, are available for visually impaired users. If you wish to use the text-only version of our courses, click <B>Text Only</B> on the log on page, and then enter your user ID and password from the Accessibility Log On page.<BR>&nbsp;<BR>";
	this.abtaccLink1="<B>Click here</B>";
	this.abtaccLink2="to open the text-only version of this course.";
// textonly.htm
	this.textonlyTitle="Printable Version";
	this.textonlyText="You can print this text-only version of this course for future reference.";
	this.textonlyText2="<BR>&nbsp;<BR> If you wish to use the accessible version of our courses, which includes questions in text-only format, click <B>Text Only</B> on the log on page, and then enter your user ID and password from the Accessibility Log On page."
	this.textonlyLink1="<B>Click here</B>";
	this.textonlyLink2="to open the printable version of this course.";
// certificate_instructions.htm
	this.certInstr="<B>Congratulations!</B> To print a certificate, click the style of certificate you'd prefer:";
	this.certClassic="Portrait";
	this.certJazzy="Landscape";
	this.certOpenClassic="Open the certificate in portrait orientation";
	this.certOpenJazzy="Open the certificate in landscape orientation";
	this.certPrint="<b>Printing Tips: </b>If you select the landscape certificate, select Landscape orientation in your printer dialog box before printing.";
	this.certifLandscapeMessage="Be sure to select Landscape orientation in your printer dialog box before printing this certificate.";
	this.certInstr_custom="<B>Congratulations!</B> You've mastered this course. <a href=\"javascript:openCustomCertificate()\">Click here</a> to print a certificate of mastery.";
	this.certPrint_custom="<b>Printing Tips: </b>Select Landscape orientation in your printer dialog box before printing.";
// glossary
	this.glosSymbols="Symbols";
	this.glosNoMatch="No matches for";
	this.glosFoundPlural="were found";
	this.glosFoundSingular="was found";
	this.glosOne="1 occurrence of";
	this.glosOccurrences= "occurrences of";
	this.glosMsgSpecialChars="You cannot use the following special characters in your search term:";
	this.glosAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	this.glosTitle="Glossary";
	this.glosSearch="Search";
	this.glosPrint="Print";
	this.glosEnterTerm="Please enter a word or phrase to search for.";
	this.glosShowTerms="Search terms and definitions";
	this.glosTermsOnly="Search terms only";
	this.glosDisplayDefinitions="Display Definitions";
	this.glosHideDefinitions="Hide Definitions";
	this.glosClickHide="Click a term to hide its definition or click Hide Definitions to hide all definitions.";
	this.glosClickDisplay="Click a term to display its definition or click Display Definitions to display all definitions.";
	this.glosGoTop="Go to top";
	this.encyclopediaTitle="Encyclopedia";
	this.encShowTerms="Search terms and entries";
	this.encDisplayEntries="Display Entries";
	this.encHideEntries="Hide Entries";
	this.encClickHide="Click a term to hide its entry.";
	this.encClickDisplay="Click a term to display its entry.";
	this.resourcesTitle="Other Resources";
	this.resourcesDefaultIntro="Click the links below to view additional information.";
	this.resourcesPrintableVersion="Printable Version of This Course";
	this.resourcesPrintableVersionShort="Printable Version";
	this.resourcesViewRecordOfTraining="View Your Record of Training";
	this.resourcesRecordOfTraining="Record of Training";
	this.resourcesViewSeriesTranscript="View Your Series Transcript";
	this.resourcesSeriesTranscript="Series Transcript";
	this.resourcesPhoenix="Obtain College Credit";

// preferences.htm
	this.prefCustomize="Customize your e-learning experience.";
	this.prefTitle="My Preferences";
	this.prefInstr="Customize your e-Learning experience using the options below.";
	this.prefMulti="Multimedia";
	this.prefIntros="Enable animated Lesson Introductions";
	this.prefWhatsThis="What's&nbsp;this?";
	this.mouseWhatsThis="Click to view information about this option";
	this.prefAudio="Enable instructional audio";
	this.prefEffects="Enable sound effects";
	this.prefTransitions="Enable smooth page transitions";
	this.prefTextTitle="Text Size";
	this.prefTextSmall="small";
	this.prefTextMedium="medium (preferred)";
	this.prefTextLarge="large";
	this.prefGraphicsTitle="Graphics";
	this.prefGraphics="Choose the graphical theme for your courses.";
	this.prefGraphicsNone="None";
	this.prefGraphicsPeople="People";
	this.prefGraphicsArt="Art";
	this.prefGraphicsTextures="Textures";
	this.prefGraphicsNature="Nature";
	this.prefGraphicsSpace="Space";
	this.prefGraphicsTechno="Techno";
	this.prefFindTitle="Find-A-Word Options";
	this.prefFindInstr="Find-A-Word allows you to quickly search for more information on a word or phrase. Choose the options to be displayed when you select a word or phrase within a course."
	this.prefFindGlossary="Search the Glossary";
	this.prefFindCourse="Search the Course";
	this.prefFindReflib="Search My Reference Library";
	this.prefFindWeb="Search the Web";
	this.prefFindDictionary="Search the Dictionary";
	this.prefInterface="Interface";
	this.prefToolTips="Show tool tips";
// exitcourse.htm
	this.exitCourse="Exiting the course.<br>Please wait...";
	this.exitTitle="Exiting the Course";
	this.exitTheRightWay="If you continue, you will lose the progress you have made.\n\nTo save your progress, click the \"Exit\" button at the bottom of the course window."
	this.exitTheRightWay2011="If you continue, you will lose the progress you have made.\n\nTo save your progress, click the \"Exit\" link in the top right corner of the course window."
	this.exitCourseSuccess="Your progress has been saved. It is now safe to close this window.";
// mouseover text
	this.mouseNext="Go to the next page";
	this.mouseSim="Simulate performing a task";
	this.mouseRelated="View related information";
	this.mouseSource="Return to the source page";
	this.courseProgress="Course Location";
	this.mouseIntro="This lesson describes what you will learn in this course.";
	this.mouseReview="This lesson gives you an opportunity to review the techniques and principles you have learned in this course.";
	this.mouseObj="After completing this lesson, you should be able to";

	this.popupBlockerMsg="You may have a popup window blocker running. This may prevent you from using some features in the courses.";
	this.seqInstruction="Click the steps in order or use the step buttons to assign a sequence to each task.";
	this.seqProcessInstruction="Click the events in order or use the buttons to assign a sequence to each event.";
	this.matchInstruction="Click the buttons to assign each item a corresponding number.";
	this.instructions="Instructions";
	this.clicklist_instructions="Click the items in the list to view additional information.";
	this.firstC2c="Throughout this course, <FONT class=\"c2c\">highlighted text</FONT> gives you instructions on where to click the image to continue. Try it now if you'd like.";
	this.copyCode="Copy code to clipboard";
	this.editHtml="Edit this code";
	this.showBrowser="Display this code in a browser window";
	this.moveMouse_instructions="Move your mouse over the image to view additional information.";
	this.clickImage_instructions="Click the image to view additional information.";
	this.clickCode_instructions="Click the code to view additional information.";
	this.moveBoxInstructions="<b>Note:</b> Click and drag the top bar of this box to move it to another location.";
	this.showHtmlInstructions="You can see how this HTML code looks on a Web page, or modify it yourself, by clicking the Display, Edit, and Copy buttons located in the lower right corner.";
	this.showHtmlInstructionsFF="You can see how this HTML code looks on a Web page, or modify it yourself, by clicking the Display or Edit buttons located in the lower right corner.";
	this.dropTextInstructions="Click the underlined fields to select your answer for each.";
	this.dropTextInstructionsAcc="Type the correct answer in each text field and then click Submit Your Answer.";
	this.exitWarning="To save your course progress, always <b>use the Exit button</b> in the navigation bar to exit the course.";
	this.exitWarning2011="To save your course progress, always <b>use the Exit link</b> in the upper right corner to exit the course.";

	//Detect.htm
	this.detectPageHeading="Checking Course Requirements...";
	this.detectInstr1="If this page does not change in a few seconds";
	this.detectInstr2="click here";

	// Food Safety Style
	this.playSpanish="Audio en Español";
	this.assessment="Assessment";
	this.asmntStartText="The purpose of this Assessment is to test you on the information covered in this lesson. You must pass this test in order to complete this lesson.<br><br>Click the Start the Assessment button to begin the Assessment.";
	this.asmntRetryText="You have not answered all of the questions in the Assessment correctly. You will now be given a chance to retry the questions that you got wrong.<br><br>Click the Retry the Assessment button to begin.";
	this.asmntFailText="You have not answered all of the questions in the Assessment correctly.<br><br>Click the Course Menu button to return to the course menu. Topics in which you missed questions are marked. You should review these topics before taking the Assessment again.";
	this.asmntPassText2011="Well done! You have answered all of the questions in the Assessment correctly.<br><br>Click the Course Menu button to return to the course menu."
	this.asmntPassText="Well done! You have answered all of the questions in the Assessment correctly.<br><br>Click the Course Menu button to return to the course menu."
	this.asmntPassTextLink="Well done! You have answered all of the questions in the Assessment correctly.<br><br><a href=\"javascript:fsShowPrompt('other_resources')\">Click here</a> to view your training record.<br><br>Click the Course Menu button to return to the course menu."
	this.accAsmntStartText="The purpose of this Assessment is to test you on the information covered in this lesson. You must pass this test in order to complete this lesson.<br><br>";
	this.accAsmntStartLink="Start the Assessment";
	this.accAsmntRetryText="You have not answered all of the questions in the Assessment correctly. You will now be given a chance to retry the questions that you got wrong.<br><br>Click Retry the Assessment or press Enter to begin.";
	this.accAsmntRetryLink="Retry the Assessment";
	this.accAsmntFailText="You have not answered all of the questions in the Assessment correctly.<br><br>You should review this lesson before taking the Assessment again.<br><br>Click Close This Window or press Enter to return to the course.";
	this.accAsmntPassText="Well done! You have answered all of the questions in the Assessment correctly and have successfully completed this lesson.<br><br>Click Close This Window or press Enter to return to the course.";
	this.accOpenAssessment="Open the Assessment for Lesson ";
	this.accAccInstr1="You can use the following keystrokes to navigate throughout the Assessment:";
	this.accAccInstr2="A - E: Select the corresponding answer letter";
	this.accAccInstr3="Enter: Submit your answer to a question and, after you've answered the question, go to the next one.";
	this.accAccInstr4="Do not close this window until after you complete the Assessment.";
	this.accAccInstr5="Click Start the Assessment or press Enter to begin the Assessment.";
	this.accAttempted="Attempted, not passed";

	this.examStartText1="This Practice Exam contains";
	this.examStartText2="questions chosen at random about the information covered in this series. You must pass this exam to complete the series.<br><br>Click the Start the Exam button to begin the exam.<br><br><b>Note:</b> Your progress in the exam will not be saved if you exit the course or return to the Course Menu before completing it.";
	this.examReviewCourse="Course";
	this.examReviewLesson="Lesson";
	this.examReviewTopic="Topic";
	this.examIncorrect="Incorrect";
	this.accExamStartText2="questions chosen at random about the information covered in this series. You must pass this exam to complete the series.<br><br>Click Start the Practice Exam to begin the exam.<br><br><b>Note:</b> Your progress in the exam will not be saved if you close this window before completing the exam.";
	this.accExamStartLink="Start the Practice Exam";
	this.accExamReview="Review";
	this.examAllowReviewText1="Well done! You've passed this Practice Exam. Your score is ";
	this.examAllowReviewText2="%.<br><br>If you'd like to review the questions that you missed, click the Review button.";
	this.examReviewText="Below are the questions you missed in the exam. You should review the topics for these questions before taking the exam again.";
	this.examFailText="You did not pass this Practice Exam.<br><br>If you'd like to review the questions that you missed, click the Review button. You should review the courses shown before taking the exam again.";
	this.examPassText="Well done! You have answered all of the questions in the Practice Exam correctly.<br><br>Click the Course Menu button to return to the course menu."
	this.fsClickLesson="Click a lesson title to view the topics in that lesson, and then click a topic title to access the topic.";
	this.fsMustComplete="You must complete each lesson before you can access the subsequent lessons.";
	this.fsCourseMenu="Course Menu";
	this.fsTask="Task";
	this.fsProject="Project";
	this.fsPracticeExam="Practice Exam";
	this.fsAboutExam="About This Exam";
	this.fsAboutLesson="About This Lesson";
	this.fsCourseLength="Course Length:</b><br>&nbsp;&nbsp;Approx.";
	this.fsCourseLength2011="<b>Course Length:</b>&nbsp;&nbsp;Approx. ";
	this.fsViewOrientationTitle="View the Course Orientation?";
	this.fsViewOrientation="Would you like to view the course orientation?";
	this.fsViewHelpTitle="View the Course Tutorial?";
	this.fsViewHelp="Would you like to view the course tutorial?";
	this.statusPage="Page";
	this.statusLesson="Lesson";
	this.statusOf="of";
	this.toolsGlossary="Glossary";
	this.toolsEncyclopedia="Encyclopedia";
	this.toolsOtherResources="Other Resources";
	this.toolsCourseSummary="Course Summary";
	this.toolsContributors="Contributors";
	this.toolsUsingCourse="Using This Course";
	this.actNotCorrect="That's not correct. ";
	this.actCorrect="That's correct. ";
	this.courseEval="Course Evaluation";
	this.courseEvalMessage="Click Course Evaluation in the Course Tools section to let us know what you think of this course.";
	this.fsCongrats1="Congratulations";
	this.fsCongrats2="you have successfully completed this course.";
	this.takeAssessment="Take the Assessment?";
	this.completeAssessment="You can complete this lesson by passing the Assessment. Do you want to take the Assessment for this lesson now?";
	this.contentUnavailable="Content Unavailable";
	this.grayFolders="Gray topics indicate content you cannot access until you complete earlier topics.";
	this.featuresAudio="Audio accompanies each lesson page throughout the course.";
	this.featuresExercises="Exercises allow learners to practice in the actual application being studied."
	this.featuresSims="Simulations teach learners to perform specific tasks in applications through guided, multi-step exercises."
	this.featuresSA="A skill assessment generates a customized learning path based on the results of a pre-test."
	this.featuresGlossary="A glossary provides a reference for definitions of unfamiliar terms.";
	this.techRequirements="P500+ Processor, 128MB of RAM; Windows 2000, 2003, XP, Minimum screen resolution 800x600, Internet Explorer 5.5 or higher; Windows Media Player 9.0 or higher; Flash 8.0 or higher; 56K minimum connection; broadband (256 kpbs or higher) connection recommended; Javascript, DHTML and cookies enabled; Sound card with speakers or headphones strongly recommended.";
	this.otherCourses="Other Courses in This Series";
	this.synopsis="Synopsis";
	this.lessonsAndObjectives="Lessons and Objectives";
	this.review="Review"; // as it is used in "Course in Review";
	this.courseIntroduction="Course Introduction";
	this.hours="hours";
	this.minutes="minutes";
	this.oneHour="1 hour";
	this.coursesInclude="courses include the following";
	this.playAudio="Play Audio";
	// Menu Icon mouse overs
	this.fsmenuIconAvailable="Available";
	this.fsmenuIconNotAvailable="Not Yet Available";
	this.fsmenuIconCompleted="Completed";
	this.fsmenuIconPartial="Partially Completed";
	this.fsmenuIconFailed="Failed";
	this.fsmenuIconReview="Review Recommended";
	this.fsViewSeriesTranscriptMsg="Click Other Resources in the Course Tools section to view your progress in this series.";
	this.fsViewTrainingRecordMsg="Click Other Resources in the Course Tools section to view your training record.";
	this.fsViewTrainingRecordMsgLink="<a href=\"javascript:fsShowPrompt('other_resources')\">Click here</a> to view your training record.";
	this.fsViewCertificateMsg="Click Other Resources in the Course Tools section to print a certificate of mastery.";
	this.fsLessons="Lessons";
	this.fsTopics="Topics";

// podcast.htm -- download podcast instructions
	this.podcastInstructionsAll="Welcome to MindLeaders m-Learning, learning that moves with you! This page allows you to download the full audio of this course as an MP3 file. MP3 files can be listened to on your computer, moved to your iPod&reg; or other MP3 player, or copied to a CD.";
	this.podcastInstructionsAll2="Please note that this will not allow you to view the graphics and video or take any of the interactions, assessments, or exercises. Please come back to the website if you'd like to take any of those portions of the course.";
	this.podcastInstructionsOts="If you'd like a Certificate of Mastery after listening to this course, return to the course on the website and answer all the questions or take the skill assessment.";
	this.podcastInstructionsBsv="If you'd like a Certificate of Mastery after listening to this course, return to the course on the website and click the Quiz button on the video page.";
	this.podcastDownloadText="Click the Download Audio button to download the MP3 file. Save this file anywhere on your computer.";
	this.podcastCopyrightText="Copyright &copy; 2007 Mindleaders, Inc.";

// Pre and Post Test
	this.pretest="Pretest";
	this.preTitle="What should you study?";
	this.preStart1="Here you're going to find out what you already know about ";
	this.preStart2="You'll be asked "
	this.preStart3=" questions, and you'll be told which topics you need to study.";
	this.preStart4="If you haven't yet gone through a <i>What should you study?</i> topic, you should click the Course Tools button below and use the course help to gain an idea of what to expect.";
	this.preStart5="Click the Start the Assessment button to begin.";
	this.preDone1="Congratulations &#151; You have finished the questions for ";
	this.preDone2="Based on your performance, you should study the following topics in this section:";
	this.preDonePass="Your results suggest that you don't need to study this material, so you can move onto the next section. However, you still might find it useful to go through this section to review your skills, so you're doubly sure you've covered all the material for the exam. You'll probably even pick up some new tips!";
	this.prePrint="If you like, you can print out this list for reference.";
	this.postTitle="How much did you learn?";
	this.postStart1="It's time to see how well you learned the material in ";
	this.postStart2="You'll be asked ";
	this.postStart3=" questions, and you'll get feedback for each one as you go through them. Once you've finished, your overall score will be displayed.";
	this.postStart4="Click the Start the Assessment button to begin.";
	this.postDoneCongrats="Congratulations - you've finished the questions for ";
	this.postDoneScore="Your score is: ";
	this.postDoneOutOf=" out of ";
	this.postDoneFail="Based on this, it would be a good idea to go back over the material in this section.";
	this.postDonePass="";
	this.postDoneNote="Note: This score shows only how well you have learned the material in this section; it does <b>not</b> make up part of an ECDL certificate.";
	this.postAttempt1="This is your";
	this.postAttempt2=" attempt"
	this.postScoresTitle="Results Summary";
	this.postScoresLesson="Section";
	this.postScoresNoItems="Number of Items";
	this.postScoresAttempts="Number of Attempts";
	this.postScoresScore="Your<br>Score";
	this.postScoresOutOf="out of";
	this.ordinalWords="first,second,third,fourth,fifth,sixth,seventh,eighth,ninth";
	this.viewScores_tf="View your results.";
	this.ecdlNotice="<br><br><div style=\"font-size: 9pt;\">This training, which has been approved by ECDL Foundation, includes exercise items intended to assist Candidates in their training for an ECDL Certification Programme.  These exercises are not ECDL Foundation certification tests.  For information about authorised Test Centres in different national territories, please refer to the ECDL Foundation website at <a href=\"http://www.ecdl.org\" target=\"_blank\">www.ecdl.org</a>.</div>";
	this.postDoneNote="";

// Page titles
	this.aboutun="About This Unit";
	this.acctop="Accessibility";
	this.certitle="Print a Certificate";
	this.ceus="Continuing Education Units (CEUs)";
	this.ciscoobj="Cisco Exam Objectives";
	this.decpoint="Decision Points";
	this.doit="Do It";
	this.exer="Try it<span class=exerciseNum> &#151; Exercise <num></span>";
	this.mcsaobj="MCSA Exam Objectives";
	this.mcseobj="MCSE Exam Objectives";
	this.obj="Objectives";
	this.sainstr="Instructions";
	this.sascrtit="Scores";
	this.showme="Show Me";
	this.summary="Summary";
	this.term="New Term";
	this.think="Think&nbsp;About&nbsp;It";
	this.thinkit="Think&nbsp;About&nbsp;It";
	this.welcome="Welcome";
	this.cyoaTitle="Decision Points";

	this.copyrightNotice="MindLeaders, Inc. All Rights Reserved.";
	this.exitPrompt="Are you sure you want to exit?";
	this.exitPromptTitle="Exit?";
	this.exitLink="Exit";

// Third Force ECDL
	if (parentExists && typeof(parent.coursewareHandler) !="undefined" && parent.coursewareHandler.isTfCourse)
	{
		this.goMenu="Go to the module menu";
		this.fsClickLesson="Click a section title to view the topics in that section, and then click a topic title to access the topic.";
		this.fsCourseMenu="Module Menu";
		this.exitPrompt="Are you sure you want to exit this module?";
		this.exitPromptTitle="Exit This Module?";
		this.exploreShowmeInstructions="If you want the areas explained to you, click the <b>Show Me</b> button on the navigation bar.";
	}
	
// Alcohol Safety, entry pages and fsmenu.htm
	this.exam="Exam";
	this.takeExam="Take the Exam";
	this.viewExamCertificate="Print Your Certificate";
	this.trusteLogo="TRUSTe Certified Privacy";
	this.privacyPolicy="Privacy Policy";
	this.viewFile="View the file.";
	this.fsCongratsWithExam="you have successfully completed this course and exam.";

// Design 2011
	// On-page button text
	this.btnSa="Take the Skill Assessment";
	this.btnBeginCourse="Begin the Course";
	this.exer2011="<div class=\"title-course\">Try It</div><div class=\"subtitle-course\">Exercise <num></div>";
	this.callout="Don't forget that you can take a Skill Assessment, view your scores, view the Glossary, and more from the Course Tools menu.";
	this.calloutNosa="Don't forget that you can view the Glossary , view a printable version, and more from the Course Tools menu.";
	this.glosDisplayDefinitions2011="Display all definitions";
	this.glosHideDefinitions2011="Hide definitions";
	this.glosClickHide2011="Click a term to hide its definition.";
	this.glosClickDisplay2011="Click a term to display its definition.";
	this.glosClearResults="clear results";
	this.comment="Have a comment?";
	this.saPromptTitle="Exit the Skill Assessment?";
	this.saPromptText="If you exit the Skill Assessment before completing it, your progress will not be saved.<br><br><b>Are you sure you want to exit the Skill Assessment?</b>";

	this.duiStatus="Status";
	this.duiIntroText="The following table shows progress in this course. ";
	this.duiTitle="Course Progress";
	this.duiClickCert="Click the Certificate button to view the certificate.";
	
	this.fsExamStartText="This exam contains 50 questions about the information covered in this course.<br><br>You must achieve a score of at least ";
	this.fsExamStartText2="% to pass this exam and complete this lesson.<br><br>Click the Start the Exam button to begin the exam.<br><br><b>Note:</b> Your progress in the exam will not be saved if you exit the course or return to the course menu before completing it.";
	this.fsExamPassText="Well done! You've passed this exam with a score of ";
	this.fsExamPassText2="%.<br><br>Click the Course Menu button to return to the course menu.";
	this.fsExamPassText2Link="%.<br><br><a href=\"javascript:fsShowPrompt('other_resources')\">Click here</a> to view your training record.<br><br>Click the Course Menu button to return to the course menu.";
	this.fsExamFailText="You did not pass this exam. You should review the course before taking the exam again.<br><br>Click the Course Menu button to return to the course menu.";
	this.accFsExamStartText="This exam contains 50 questions about the information covered in this course.<br><br>You must achieve a score of at least ";
	this.accFsExamStartText2="% to pass this exam and complete this lesson.<br><br>";
	this.accFsExamPassText2="%.<br><br>Click Close This Window or press Enter to return to the course.";
	this.accFsExamFailText="You did not pass this exam. You should review the course before taking the exam again.<br><br>Click Close This Window or press Enter to return to the course.";
	
	this.fsToolsIntro="Don't forget that you can view the additional resources, such as the glossary, from the Course Tools menu.";
	this.fsMenuInstructions="Click the first topic to begin...";
	this.toolsResources="Resources";

	// Scores 2011 Mastery update
	this.scores2011_1="The table below shows your scores. Move your mouse over the column headings for information on interpreting your scores. ";
	this.scores2011_2="A checkmark (<script>sgif('sapasmal','15','18');</scr" + "ipt>) indicates that you've scored <script>document.write(masteryPercent)</sc" + "ript>% or better on questions or the Skill Assessment for that lesson. ";
	this.scores2011_3="To see a lesson score, you must answer every question in the lesson. To change your score, you must re-take all questions in the lesson. To view which questions you answered, use the ";
	this.scores2011_4="Progress Report</A>.";
	this.scores2011_5="To go directly to a lesson, click the lesson name in the table below. ";
	this.scores2011_M="To earn a certificate, you must score <script>document.write(masteryPercent)</sc" + "ript>% or better on all lessons.";
	this.scores2011_C="To earn a certificate, you must answer all questions in the course. ";
	this.scores2011_CorM="To earn a certificate, you must score <script>document.write(masteryPercent)</sc" + "ript>% or better on all lessons or answer every question in the course. ";
	this.scores2011_CM="To earn a certificate, you must score <script>document.write(masteryPercent)</sc" + "ript>% or better on all lessons, and also answer every question in the course. ";
	this.scores2011_congrats="Congratulations! Click the button below to view your Certificate.";
	this.scores2011_congrats_nocert_M="Congratulations, you have mastered this course.";
	
}

var resStr = new ResourceStrings_en();

function ResourceStrings_bsv()
{
// bsv_title_page.htm
	this.welcome="Welcome";
	this.titleWelcome="Welcome to";
	this.play="Play the Video";
	this.completionWithQuestions="In order to complete this course, you must answer all questions in the quiz, as well as view the video in its entirety. Click the Help button at any time for additional information.";
	this.completionNoQuestions="In order to complete this course, you must view the video in its entirety. Click the Help button at any time for additional information."
// foobar.js
	this.viewIndex="View the Index";
	this.viewTranscript="View the transcript";
	this.viewContributor="View contributor information";
	this.viewReference="View reference material";
	this.viewQuiz="Take a Quiz";
	this.viewFaq="View the FAQ";
	this.viewSlides="View the Slides";
	this.viewCeus="View information about CEUs";
	this.viewOverview="View the program overview";
	this.viewEvaluation="Open the program evaluation";
	this.downloadPodcast="Download the audio version of this course";
	this.close="Close This Window";
	this.viewNextQ="View the next question";
// *detail.htm
	this.hide="Hide this section [X]";
	this.hide2011="Back to slides";
	this.openRefLib="Open your reference library";
	this.poweredRefLib="Powered by Books24x7";
	this.poweredNetLib="Mindleaders Reference Library";
	this.ref="Reference";
	this.refText="Reference materials provide additional information about key concepts in the program. Click on a link to view the reference material.";
	this.refLibText="Reference materials provide additional information about key concepts in the program. Click on a link to view the reference material or to access your reference library.";
	this.refText2011="Reference materials provide additional information about key concepts in the program. <span class=qStem>Click on a link to view the reference material.</span>";
	this.refLibText2011="Reference materials provide additional information about key concepts in the program. <span class=qStem>Click on a link to view the reference material or to access your reference library.</span>";
	this.refLinks="Use the following link to access your reference library.";
	this.copy1="&copy; Copyright 2011 MindLeaders.com, Inc. All Rights Reserved.";
	this.copy2="Product names mentioned in this course may be trademarks or registered trademarks of their respective companies and are hereby acknowledged. All product names that are known to be trademarks or service marks have been appropriately capitalized.";
	this.copy3="Use of a name in this course is for identification purposes only, and should not be regarded as affecting the validity of any trademark or service mark, or as suggesting any affiliation between MindLeaders.com, Inc. and the trademark proprietor.";
	this.copy4="Efforts have been made to make this course as complete and as accurate as possible, but no warranty or fitness is implied.";
	this.index="Index";
	this.indexInstructions="The Index is a list of program highlights that direct you to key concepts and learning objectives in the program. Click on any index link to start playing the video at the spot.";
	this.faq="Frequently Asked Questions";
	this.faqInstructions="FAQ is a list of frequently asked questions related to the subject matter or program. Click on the question to reveal the answer.";
	this.transcript="Transcript";
	this.searchTranscript="Search the Transcript";
// video.js
	this.quiz="Quiz";
	this.confirmQuiz="Would you like to take the quiz now?";
	this.questionsVideo="Questions During the Video";
	this.questionsPop1="In this program, you are asked questions at appropriate places within the video. You can also answer these questions here, ";
	this.questionsPop2="by clicking on the following links:";
	this.popQuestion="Popup Question";
	this.several="several";
	this.qContains1="The quiz contains";
	this.qContains2="questions designed to assess your understanding of the program's topic. If you do not finish the quiz, you will need to start it again from the beginning.";
	this.scores="Your Scores";
	this.seriesTranscript="Series Transcript";
	this.viewTranscript="Click the following button to view your series transcript:";
	this.viewTranscript2="View your series transcript";
	this.viewScores="Click the following button to view your scores:";
	this.viewScores2="View your scores";
	this.searchError="You must supply at least 2 consecutive non-whitespace characters.";
	this.ySearch1="Your search";
	this.ySearch2="did not match any lines in this transcript."
// video.js, quiz page for course w/out quizzes and with podcasts
	this.noQuiz="This course does not include a quiz.";
	this.certificate="Certificate of Mastery";
	this.certificateNotCompletedNoPodcast="To receive a Certificate of Mastery, watch the video in its entirety.";
	this.certificateCompleted="You have completed this course. To receive a Certificate of Mastery, click the following button:";
	this.certificateNotCompletedPodcast="To receive a Certificate of Mastery, watch the video in its entirety.";
	//this.certificateNotCompletedPodcast="To receive a Certificate of Mastery, watch the video in its entirety, or <a href=\"javascript:parent.coursewareHandler.goPage('podcast')\" style=\"text-decoration:underline;\">download and listen the audio version of this course</a>.";
	this.certificateNotCompletedPodcastDownloaded="To receive a Certificate of Mastery, finish watching the video or listening to the audio version of the course.";
	this.printCert="Print a Certificate of Mastery.";
// video.htm
	this.download="Download Slides";
	this.goPrevSlide="Go to the previous slide";
	this.prevSlide="Previous Slide";
	this.goNextSlide="Go to the next slide";
	this.nextSlide="Next Slide";
//bsv_scores.htm
	this.popQuestions="Popup Questions";
	// courses without podcasts:
	this.masteredWithVideo="<b>Congratulations</b>, you have completed this course and answered all questions at a mastery level. Click the Certificate button below to view your Certificate of Mastery.";
	this.masteredVideoNotRequired="<b>Congratulations</b>, you have completed this course at a mastery level. Click the Certificate button below to view your Certificate of Mastery.";
	this.videoNotRequiredNoMastery="<b>You have not yet answered the popup questions and completed the quiz at a mastery level.</b>";// Answer all the popup questions and complete the quiz at a mastery level to receive a Certificate of Mastery.";
	this.videoNoMastery="<b>Although you have viewed the video in its entirety, you have not yet answered the popup questions and completed the quiz at a mastery level.</b>";// Answer all the popup questions and complete the quiz at a mastery level to receive a Certificate of Mastery.";
	this.masteredNoVideo="<b>Although you have answered the popup questions and completed the quiz at a mastery level, you have not yet viewed the video in its entirety.</b>";// Finish watching the video to receive a Certificate of Mastery.";
	this.noVideoOrQuiz="<b>You have not yet viewed the video in its entirety, or answered all popup questions and completed the quiz at a mastery level.</b>";// Finish watching the video, answer all popup questions, and complete the quiz at a mastery level to receive a Certificate of Mastery.";
	// with podcasts:
	//this.completedNotMastered="<b>Although you have viewed the video in its entirety or listened to the audio version, you have not yet answered the popup questions and completed the quiz at a mastery level.</b> Answer all the popup questions and complete the quiz at a mastery level to receive a Certificate of Mastery.";
	this.completedNotMastered="<b>Although you have completed the course, you have not yet answered the popup questions and completed the quiz at a mastery level.</b>";
	this.masteredNotCompleted="<b>Although you have answered all questions at a mastery level, you have not yet viewed the video in its entirety.";// or listened to the audio version of this course.</b> Finish watching the video or <a href=\"javascript:coursewareHandler.goPage('podcast')\">download and listen to the audio version</a> to receive a Certificate of Mastery.";
	this.masteredNotCompletedDownloaded="<b>Although you have answered the popup questions and completed the quiz at a mastery level, you have not yet viewed the video in its entirety.";// or verified that you've listened to the audio version of this course.</b> Finish watching the video or, if you've listened to the audio version, check the box below.";
	this.notMasteredOrCompleted="<b>You have not yet completed the course or answered all questions at a mastery level.</b>";// Finish watching the video or <a href=\"javascript:coursewareHandler.goPage('podcast')\">listen to the course's audio version</a>, and answer all popup questions and complete the quiz at a mastery level to receive a Certificate of Mastery.";
	this.notMasteredOrCompletedDownloaded="<b>You have not yet completed the course or answered all questions at a mastery level.</b>";// Finish watching the video or listening to the audio version of the course. If you've listened to the audio version, check the box below. Then answer the popup questions and complete the quiz at a mastery level to receive a Certificate of Mastery.";

	this.scores1="You can receive a Certificate of Mastery for this course after you've viewed the video in its entirety and mastered the popup questions and quiz.";
	this.scores2="The table below shows your progress on the questions and quiz. Scores are shown after you've answered <B>all</B> the popup and quiz questions.";
	this.scores3=" A checkmark (<SCRIPT>sgif('sapasmal','15','18')</SCR" + "IPT>) in the Mastery column indicates that you've scored the Mastery level of <SCRIPT>document.write(masteryPercent);</SCRIPT>%.";

	this.student="Student";
	this.mastery="Mastery";
	this.questionType="Question Type";
	this.score="Score";
	this.podcastCheckboxText="Check here to indicate that you've listened to the audio version of this course.";
	
	// Scores 2011 Mastery update
	this.scores2011_1="If you’ve taken the course quiz, the table below shows your score. A checkmark (<script>sgif('sapasmal','15','18');</scr" + "ipt>) indicates that you've scored <script>document.write(masteryPercent)</sc" + "ript>% or better. "
	this.scores2011_M="To earn a certificate, you must score <script>document.write(masteryPercent)</sc" + "ript>% or better on the quiz.";
	this.scores2011_C="To earn a certificate, you must view the video in its entirety. ";
	this.scores2011_CorM="To earn a certificate, you must score <script>document.write(masteryPercent)</sc" + "ript>% or better on the quiz or view the video in its entirety. ";
	this.scores2011_CM="To earn a certificate, you must score <script>document.write(masteryPercent)</sc" + "ript>% or better on the quiz, and also view the video in its entirety. ";
	this.scores2011_congrats="Congratulations! Click the button below to view your Certificate.";
	this.scores2011_congrats_nocert_M="Congratulations, you have mastered this course.";

}

var bsvStr = new ResourceStrings_bsv();

function sizeButtons()
{
	// Toolbar button image widths.
	useNewButtons=(parentExists && typeof(parent.coursewareHandler) != "undefined" && parent.coursewareHandler.useNewDesign) ? true : false;
	useNewButtons=useNewButtons || (parentExists && typeof(parent.isDnote) != "undefined" && parent.isDnote && typeof(parent.acro) != "undefined" && parent.acro.substring(0,2) != "c_" ) 
	if (useNewButtons)
	{
		printButtonW=34;
		exitButtonW = 34;
		forwardButtonW=34;
		backButtonW = 44;
		jsBackButtonW = 44;
		saExitButtonW=41;
		audioButtonW = 34;
		replayButtonW = 34;
		closeButtonW = 54;
		backToCourseButtonW=100;
		nextQButtonW=95;
		scoresButtonW=34;
		sabeginW=100;
		imButtonW=66;
		showmeButtonW=68;
		doitpgButtonW=55;
		exploreitButtonW=74;
		quickrefButtonW=73;
		refButtonW=65;
		keyboardButtonW=48;
		menuButtonW=34;
	
		//Question Button widths
		trueW=78;
		falseW=78;
		yesW=78;
		noW=78;
	}
}

printButtonW=48;
exitButtonW = 41;
forwardButtonW=31;
backButtonW = 31;
jsBackButtonW = 31;
saExitButtonW=41;
audioButtonW = 38;
replayButtonW = 64;
closeButtonW = 48;
backToCourseButtonW=102;
nextQButtonW=105;
scoresButtonW=58;
sabeginW=78;
imButtonW=66;
notesButtonW=60;

//Question Button widths
trueW=60;
falseW=60;
yesW=60;
noW=60;

sizeButtons(); //set new button widths

//BSV toolbar button height and widths. Height must be 29 or less.
bsv_buttonHeight=29;
bsv_exitButtonW=34;
bsv_helpButtonW=39;
bsv_indexButtonW=44;
bsv_transcriptButtonW=64;
bsv_contributorsButtonW=76;
bsv_referenceButtonW=65;
bsv_quizButtonW=38;
bsv_faqButtonW=36;
bsv_slidesButtonW=45;
bsv_overviewButtonW=62;
bsv_evaluationButtonW=67;
bsv_openQuizButtonW=95;
bsv_viewScoresButtonW=109;
bsv_viewCertificateButtonW=170;
bsv_ceusButtonW=39;
bsv_viewTranscriptButtonW=170;
imButtonW=66;
bsv_podcastButtonW=34;

// SA buttons (skill.js)
sanextqW=120;
sascrbutW=60;

// Shared gifs with different sizes
function localizedGifSizes()
{
	this.count = 0;
	this.gifs = new Object();
	this.add = add;
	function add(sharedGifSize)
	{
		this.gifs[++this.count] = sharedGifSize;
	}
}
function sharedGifSize(name,height,width)
{
	this.name=name;
	this.height=height;
	this.width=width;
}
var sharedGifSizes=new localizedGifSizes();

//For each shared gif with a different height or width add this line: sharedGifSizes.add(new sharedGifSize("lowercase_gif_name","gif_height","gif_width"));
//SAMPLE: sharedGifSizes.add(new sharedGifSize("abtcour","45","353"));
