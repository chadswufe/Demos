package cn.domain;

import java.util.Date;
import java.util.List;

public class Game {
	
	private long id;
	private String name;
	private Date startTime;
	private String pkX;
	private String pkY;
	private List<Guess> guesses;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public String getPkX() {
		return pkX;
	}
	public void setPkX(String pkX) {
		this.pkX = pkX;
	}
	public String getPkY() {
		return pkY;
	}
	public void setPkY(String pkY) {
		this.pkY = pkY;
	}
	public List<Guess> getGuesses() {
		return guesses;
	}
	public void setGuesses(List<Guess> guesses) {
		this.guesses = guesses;
	}
	@Override
	public String toString() {
		return "Game [id=" + id + ", name=" + name + ", startTime=" + startTime + ", pkX=" + pkX + ", pkY=" + pkY
				+ ", guesses=" + guesses + "]";
	}
}
