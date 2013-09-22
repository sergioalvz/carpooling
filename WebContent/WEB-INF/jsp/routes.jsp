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
		<section class="routes">
			<h3>Rutas</h3>
			<p>Estas son algunas de las rutas que han ido creando otros viajeros (Origen - Destino):</p>
			<ul>
				<s:iterator value="%{#request.routes}" var="route">
					<s:url action="ShowRouteDetailsAction" var="myUrl" >
   			 			<s:param name="routeId"><s:property value="id"/> </s:param>
					</s:url>					
					<li><a href="%{myUrl}"><s:property value="from"/> - <s:property value="to"/>. Por: <s:property value="email"/></a></li>
				</s:iterator>
			</ul>
		</section>		
	</div>	
</body>
</html>