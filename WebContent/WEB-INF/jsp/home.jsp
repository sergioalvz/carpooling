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
			<div class="help">
				<h3>Bienvenido</h3>
				<p>Ahora mismo estás disfrutando de un primer prototipo de
					carpooling. Aquí te mostramos algunas de las características que te
					ayudarán a que tus viajes al trabajo sean a la vez más divertidos y
					económicos que nunca.</p>

				<p>Utilizando el formulario inferior podrás seleccionar cual es
					tu ciudad de origen, así como donde está tu lugar de trabajo.</p>

				<p>A continuación, nosotros te proponemos algunos ejemplos de
					viajeros que comparten tu lugar de origen y se dirigen también a tu
					mismo destino.</p>

				<p>Gracias a los mapas de Google Maps, podrás añadir tus propios
					marcadores así como ver en que lugar se encuentran aquellos
					viajeros que te sugerimos.</p>

				<p>Por último, queriendo siempre echarte una mano en tu día a
					día, te sugerimos algunas gasolineras que te puedan pillar de
					camino y, además, te damos la información acerca de sus precios
					para que podáis buscar siempre la ruta más óptima y económica.</p>
				<p>
					Recuerda que, aunque esto sea un prototipo y no vayamos a guardar
					información sobre tus rutas ahora mismo, te damos la opción de que
					nos envíes la ruta que hayas preparado para que la ofertemos en la
					sección de <b>Rutas</b> y ya puedas empezar a formar parte del
					movimiento <b>carpooling</b>.
				</p>
			</div>
			<div class="form">
				<form>
					<input type="text" placeholder="Tu origen..." maxlength="50" size="25" id="from" /> 
					<input type="text" placeholder="Tu destino..." maxlength="50" size="25" id="to" /> <br />
					<button id="createRoute" type="button">Crear ruta</button>
				</form>
			</div>
		</div>
		<div class="right_column">
			<div id="map_canvas" ></div>
			<div class="map_tools default_hide"></div>
		</div>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="js/index.js"></script>
	<script src="js/maps.js"></script>
</body>
</html>
