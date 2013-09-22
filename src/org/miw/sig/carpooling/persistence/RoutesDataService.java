package org.miw.sig.carpooling.persistence;

import java.util.List;

import org.miw.sig.carpooling.model.Marker;
import org.miw.sig.carpooling.model.Route;

public interface RoutesDataService {
    Route saveRoute(Route route);

    List<Route> getRoutes();

    Marker saveMarker(Marker from);

    List<Marker> getMarkers(Integer idroute);
}
