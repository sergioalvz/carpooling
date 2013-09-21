package org.miw.sig.carpooling.model;

public class Traveler {
	private String name;
	private String to;
	private String from;

	public Traveler() {

	}

	public Traveler(String name, String to, String from) {
		this.name = name;
		this.to = to;
		this.from = from;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}
}
