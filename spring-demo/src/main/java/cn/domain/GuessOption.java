package cn.domain;

public class GuessOption {

	private long id;
	private String name;
	private double rate;
	private Guess guess;
	
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
	public double getRate() {
		return rate;
	}
	public void setRate(double rate) {
		this.rate = rate;
	}
	public Guess getGuess() {
		return guess;
	}
	public void setGuess(Guess guess) {
		this.guess = guess;
	}
	@Override
	public String toString() {
		return "GuessOption [id=" + id + ", name=" + name + ", rate=" + rate + ", guess=" + guess + "]";
	}
}
