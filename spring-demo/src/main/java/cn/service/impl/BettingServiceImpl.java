package cn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.domain.Betting;
import cn.mapper.BettingMapper;
import cn.service.BettingService;

@Service
public class BettingServiceImpl implements BettingService {

	@Autowired
	private BettingMapper bettingMapper;
	
	@Override
	public void add(Betting betting) {
		bettingMapper.add(betting);
	}

	@Override
	public void delete(Betting betting) {
		bettingMapper.delete(betting.getId());
	}

	@Override
	public void update(Betting betting) {
		bettingMapper.update(betting);
	}

	@Override
	public Betting getById(long id) {
		return bettingMapper.getById(id);
	}

	@Override
	public List<Betting> getAll() {
		return bettingMapper.getAll();
	}

	@Override
	public List<Betting> getByUser(long userId) {
		return bettingMapper.getByUser(userId);
	}

}
