package org.miw.sig.carpooling.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.miw.sig.carpooling.model.Marker;

public class Helper {

    private static Logger logger = Logger.getLogger(Helper.class);

    /**
     * Obtiene una propiedad de un fichero de propiedades bajo una clave
     * 
     * @param CONF_FILE
     *            fichero properties (misma ubicación que .java)
     * @param key
     *            clave del fichero properties
     * 
     * @return propiedad bajo la clave proporcionada o null
     */
    public static String getProperty(String CONF_FILE, String key) {

	Properties properties = new Properties();

	try {

	    properties.load(Helper.class.getResourceAsStream(CONF_FILE));

	} catch (IOException e) {
	    logger.error(e.getMessage());
	}

	return properties.getProperty(key);
    }

    public static String buildMarkers(List<Marker> markers) {
	String res = "";

	for (Marker mark : markers) {
	    res += mark.getLatitude() + "," + mark.getLongitude() + ";";
	}

	return res;
    }

    public static List<Marker> setMarkers(String marks) {

	String[] points = marks.split(";");
	List<Marker> markers = new ArrayList<Marker>();
	for (String mark : points) {
	    markers.add(new Marker(mark));
	}

	return markers;
    }

}
