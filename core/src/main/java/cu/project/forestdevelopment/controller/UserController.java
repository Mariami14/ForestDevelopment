package cu.project.forestdevelopment.controller;


import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.service.SystemUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer-service-api")
public class UserController {

    @Autowired
    private SystemUserService userService;

    @GetMapping("/finall")
    public List<SystemUser> findAll() {
        return userService.findAll();
    }

}

