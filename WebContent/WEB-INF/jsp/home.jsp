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
		<div class="up_row">
			<div class="help">			
				<p>Ahora mismo estás disfrutando de un primer prototipo de
					carpooling. Te ayudaremos a que tus viajes al trabajo sean a la vez más divertidos y
					económicos que nunca.</p>

				<p>Utilizando el formulario inferior podrás seleccionar cual es
					tu ciudad de origen, así como donde está tu lugar de trabajo.</p>

				<p>Nosotros te proponemos algunos ejemplos de viajeros que comparten tu lugar de origen y se dirigen también a tu
					mismo destino.</p>

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
					<button id="createRoute" type="button">Buscar viajeros</button>
				</form>
			</div>
			<div class="map_tools default_hide">
				<h3>Los siguientes viajeros viven cerca de ti y se dirigen a tu mismo destino</h3>
				<ul id="closer_travelers"></ul>
				
				<p>Una vez seleccionados los acompañantes que desees, recuerda que puedes guardar la ruta y publicarla en el muro
				tablón general de rutas.</p>
				
				<button type="button">Generar Ruta</button>
				<button type="submit">Guardar</button>
			</div>
		</div>
		<div class="down_row">
			<div id="map_canvas" ></div>
		</div>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="js/index.js"></script>
	<script src="js/maps.js"></script>
</body>
</html>
