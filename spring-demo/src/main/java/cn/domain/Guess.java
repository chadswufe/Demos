package cn.domain;

import java.util.Date;
import java.util.List;

import cn.enums.GuessStatus;

public class Guess {

	private long id;
	private String name;
	private Date deadline;
	private GuessStatus status;
	private List<GuessOption> guessOptions;
	
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
	public Date getDeadline() {
		return deadline;
	}
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	public GuessStatus getStatus() {
		return status;
	}
	public void setStatus(GuessStatus status) {
		this.status = status;
	}
	public List<GuessOption> getGuessOptions() {
		return guessOptions;
	}
	public void setGuessOptions(List<GuessOption> guessOptions) {
		this.guessOptions = guessOptions;
	}
	@Override
	public String toString() {
		return "Guess [id=" + id + ", name=" + name + ", deadline=" + deadline + ", guessOptions=" + guessOptions + "]";
	}
}
