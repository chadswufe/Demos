package cn.mapper;

import java.util.List;

import org.apache.ibatis.annotations.*;

import cn.domain.User;

public interface UserMapper {

	@Options(useGeneratedKeys = true, keyProperty = "id")
	@Insert("insert into user (name, password)values(#{name}, #{password})")
	int add(User user);
	
	@Delete("delete from user where id=#{0}")
	int delete(long id);
	
	@Update("update user set name=#{name}, password=#{password} where id=#{id}")
	int update(User user);
	
	@Select("select * from user")
	List<User> getAll();
	
	@Select("select * from user where id=#{0}")
	User getById(long id);
}
