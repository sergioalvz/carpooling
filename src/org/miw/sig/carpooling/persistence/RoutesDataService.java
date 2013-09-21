package org.miw.sig.carpooling.persistence;

import java.util.List;

import org.miw.sig.carpooling.model.Route;

public interface RoutesDataService {
	public void saveRoute(Route route);
	public List<Route> getRoutes() ;
}
