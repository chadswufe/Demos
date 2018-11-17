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

import cn.domain.Guess;

public interface GuessMapper {

	@Options(useGeneratedKeys = true, keyProperty = "id")
	@Insert("insert into guess (name,deadline,status)values(#{name},#{deadline},0)")
	int add(Guess guess);
	
	@Delete("delete from guess where id=#{0}")
	int delete(long id);
	
	@Update("update guess set name=#{name},deadline=#{deadline},status=0 where id=#{id}")
	int update(Guess guess);
	
	@Select("select * from guess")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "deadline", column = "deadline"),
		@Result(property = "status", column = "status",
		typeHandler = GuessStatusTypeHandler.class),
		@Result(property = "guessOptions", column = "id", javaType = List.class,
		many = @Many(select="cn.mapper.GuessOptionMapper.getByGuess"))
	})
	List<Guess> getAll();
	
	@Select("select * from guess where id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "deadline", column = "deadline"),
		@Result(property = "status", column = "status",
		typeHandler = GuessStatusTypeHandler.class),
		@Result(property = "guessOptions", column = "id", javaType = List.class,
		many = @Many(select="cn.mapper.GuessOptionMapper.getByGuess"))
	})
	Guess getById(long id);
	
	@Select("select * from guess where game_id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "deadline", column = "deadline"),
		@Result(property = "status", column = "status",
		typeHandler = GuessStatusTypeHandler.class),
		@Result(property = "guessOptions", column = "id", javaType = List.class,
		many = @Many(select="cn.mapper.GuessOptionMapper.getByGuess"))
	})
	List<Guess> getByGame(long gameId);
}
