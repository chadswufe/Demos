package cn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.domain.GuessOption;
import cn.mapper.GuessOptionMapper;
import cn.service.GuessOptionService;

@Service
public class GuessOptionServiceImpl implements GuessOptionService {

	@Autowired
	private GuessOptionMapper guessOptionMapper;
	
	@Override
	public void add(GuessOption guessOption) {
		guessOptionMapper.add(guessOption);
	}

	@Override
	public void delete(GuessOption guessOption) {
		guessOptionMapper.delete(guessOption.getId());
	}

	@Override
	public void update(GuessOption guessOption) {
		guessOptionMapper.update(guessOption);
	}

	@Override
	public GuessOption getById(long id) {
		return guessOptionMapper.getById(id);
	}

	@Override
	public List<GuessOption> getAll() {
		return guessOptionMapper.getAll();
	}

}
