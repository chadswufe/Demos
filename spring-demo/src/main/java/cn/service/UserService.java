package cn.service;

import java.util.List;

import cn.domain.User;

public interface UserService {

	void add(User user);
	void delete(User user);
	void update(User user);
	User getById(long id);
	List<User> getAll();
}
