package org.miw.sig.carpooling.presentation;

import com.opensymphony.xwork2.ActionSupport;

public class SaveRouteAction extends ActionSupport {

    private static final long serialVersionUID = -3015172969611665069L;
    private String savedRoute;

    public void setSavedRoute(String savedRoute){
    	this.savedRoute = savedRoute;
    }
   
    @Override
    public String execute() throws Exception {	
		return ActionSupport.SUCCESS;
    }
}
