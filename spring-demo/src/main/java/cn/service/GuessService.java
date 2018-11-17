package cn.service;

import java.util.List;

import cn.domain.Guess;

public interface GuessService {

	void add(Guess guess);
	void delete(Guess guess);
	void update(Guess guess);
	Guess getById(long id);
	List<Guess> getAll();
}
