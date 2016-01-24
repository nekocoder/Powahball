<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>Powerball Quick Stats</title>
		<link rel="stylesheet" href="style.css">
		
			<?PHP
				//Set URL and make handle
					$URL="http://www.powerball.com/powerball/winnums-text.txt";
					$URLHandle=curl_init($URL);
				
				//set transfer option so we get the actual contents
					curl_setopt($URLHandle, CURLOPT_RETURNTRANSFER, TRUE);
				
				//query for url contents and info on the request
					$result=curl_exec($URLHandle);
					$error=curl_error($URLHandle);
					$info=curl_getinfo($URLHandle);
				
				//parse out results
					$data=explode("\r\n", $result);
					$parsedData=array();
					foreach($data as $value)
					{
						array_push($parsedData,explode("  ", $value));					
					}
					
				//Assign to global Javascript variable	
					//echo('window.rawData="'.$result.'";');
					/*foreach($result as $value)
					{
						echo('rawData.push('.$value.');');
					}
					*/
				//debug echo statements	
					//echo "<pre>";
					//echo "Url: " . $URL . "<br/>";
					//echo "Cert: <br/>";
					//echo count($info["certinfo"]);
					//echo "<br/>";
					//echo "Result: " . $result."<br/>";
					//echo "Error: " . $error . "<br/>";
					//print_r(curl_getinfo($URLHandle));
					//echo "Current Directory: ".getcwd();
					//echo "data is ".gettype($parsedData);
					//print_r($parsedData);
					//echo "</pre>";					
				?>
		<script>
			//alert("test");
			window.rawData=[];	
			
			<?PHP
				//make temp array
					echo ("temp=[];");
				
				//sift through the php array of parsed data and replicate it with 
				//javascript commands that will rebuild it
					foreach($parsedData as $value)
					{
						//Don't bother if array is empty or too small (it won't have data)
							if(count($value)>3)
							{
								//clear temp
									echo("temp=[];");
								
								//add elements to temp
									foreach($value as $subValue)
									{
										echo ("temp.push(");
										if(substr_count($subValue,"/")>0)
										{
											echo ('"'.$subValue.'"');
										}
										else
										{
											echo ($subValue);
										}
										echo (")\n");
									}
								//add temp array to master array		
									echo ("window.rawData.push(temp)\n");						
							}
					}			
			?>
			
		</script>		
		<script src="script.js"></script>
	</head>
	<body onLoad="Start()">
		<div id="MainContent">
			<div class="Header">
				<p>NOTE: The creator of this page is not associated with the Multi State Lottery Association, nor is this page an official page made on the behalf of said association</p>
			</div>
			<div class="Main">
				<svg id="HighFrequencyBallRack">
					<circle id="HighestWB0" class="whiteball"></circle>
					<circle id="HighestWB1" class="whiteball"></circle>
					<circle id="HighestWB2" class="whiteball"></circle>
					<circle id="HighestWB3" class="whiteball"></circle>
					<circle id="HighestWB4" class="whiteball"></circle>
					<circle id="HighestPB" class="powerball"></circle>
				</svg>				
				<div id="FilteredContent"> Content</div>
			</div>
			<div class="Footer">
				<h5> Created by Eryc Duhart </h5>
			</div>
		</div>
	</body>
	<footer>		
	</footer>
</html>