package org.miw.sig.carpooling.presentation;

import javax.servlet.http.HttpServletRequest;

import org.miw.sig.carpooling.persistence.RoutesDataService;

import com.opensymphony.xwork2.ActionSupport;

public class ShowRoutesAction extends ActionSupport {
	private static final long serialVersionUID = 1806561572618598970L;
	
	private HttpServletRequest request;
	
	public void setRequest(HttpServletRequest request){
		this.request = request;
	}

	@Override
	public String execute() throws Exception {
		// FIXME request.setAttribute("routes", new RoutesDataService().getRoutes());
		return ActionSupport.SUCCESS;
	}
}
