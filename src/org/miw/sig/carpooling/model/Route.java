package org.miw.sig.carpooling.model;

import java.util.List;

public class Route {
    private Integer id;
    private String email;
    private Marker from;
    private Marker to;
    private List<Marker> markers;

    public Route() {

    }

    public Marker getFrom() {
	return from;
    }

    public void setFrom(Marker from) {
	this.from = from;
    }

    public Marker getTo() {
	return to;
    }

    public void setTo(Marker to) {
	this.to = to;
    }

    public List<Marker> getMarkers() {
	return markers;
    }

    public void setMarkers(List<Marker> markers) {
	this.markers = markers;
    }

    public String getEmail() {
	return email;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public Integer getId() {
	return id;
    }

    public void setId(Integer id) {
	this.id = id;
    }

}
