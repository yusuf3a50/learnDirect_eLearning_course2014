var agt=navigator.userAgent.toLowerCase();

if (typeof(rootDir) == "undefined") rootDir="/dpec";
if (typeof(localizedSharedDirectory) == "undefined") localizedSharedDirectory=rootDir + "/shared/";
if (typeof(resStr) != "undefined")
{
	keyPrintMac=resStr.keyPrintMac;
	keyPrintPc=resStr.keyPrintPc;
	clickToPrint=resStr.clickToPrint;
}
else
{
	keyPrintMac="Press 'Cmd+p' on your keyboard to print article.";
	keyPrintPc="Press 'Ctrl+p' on your keyboard to print article.";
	clickToPrint="Click Here to Print";
}

function printPage()
{
	//if (navigator.appName == "Microsoft Internet Explorer") printButton.style.visibility="hidden";
	if (window.print) {
		setTimeout('window.print();',200);
	}
	else if (agt.indexOf("mac") != -1) {
		alert(keyPrintMac);
	}
	else {
		alert(keyPrintPc);
	}
}
if (typeof(ThisPage) != "undefined" && ThisPage.getPassedParm("d11") == "1")
{
	printbut="<table width=97%><tr>";
	if (typeof(printInstructions) != "undefined") printbut+="<td align=left><span id=printtip style=\font-size:7pt;\">" + printInstructions + "</span></td>";
	printbut+="<td align=right><div id=\"printButton\" class=printbut onclick=\"javascript:printPage();\"";
	printbut+=" onmouseover=\"this.style.backgroundPosition='-48px -24px';\" onmouseout=\"this.style.backgroundPosition='-48px 0px';\" title=\"Print\"></div>";
	printbut+="</td></tr></table>";
}
else
{
	printGif=localizedSharedDirectory + "images/btn-print-page.gif";
	printbut="<div id=\"printButton\">";
	printbut = printbut + "<a href=\"javascript:printPage()\">";
	printbut = printbut + "<img border=0 width=\"115\" height=\"20\" src=\"" + printGif+ "\" title=\"" + clickToPrint + "\">";
	printbut = printbut + "</a>";
	if (typeof(printInstructions) != "undefined") printbut+="&nbsp;&nbsp;<span id=printtip style=\font-size:7pt;\">" + printInstructions + "</span>";
	printbut=printbut+"</div>";
}
document.write(printbut);
