<!DOCTYPE html>
<html>
	<head>
		<title>Powerball Quick Stats</title>
		<link rel="stylesheet" href="style.css">		
	</head>
	<body>
		<div id="MainContent">
			<div class="Header">
				<p>NOTE: The creator of this page is not associated with the Multi State Lottery Association, nor is this page an official page made on the behalf of said association</p>
			</div>
			<div class="Main">
				<h5 id="FilteredContent"> Content</h5>
			</div>
			<div class="Footer">
				<h5> Created by Eryc Duhart </h5>
			</div>
		</div>
	</body>
	<footer>
		<script>
			rawData[]];
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
					echo('rawData.push('.$result.');');
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
					//echo "</pre>";
					
			?>		
		</script>
		<script src="script.js"></script>
	</footer>
</html>