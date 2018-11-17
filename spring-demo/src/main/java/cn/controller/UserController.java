package cn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cn.domain.User;
import cn.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;

    @RequestMapping("/getAll")
    public List<User> getAll() {
    	return userService.getAll();
    }
    
    @RequestMapping("/getById")
    public User getById(@RequestParam(value="id", defaultValue="") String id) {
    	return userService.getById(Long.valueOf(id));
    }
}
