package org.miw.sig.carpooling.presentation;

import java.util.ArrayList;
import java.util.List;

import org.miw.sig.carpooling.model.Marker;
import org.miw.sig.carpooling.model.Route;
import org.miw.sig.carpooling.persistence.CarpoolingDAO;
import org.miw.sig.carpooling.persistence.RoutesDataService;

import com.opensymphony.xwork2.ActionSupport;

public class SaveRouteAction extends ActionSupport {

    private static final long serialVersionUID = -3015172969611665069L;
    private String savedRoute;

    public void setSavedRoute(String savedRoute) {
	this.savedRoute = savedRoute;
    }

    @Override
    public String execute() throws Exception {

	String[] chunks = savedRoute.split("@@@");
	System.out.println(savedRoute);

	Route r = new Route();
	List<Marker> markers = new ArrayList<Marker>();
	r.setEmail(chunks[0]);

	for (int i = 1; i < chunks.length; i++) {

	    String[] chunk = chunks[i].split("@@");
	    switch (chunk[0]) {
	    case "to":
		r.setTo(new Marker(chunks[i]));
		break;
	    case "from":
		r.setFrom(new Marker(chunks[i]));
		break;
	    case "waypoint":
		markers.add(new Marker(chunks[i]));
		break;
	    }

	}

	if (markers.size() != 0)
	    r.setMarkers(markers);
	else
	    r.setMarkers(null);

	RoutesDataService service = new CarpoolingDAO();
	service.saveRoute(r);

	return ActionSupport.SUCCESS;
    }
}
