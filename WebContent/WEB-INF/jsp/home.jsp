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

				<form>
					<input type="text" placeholder="Tu origen..." maxlength="50" size="25" id="from" /> 
					<input type="text" placeholder="Tu destino..." maxlength="50" size="25" id="to" />
					<button id="findTravelers" type="button">Buscar viajeros</button>
				</form>
			</div>
			<div class="map_tools default_hidden">
				<div>				
					<p>Recuerda,</p>
					<p>puedes guardar la ruta y publicarla en el tablón general de rutas.</p>
					
					<ul id="closer_travelers"></ul>
					
					<button type="button" id="createRoute">Generar Ruta</button>
					<form>
						<button type="button" id="saveRoute">Guardar</button>
						<label>Tu email <input type="email" id="user_mail"/></label>
					</form>
				</div>
			</div>
		</div>
		<div class="down_row">
			<div id="printPanel" align="center" class="default_hidden">					
					<form name="layersMap">
						<input type="checkbox" name="tiempo" value="1" onclick="optionsLayers()" checked> Tiempo 
						<input type="checkbox" name="nubes" value="2" onclick="optionsLayers()" checked> Nubes
						<input type="checkbox" name="trafico" value="3" onclick="optionsLayers()" checked> Tráfico
						<input type="checkbox" name="kml" value="4" onclick="optionsLayers()" checked> Radares DGT
						<br />
						<input type="checkbox" name="wmsexterno" value="5" onclick="optionsLayers()" checked> Aeropuertos
						<input type="checkbox" name="wmspropio" value="6" onclick="optionsLayers()" checked> Vias Férreas
						<input type="checkbox" name="wmsexternoCP" value="7" onclick="optionsLayers()" checked> Códigos Postales
					</form>			
				</div>
			<div id="map_canvas" ></div>
		</div>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=weather"></script>
	<script src="js/index.js"></script>
	<script src="js/maps.js"></script>
	
	<s:form action="SaveRouteAction" method="post">
		<s:hidden name="savedRoute" id="savedRoute"/>   
	   	<s:submit key="submit" cssClass="hidden"/>
   </s:form>	
</body>
</html>
