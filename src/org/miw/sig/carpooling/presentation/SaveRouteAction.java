package org.miw.sig.carpooling.presentation;

import java.util.List;

import org.miw.sig.carpooling.model.Marker;

import com.opensymphony.xwork2.ActionSupport;

public class SaveRouteAction extends ActionSupport {

	private static final long serialVersionUID = -3015172969611665069L;
	List<Marker> markers;
	
	public void setMarkers(List<Marker> markers){
		this.markers = markers;
	}

}
