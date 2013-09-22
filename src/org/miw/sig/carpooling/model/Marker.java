package org.miw.sig.carpooling.model;

public class Marker {
    private Integer id;
    private String name;
    private String latitude;
    private String longitude;

    public Marker() {

    }

    public Marker(String rs) {

	String[] point = rs.split("@@");
	name = point[1];
	latitude = point[2];
	longitude = point[3];

    }

    public String getLatitude() {
	return latitude;
    }

    public void setLatitude(String latitude) {
	this.latitude = latitude;
    }

    public String getLongitude() {
	return longitude;
    }

    public void setLongitude(String longitude) {
	this.longitude = longitude;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public Integer getId() {
	return id;
    }

    public void setId(Integer id) {
	this.id = id;
    }

}
