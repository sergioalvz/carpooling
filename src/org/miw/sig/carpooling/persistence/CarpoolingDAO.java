package org.miw.sig.carpooling.persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.log4j.Logger;
import org.miw.sig.carpooling.model.Marker;
import org.miw.sig.carpooling.model.Route;
import org.miw.sig.carpooling.util.Constants;
import org.miw.sig.carpooling.util.Helper;

public class CarpoolingDAO implements RoutesDataService {

    Logger logger = Logger.getLogger(CarpoolingDAO.class);

    @Override
    public void saveRoute(Route route) {

	Connection conn = JDBCHelper.connect();
	PreparedStatement ps = null;
	String sql = Helper.getProperty(Constants.QUERIES, "saveRoute");

	try {

	    ps = conn.prepareStatement(sql);
	    ps.setString(1, route.getEmail());
	    ps.setString(2, route.getFrom().getName() + ","
		    + route.getFrom().getLatitude() + ","
		    + route.getFrom().getLongitude());
	    ps.setString(3, route.getTo().getName() + ","
		    + route.getTo().getLatitude() + ","
		    + route.getTo().getLongitude());
	    ps.setString(4, Helper.buildMarkers(route.getMarkers()));

	    ps.execute();

	} catch (SQLException e) {
	    logger.error(e.getMessage());
	} finally {
	    JDBCHelper.close(null, ps, conn);
	}

    }

    @Override
    public List<Route> getRoutes() {
	Connection conn = JDBCHelper.connect();
	PreparedStatement ps = null;
	String sql = Helper.getProperty(Constants.QUERIES, "getRoutes");
	ResultSet rs = null;
	List<Route> routes = new ArrayList<Route>();

	try {
	    ps = conn.prepareStatement(sql);
	    rs = ps.executeQuery();

	    while (rs.next()) {

		Route r = new Route();
		r.setEmail(rs.getString("email"));
		r.setFrom(new Marker(rs.getString("home")));
		r.setTo(new Marker(rs.getString("finish")));
		r.setMarkers(Helper.setMarkers(rs.getString("markers")));
		routes.add(r);
	    }

	} catch (SQLException e) {
	    logger.error(e.getMessage());
	} finally {
	    JDBCHelper.close(rs, ps, conn);
	}

	if (routes.size() == 0)
	    return Collections.emptyList();
	else
	    return routes;

    }

}
