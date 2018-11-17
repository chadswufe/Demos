package cn.service;

import java.util.List;

import cn.domain.GuessOption;

public interface GuessOptionService {
	
	void add(GuessOption guessOption);
	void delete(GuessOption guessOption);
	void update(GuessOption guessOption);
	GuessOption getById(long id);
	List<GuessOption> getAll();
}
