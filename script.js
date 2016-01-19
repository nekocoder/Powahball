//var rawData="FAILURE";
var source="http://www.powerball.com/powerball/winnums-text.txt&callback=?";

function Start()
{
	//alert("START");
	ScrapeData();
	ParseData();
	InjectData();
}
function ScrapeData()
{
	//alert("SCRAPING");
}
function ParseData()
{
	//alert("PARSING");
}
function InjectData()
{
	//alert(rawData);
	
	var pageElement = document.getElementById("FilteredContent");
	pageElement.innerHTML=rawData;
}
