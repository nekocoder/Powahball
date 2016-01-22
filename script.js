//var rawData="FAILURE";
var source="http://www.powerball.com/powerball/winnums-text.txt&callback=?";
var wbOccurences=[];
var pbOccurences=[];
var topNumbers=[];
var totalGames=0;

function Start()
{
	//alert("START");
	InitializeCounters();
	CountOccurences();
	CalcHighestNumbers()
	ParseData();
	InjectData();	
	//showInfo();
}
function InitializeCounters()
{
	for(var i=0;i<69;i++)
	{
		wbOccurences[i]=0;
	}
	
	for(var i=0;i<45;i++)
	{
		pbOccurences[i]=0;
	}
	
	for(var i=0;i<6;i++)
	{
		temp=[];
		temp.push(0);
		temp.push(0);
		topNumbers.push(temp);		
		alert(topNumbers[i]);
	}
	
	//alert(topNumbers);
}
function CountOccurences()
{
	alert("COUNTING DATA");
	
	for(var a=0;a<window.rawData.length;a++)
	{
		//count white balls
			for(var b=1;b<6;b++)
			{
				wbOccurences[(window.rawData[a][b]-1)]++;
				//alert("WB "+window.rawData[a][b]+"^");
			}
			
		//count powerball
			pbOccurences[(window.rawData[a][6]-1)]++;
			if(window.rawData[a][6]>26)
			{
				//alert("PB "+window.rawData[a][6]+"^");
			}
		
		//increment total game counter
			totalGames++;
	}
}
function CalcHighestNumbers()
{
	alert("CALC HIGHEST NUMBERS");
	alert(topNumbers);
	//topNumbers=[0][0]=0;
	topNumbers[0][1]=wbOccurences[0];
	
	
	for(var a=0;a<wbOccurences.length;a++)
	{
		if(wbOccurences[a]>topNumbers[0][1])
		{
			topNumbers[0][0]=a;
			topNumbers[0][1]=wbOccurences[a];
		}
	}

	for(var a=1;a<5;a++)
	{
		for(var b=0;b<wbOccurences.length;b++)
		{
			if(wbOccurences[b]>topNumbers[a][1] && wbOccurences[b]<topNumbers[a-1][1])
			{
				topNumbers[a][0]=b;
				topNumbers[a][1]=wbOccurences[b];
			}
		}
	}		
		
}
function showInfo()
{
	var pageElement = document.getElementById("FilteredContent");
	
	pageElement.innerHTML+="<h2>POWERBALL RAW DATA</h2>";
	pageElement.innerHTML+=("<div>Total Games: "+totalGames+"</div>");
	for(var a=0;a<window.rawData.length;a++)
	{
		pageElement.innerHTML+="<div>";
		
		//Display one row at a time
			for(var b=1;b<window.rawData[a].length;b++)
			{
				pageElement.innerHTML+=("["+a+"]["+b+"] ("+window.rawData[a][b]+")");
				//alert("WB "+window.rawData[a][b]+"^");
			}
		
		pageElement.innerHTML+="</div>";
	}
	
	
}
function ParseData()
{
	//alert("PARSING");
}
function InjectData()
{
	alert("INJECTING DATA");
	
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
	pageElement.innerHTML+=("<div>Highest Frequency Numbers: </div>");
	for(var i=0;i<topNumbers.length;i++)
	{
		pageElement.innerHTML+=("<div>"+topNumbers[(i+1)][0]+": "+topNumbers[i][1]+"</div>");
	}
	
}
