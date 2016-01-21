//var rawData="FAILURE";
var source="http://www.powerball.com/powerball/winnums-text.txt&callback=?";
var wbOccurences=[];
var pbOccurences=[];
var totalGames=0;

function Start()
{
	//alert("START");
	InitializeCounters();
	CountOccurences();
	ParseData();
	InjectData();
}
function InitializeCounters()
{
	for(var i=0;i<69;i++)
	{
		wbOccurences[i]=0;
	}
	
	for(var i=0;i<26;i++)
	{
		pbOccurences[i]=0;
	}
	
}
function CountOccurences()
{
	//alert("SCRAPING");
	
	for(var a=0;a<window.rawData.length;a++)
	{
		//count white balls
			for(var b=1;b<5;b++)
			{
				wbOccurences[(window.rawData[a][b]-1)]++;
				//alert("WB "+window.rawData[a][b]+"^");
			}
			
		//count powerball
			//pbOccurences[(window.rawData[a][6]-1)]++;
			if(window.rawData[a][6]>26)
			{
				alert("PB "+window.rawData[a][6]+"^");
			}
		
		//increment total game counter
			totalGames++;
	}
}
function ParseData()
{
	//alert("PARSING");
}
function InjectData()
{
	//alert(rawData);
	
	var pageElement = document.getElementById("FilteredContent");
	pageElement.innerHTML="<h2> POWERBALL NUMBER OCCURENCES</h2>";
	pageElement.innerHTML+=("<div>Total Games: "+totalGames+"</div>");
	pageElement.innerHTML+=("<div>White Totals: </div>");
	for(var i=0;i<wbOccurences.length;i++)
	{
		pageElement.innerHTML+=("<div>"+(i+1)+": "+wbOccurences[i]+"</div>");
	}
	pageElement.innerHTML+=("<div>Powerball Totals: </div>");
	for(var i=0;i<pbOccurences.length;i++)
	{
		pageElement.innerHTML+=("<div>"+(i+1)+": "+pbOccurences[i]+"</div>");
	}
}
