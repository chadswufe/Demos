package cn.domain;

import java.util.Date;

public class Betting {

	private long id;
	private User user;
	private GuessOption guessOption;
	private int amount;
	private Date betTime;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public GuessOption getGuessOption() {
		return guessOption;
	}
	public void setGuessOption(GuessOption guessOption) {
		this.guessOption = guessOption;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public Date getBetTime() {
		return betTime;
	}
	public void setBetTime(Date betTime) {
		this.betTime = betTime;
	}
	@Override
	public String toString() {
		return "Betting [id=" + id + ", user=" + user + ", guessOption=" + guessOption + ", amount=" + amount
				+ ", betTime=" + betTime + "]";
	}
}
