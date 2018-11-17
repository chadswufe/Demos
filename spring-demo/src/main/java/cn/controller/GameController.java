package cn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cn.domain.Game;
import cn.service.GameService;

@RestController
@RequestMapping("/game")
public class GameController {

	@Autowired
	private GameService gameService;
	
	@RequestMapping("/getAll")
	public List<Game> getAll() {
		return gameService.getAll();
	}
	 
    @RequestMapping("/getById")
    public Game getById(@RequestParam(value="id", defaultValue="") String gameId) {
    	return gameService.getById(Long.valueOf(gameId));
    }
}
