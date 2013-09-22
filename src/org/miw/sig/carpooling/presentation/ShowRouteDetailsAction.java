package org.miw.sig.carpooling.presentation;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.miw.sig.carpooling.model.Marker;
import org.miw.sig.carpooling.model.Route;
import org.miw.sig.carpooling.persistence.CarpoolingDAO;

import com.opensymphony.xwork2.ActionSupport;

public class ShowRouteDetailsAction extends ActionSupport implements
		ServletRequestAware {

	private static final long serialVersionUID = 8814132631547577129L;
	private Integer routeId;
	private HttpServletRequest request;

	public void setRouteId(Integer routeId) {
		this.routeId = routeId;
	}

	@Override
	public String execute() throws Exception {
		Route route = new CarpoolingDAO().getRoute(routeId);
		String info = route.getEmail() + "@@@from@@"
				+ route.getFrom().getName() + "@@"
				+ route.getFrom().getLatitude() + "@@"
				+ route.getFrom().getLongitude() + "@@@to@@"
				+ route.getTo().getName() + "@@" + route.getTo().getLatitude()
				+ "@@" + route.getTo().getLongitude();

		if (route.getMarkers() != null && route.getMarkers().size() > 0) {
			for (Marker marker : route.getMarkers()) {
				info += "@@@waypoint@@" + marker.getName() + "@@"
						+ marker.getLatitude() + "@@" + marker.getLongitude();
			}

		}

		request.setAttribute("savedRoute", info);
		return ActionSupport.SUCCESS;
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}	
	
}
