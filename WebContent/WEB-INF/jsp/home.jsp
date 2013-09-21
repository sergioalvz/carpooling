<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/main.css">
<title>carpooling |�Te ayudamos a viajar mejor.</title>
</head>
<body>
	<nav>
		<h1>carpooling | Te ayudamos a viajar mejor</h1>
		<a href="about.html">About</a>
	</nav>
	<div id="main_wrapper">
		<div class="left_column">
			<section class="help">
				<h3>Bienvenido</h3>
				<p>Ahora mismo est�s disfrutando de un primer prototipo donde te
					mostramos algunas de las caracter�sticas que te ayudar�n a que tus
					viajes al trabajo sean a la vez m�s divertidos y econ�micos que
					nunca.</p>
		
				<p>Utilizando el formulario inferior podr�s seleccionar cual es tu
					ciudad de origen, as� como donde est� tu lugar de trabajo.</p>
		
				<p>A continuaci�n, nosotros te proponemos algunos ejemplos de
					viajeros que comparten tu lugar de origen y se dirigen tambi�n a tu
					mismo destino.</p>
		
				<p>Gracias a los mapas de Google Maps, podr�s a�adir tus propios
					marcadores as� como ver en que lugar se encuentran aquellos viajeros
					que te sugerimos.</p>
		
				<p>Por �ltimo, queriendo siempre echarte una mano en tu d�a a d�a,
					te sugerimos algunas gasolineras que te puedan pillar de camino y,
					adem�s, te damos la informaci�n acerca de sus precios para que pod�is
					buscar siempre la ruta m�s �ptima y econ�mica.</p>
				<p>
					Recuerda que, aunque esto sea un prototipo y no vayamos a guardar
					informaci�n sobre tus rutas ahora mismo, te damos la opci�n de que
					nos env�es la ruta que hayas preparado para que la mostremos en la
					secci�n de <b>Rutas</b> y sirva de ejemplo para futuros visitantes.
				</p>
			</section>
			<section class="form">
				<form>
					<input type="text" placeholder="Tu origen..." maxlength="20" size="25" id="from" />
					<input type="text" placeholder="Tu destino..." maxlength="20" size="25" id="to" />
					<button id="#generateRouteButton" type="button">Crear ruta</button>
				</form>
			</section>
		</div>
		<div id="map_canvas" class="right_column"></div>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<script src="js/index.js"></script>
</body>
</html>