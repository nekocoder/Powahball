//var rawData="FAILURE";
var source="http://www.powerball.com/powerball/winnums-text.txt&callback=?";

function start()
{
	ScrapeData();
	ParseData();
	InjectData();
}
function ScrapeData()
{
	
}
function ParseData()
{
	
}
function InjectData()
{
	var pageElement = document.getElementById("FilteredContent");
	alert(rawData);
	pageElement.innerHTML=rawData;
}
