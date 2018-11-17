package cn.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import cn.domain.Guess;
import cn.domain.GuessOption;

public interface GuessOptionMapper {

	@Options(useGeneratedKeys = true, keyProperty = "id")
	@Insert("insert into guess_option (name, guess_id, rate)values(#{name}, #{guess.id}, #{rate})")
	int add(GuessOption guessOption);
	
	@Delete("delete from guess_option where id=#{0}")
	int delete(long id);
	
	@Update("update guess_option set name=#{name}, guess_id=#{guess.id}, rate=#{rate} where id=#{id}")
	int update(GuessOption guessOption);
	
	@Select("select * from guess_option")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "rate", column = "rate"),
		@Result(property = "guess", column = "guess_id", javaType = Guess.class,
		one = @One(select="cn.mapper.GuessMapper.getById"))
	})
	List<GuessOption> getAll();
	
	@Select("select * from guess_option where id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "rate", column = "rate"),
		@Result(property = "guess", column = "guess_id", javaType = Guess.class,
		one = @One(select="cn.mapper.GuessMapper.getById"))
	})
	GuessOption getById(long id);
	
	@Select("select * from guess_option where guess_id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "name", column = "name"),
		@Result(property = "rate", column = "rate"),
		@Result(property = "guess", column = "guess_id", javaType = Guess.class,
		one = @One(select="cn.mapper.GuessMapper.getById"))
	})
	List<GuessOption> getByGuess(long guessId);
}
