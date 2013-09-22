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
			<h2>Rutas</h2>
			<p>Estas son algunas de las rutas que han ido creando otros viajeros (Origen - Destino):</p>
			<ul>
				<s:iterator value="%{#request.routes}" var="route">
					<li><a href="#" class="route"><s:property value="from"/> - <s:property value="to"/>. Por: <s:property value="email"/></a></li>
				</s:iterator>
			</ul>
		</div>
		<div class="right_column" id="map_canvas"></div>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<script src="js/routes.js"></script>
	<script src="js/maps.js"></script>
</body>
</html>