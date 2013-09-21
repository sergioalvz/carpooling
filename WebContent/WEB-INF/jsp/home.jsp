<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/main.css">
<title>carpooling | Te ayudamos a viajar mejor.</title>
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
				<p>Ahora mismo estás disfrutando de un primer prototipo donde te
					mostramos algunas de las características que te ayudarán a que tus
					viajes al trabajo sean a la vez más divertidos y económicos que
					nunca.</p>
		
				<p>Utilizando el formulario inferior podrás seleccionar cual es tu
					ciudad de origen, así como donde está tu lugar de trabajo.</p>
		
				<p>A continuación, nosotros te proponemos algunos ejemplos de
					viajeros que comparten tu lugar de origen y se dirigen también a tu
					mismo destino.</p>
		
				<p>Gracias a los mapas de Google Maps, podrás añadir tus propios
					marcadores así como ver en que lugar se encuentran aquellos viajeros
					que te sugerimos.</p>
		
				<p>Por último, queriendo siempre echarte una mano en tu día a día,
					te sugerimos algunas gasolineras que te puedan pillar de camino y,
					además, te damos la información acerca de sus precios para que podáis
					buscar siempre la ruta más óptima y económica.</p>
				<p>
					Recuerda que, aunque esto sea un prototipo y no vayamos a guardar
					información sobre tus rutas ahora mismo, te damos la opción de que
					nos envíes la ruta que hayas preparado para que la mostremos en la
					sección de <b>Rutas</b> y sirva de ejemplo para futuros visitantes.
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