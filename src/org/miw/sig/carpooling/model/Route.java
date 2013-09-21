package org.miw.sig.carpooling.model;

import java.util.List;

public class Route {
	private Long id;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
