package cn.enums;

public enum GuessStatus {
	Open(0), Closed(1);
	
	private int code;
	private GuessStatus(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	
	public static GuessStatus valueOfCode(int code) {
		if (code == 0) {
			return Open;
		} else {
			return Closed;
		}
	}
}
