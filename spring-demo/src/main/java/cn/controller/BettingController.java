package cn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cn.domain.Betting;
import cn.service.BettingService;

@RestController
@RequestMapping("/betting")
public class BettingController {
	
	@Autowired
	private BettingService bettingService;

    @RequestMapping("/getByUser")
    public List<Betting> getByUser(@RequestParam(value="userId", defaultValue="") String userId) {
    	return bettingService.getByUser(Long.valueOf(userId));
    }
}
