<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/main.css">
<title>carpooling | Ahorras tú. Ahorramos todos.</title>
</head>
<body>
	<nav>
		<h1><a href="<s:url action='Home'/>">carpooling | Ahorras tú. Ahorramos todos.</a></h1>
		<ul>
			<li>
				<a href="<s:url action='ShowRoutesAction'/>">Rutas</a> | 
			</li>
			<li>
				 <a href="<s:url action='ShowAboutAction'/>">About</a> 	
			</li>
		</ul> 
	</nav>
	<div id="main_wrapper">
		<div class="left_column">
			<h2>Sobre carpooling</h2>
			
		</div>
		<div class="right_column"></div>
	</div>
</body>
</html>