package org.miw.sig.carpooling.util;

import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;

public class Helper {

    private static Logger logger = Logger.getLogger(Helper.class);

    /**
     * Obtiene una propiedad de un fichero de propiedades bajo una clave
     * 
     * @param CONF_FILE
     *            fichero properties (misma ubicacion que .java)
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

}
