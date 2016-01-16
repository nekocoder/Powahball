var rawData="FAILUE";
var source="http://www.powerball.com/powerball/winnums-text.txt&callback=?";

function start()
{
		ScrapeData();
		ParseData();
		InjectData();
}
function ScrapeData()
{
	jQuery.get(source, function(data) {
	rawData = data;});
}
function ParseData()
{
	
}
function InjectData()
{
	var pageElement = document.getElementById("FilteredContent");
	alert(pageElement);
	//pageElement.innerHTML=rawData;
}
