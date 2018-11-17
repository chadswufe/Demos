package cn.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import cn.domain.Game;

public interface GameMapper {
	
	@Options(useGeneratedKeys = true, keyProperty = "id")
	@Insert("insert into game(name,start_time,pk_x,pk_y)values(#{name},#{startTime},#{pkX},#{pkY})")
	int add(Game game);
	
	@Delete("delete from game where id=#{0}")
	int delete(long id);
	
	@Update("update game set name=#{name} where id=#{id}")
	int update(Game game);
	
	@Select("select * from game")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "startTime", column = "start_time"),
		@Result(property = "pkX", column = "pk_x"),
		@Result(property = "pkY", column = "pk_y"),
		@Result(property = "guesses", column = "id", javaType = List.class,
		many = @Many(select="cn.mapper.GuessMapper.getByGame"))
	})
	List<Game> getAll();
	
	@Select("select * from game where id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "startTime", column = "start_time"),
		@Result(property = "pkX", column = "pk_x"),
		@Result(property = "pkY", column = "pk_y"),
		@Result(property = "guesses", column = "id", javaType = List.class,
		many = @Many(select="cn.mapper.GuessMapper.getByGame"))
	})
	Game getById(long id);
}
