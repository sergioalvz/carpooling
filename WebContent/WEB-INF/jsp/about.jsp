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
		<h1>
			<a href="<s:url action='Home'/>">carpooling | Ahorras tú. Ahorramos todos.</a>
		</h1>
		<ul>
			<li><a href="<s:url action='ShowRoutesAction'/>">Rutas</a> |</li>
			<li><a href="<s:url action='ShowAboutAction'/>">About</a></li>
		</ul>
	</nav>
	<div id="main_wrapper">
		<div class="up_row">
			<section class="about">
				<h3>carpooling</h3>
				<p>
					<b>carpooling</b> es un prototipo web desarrollado para la asignatura <b>Sistemas de Información Geográfica y
						Servicios Web</b> del Máster en Ingeniería Web de la Universidad de Oviedo.
				</p>
				<p>El proyecto fue desarrollado por: </p>
				<ul>
					<li>Pablo González Jiménez</li>
					<li>Natalia García Menéndez</li>
					<li>Daniel Machado Fernández</li>
					<li>Sergio Álvarez Suárez</li>
				</ul>
				<p>Septiembre, 2013</p>
			</section>
		</div>
		<div class="down_row"></div>
	</div>
</body>
</html>