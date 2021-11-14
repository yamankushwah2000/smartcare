package model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "buffers")
public class vitals {

	private String RFID;	
	private String date,time;
	private double Temperature,HeartRate,OxygenLevels;
	private int emergencyStatus = 0;
	
	public vitals(String RFID,String date,String time,double Temperature,double HeartRate,double OxygenLevels,int emergencyStatus) {
		this.RFID = RFID;
		this.date = date;
		this.time = time;
		this.Temperature = Temperature;
		this.HeartRate = HeartRate;
		this.OxygenLevels = OxygenLevels;
		this.emergencyStatus =  emergencyStatus;
	}
	
	public String getRFID() {
		return RFID;
	}

	public void setRFID(String rFID) {
		RFID = rFID;
	}

	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getTime() {
		return time;
	}
	
	public void setTime(String time) {
		this.time = time;
	}
	
	public double getTemperature() {
		return Temperature;
	}
	
	public void setTemperature(double temperature) {
		Temperature = temperature;
	}
	
	public double getHeartRate() {
		return HeartRate;
	}
	
	public void setHeartRate(double heartRate) {
		HeartRate = heartRate;
	}
	
	public double getOxygenLevels() {
		return OxygenLevels;
	}
	
	public void setOxygenLevels(double oxygenLevels) {
		OxygenLevels = oxygenLevels;
	}
	
	public int getEmergencyStatus() {
		return emergencyStatus;
	}
	
	public void setEmergencyStatus(int emergencyStatus) {
		this.emergencyStatus = emergencyStatus;
	}

	@Override
	public String toString() {
		return "vitals [RFID=" + RFID + ", date=" + date + ", time=" + time + ", Temperature=" + Temperature
				+ ", HeartRate=" + HeartRate + ", OxygenLevels=" + OxygenLevels + ", emergencyStatus=" + emergencyStatus
				+ "]";
	}
	
}
