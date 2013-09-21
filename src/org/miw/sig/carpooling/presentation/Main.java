package org.miw.sig.carpooling.presentation;

import java.util.List;

import org.miw.sig.carpooling.model.Route;
import org.miw.sig.carpooling.persistence.CarpoolingDAO;

public class Main {

    public static void main(String[] args) {
	CarpoolingDAO dao = new CarpoolingDAO();

	List<Route> markers = dao.getRoutes();
	System.out.println(markers);

    }

}
