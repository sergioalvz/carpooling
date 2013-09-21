package org.miw.sig.carpooling.persistence;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;
import org.miw.sig.carpooling.util.Constants;
import org.miw.sig.carpooling.util.Helper;

public class JDBCHelper {

    private static Logger logger = Logger.getLogger(JDBCHelper.class);

    public static Connection connect() {

	String driver = Helper.getProperty(Constants.PERSISTENCE, "jdbc");
	String login = Helper.getProperty(Constants.PERSISTENCE, "login");
	String password = Helper.getProperty(Constants.PERSISTENCE, "password");
	String url = Helper.getProperty(Constants.PERSISTENCE, "url");

	Connection conn = null;

	try {

	    Class.forName(driver);

	    conn = DriverManager.getConnection(url, login, password);

	} catch (ClassNotFoundException | SQLException e) {
	    logger.error(e.getMessage());
	}

	return conn;
    }

    public static void close(ResultSet rs, PreparedStatement ps, Connection conn) {

	try {
	    if (rs != null && !rs.isClosed())
		rs.close();
	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}

	try {
	    if (ps != null && !ps.isClosed())
		ps.close();
	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}

	try {
	    if (conn != null && !conn.isClosed())
		conn.close();
	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}

    }

    public static void close(ResultSet rs, Statement st, Connection conn) {

	try {
	    if (rs != null && !rs.isClosed())
		rs.close();
	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}

	try {
	    if (st != null && !st.isClosed())
		st.close();
	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}

	try {
	    if (conn != null && !conn.isClosed())
		conn.close();
	} catch (SQLException e) {
	    logger.error(e.getMessage());
	}

    }

}