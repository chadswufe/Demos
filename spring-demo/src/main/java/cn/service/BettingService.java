package cn.service;

import java.util.List;

import cn.domain.Betting;

public interface BettingService {
	
	void add(Betting betting);
	void delete(Betting betting);
	void update(Betting betting);
	Betting getById(long id);
	List<Betting> getAll();
	List<Betting> getByUser(long userId);
}
