package cn.service;

import java.util.List;

import cn.domain.Game;

public interface GameService {

	void add(Game game);
	void delete(Game game);
	void update(Game game);
	Game getById(long id);
	List<Game> getAll();
}
