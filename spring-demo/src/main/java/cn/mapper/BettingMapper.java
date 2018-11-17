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

import cn.domain.Betting;
import cn.domain.GuessOption;
import cn.domain.User;

public interface BettingMapper {
	
	@Options(useGeneratedKeys = true, keyProperty = "id")
	@Insert("insert into betting(user_id,guess_option_id,amount)values(#{user.id},#{guessOption.id},#{amount})")
	int add(Betting betting);
	
	@Delete("delete from betting where id=#{0}")
	int delete(long id);
	
	@Update("update betting set user_id=#{user.id},guess_option_id=#{guessOption.id},amount=#{amount} where id=#{id}")
	int update(Betting betting);
	
	@Select("select * from betting")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "user", column = "user_id", javaType = User.class,
				one = @One(select="cn.mapper.UserMapper.getById")),
		@Result(property = "guessOption", column = "guess_option_id", javaType = GuessOption.class,
				one = @One(select="cn.mapper.GuessOptionMapper.getById")),
		@Result(property = "amount", column = "amount"),
		@Result(property = "betTime", column = "bet_time")
	})
	List<Betting> getAll();
	
	@Select("select * from betting where id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "user", column = "user_id", javaType = User.class,
				one = @One(select="cn.mapper.UserMapper.getById")),
		@Result(property = "guessOption", column = "guess_option_id", javaType = GuessOption.class,
				one = @One(select="cn.mapper.GuessOptionMapper.getById")),
		@Result(property = "amount", column = "amount"),
		@Result(property = "betTime", column = "bet_time")
	})
	Betting getById(long id);
	
	@Select("select * from betting where user_id=#{0}")
	@Results({
		@Result(property = "id", column = "id", id = true),
		@Result(property = "user", column = "user_id", javaType = User.class,
				one = @One(select="cn.mapper.UserMapper.getById")),
		@Result(property = "guessOption", column = "guess_option_id", javaType = GuessOption.class,
				one = @One(select="cn.mapper.GuessOptionMapper.getById")),
		@Result(property = "amount", column = "amount"),
		@Result(property = "betTime", column = "bet_time")
	})
	List<Betting> getByUser(long userId);
}
