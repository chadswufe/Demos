package cn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.domain.Guess;
import cn.mapper.GuessMapper;
import cn.service.GuessService;

@Service
public class GuessServiceImpl implements GuessService {

	@Autowired
	private GuessMapper guessMapper;
	
	@Override
	public void add(Guess guess) {
		guessMapper.add(guess);
	}

	@Override
	public void delete(Guess guess) {
		guessMapper.delete(guess.getId());
	}

	@Override
	public void update(Guess guess) {
		guessMapper.update(guess);
	}

	@Override
	public Guess getById(long id) {
		return guessMapper.getById(id);
	}

	@Override
	public List<Guess> getAll() {
		return guessMapper.getAll();
	}

}
