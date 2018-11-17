package cn.mapper;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import cn.enums.GuessStatus;

public class GuessStatusTypeHandler extends BaseTypeHandler<GuessStatus> {

	@Override
	public void setNonNullParameter(PreparedStatement ps, int i, GuessStatus parameter, JdbcType jdbcType)
			throws SQLException {
		ps.setInt(i, parameter.getCode());
	}

	@Override
	public GuessStatus getNullableResult(ResultSet rs, String columnName) throws SQLException {
		return GuessStatus.valueOfCode(rs.getInt(columnName));
	}

	@Override
	public GuessStatus getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
		return GuessStatus.valueOfCode(rs.getInt(columnIndex));
	}

	@Override
	public GuessStatus getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
		return GuessStatus.valueOfCode(cs.getInt(columnIndex));
	}

}
