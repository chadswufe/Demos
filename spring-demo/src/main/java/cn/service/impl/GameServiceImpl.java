package cn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.domain.Game;
import cn.mapper.GameMapper;
import cn.service.GameService;

@Service
public class GameServiceImpl implements GameService {

	@Autowired
	private GameMapper gameMapper;
	
	@Override
	public void add(Game game) {
		gameMapper.add(game);
	}

	@Override
	public void delete(Game game) {
		gameMapper.delete(game.getId());
	}

	@Override
	public void update(Game game) {
		gameMapper.update(game);
	}

	@Override
	public Game getById(long id) {
		return gameMapper.getById(id);
	}

	@Override
	public List<Game> getAll() {
		return gameMapper.getAll();
	}

}
