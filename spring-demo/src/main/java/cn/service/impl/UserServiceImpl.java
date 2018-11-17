package cn.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.domain.User;
import cn.mapper.UserMapper;
import cn.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public void add(User user) {
		userMapper.add(user);
	}

	@Override
	public void delete(User user) {
		userMapper.delete(user.getId());
	}
	
	@Override
	public void update(User user) {
		userMapper.update(user);
	}

	@Override
	public User getById(long id) {
		return userMapper.getById(id);
	}

	@Override
	public List<User> getAll() {
		return userMapper.getAll();
	}

}
