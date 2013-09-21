package org.miw.sig.carpooling.presentation;

import java.util.List;

import org.miw.sig.carpooling.model.Marker;
import org.miw.sig.carpooling.model.Route;
import org.miw.sig.carpooling.persistence.RoutesDataService;

import com.opensymphony.xwork2.ActionSupport;

public class SaveRouteAction extends ActionSupport {

	private static final long serialVersionUID = -3015172969611665069L;
	private List<Marker> markers;
	private Marker from;
	private Marker to;
	
	public void setMarkers(List<Marker> markers){
		this.markers = markers;
	}
	
	public void setFrom(Marker from){
		this.from = from;
	}
	
	public void setTo(Marker to){
		this.to = to;
	}
	
	@Override
	public String execute() throws Exception {
		Route route = new Route();
		route.setFrom(from);
		route.setTo(to);
		route.setMarkers(markers);
		
		// FIXME new RoutesDataService().saveRoute(route);
		
		return ActionSupport.SUCCESS;
	}
}
