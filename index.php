<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Marvel VS Capcom</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="model/css/style.css">
</head>

<body>
	<header>
		<a href=index.php><img src="model/img/MVC_logo.png"></a>
	</header>
    
    <?php
	$select = isset($_GET['op']) ? $_GET['op'] : '';
	
	if($select === 'selecao'){
	  include "model/templates/select.html";	
	}
    else{
		include "model/templates/introducao.html";
	}	
	?>
  
	
	<footer>
		<p><a target="_blank" href="https://mscwps.000webhostapp.com/">&copy; MSC - 2019</a></p>
	</footer>

	
</body>

</html>
