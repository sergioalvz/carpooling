package org.miw.sig.carpooling.presentation;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.miw.sig.carpooling.model.Route;
import org.miw.sig.carpooling.persistence.CarpoolingDAO;

import com.opensymphony.xwork2.ActionSupport;

public class ShowRoutesAction extends ActionSupport implements ServletRequestAware{
    private static final long serialVersionUID = 1806561572618598970L;

    private HttpServletRequest request;

    public void setServletRequest(HttpServletRequest request) {
    	this.request = request;
    }

    @Override
    public String execute() throws Exception {
    	List<Route> routes = new CarpoolingDAO().getRoutes();
    	request.setAttribute("routes", routes);
    	return ActionSupport.SUCCESS;
    }
}
