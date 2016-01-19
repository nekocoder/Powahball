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
			<?PHP
				$URL="http://www.powerball.com/powerball/winnums-text.txt";
				$URLHandle=curl_init($URL);
				$result=curl_exec($URLHandle);
				$error=curl_error($URLHandle);
				$info=curl_getinfo($URLHandle);
			?>
			rawData[];
			<?PHP 
				foreach($info as $value)
				{
					echo('rawData.push('.$value.');');					
				}					
			?>
		</script>
		<script src="script.js"></script>
	</footer>
</html>