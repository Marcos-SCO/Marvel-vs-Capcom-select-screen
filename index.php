<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Marvel VS Capcom</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="dist/css/app.css">
</head>

<body>
	<header>
		<a href=index.php><img src="img/MVC_logo.png"></a>
	</header>

	<?php
	$select = isset($_GET['op']) ? $_GET['op'] : '';

	if ($select === 'selecao') {
		include "templates/select.html";
	} else {
		include "templates/introducao.html";
	}
	?>

	<footer>
		<p><a target="_blank" href="https://mscwps.000webhostapp.com/">2019 | <span id="currYear">-</span> &copy; Marcos dos Santos Carvalho </a></p>
	</footer>

	<script src="dist/js/app.js"></script>
</body>

</html>