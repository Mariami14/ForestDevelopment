package cu.project.forestdevelopment.controller;


import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.service.SystemUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer-service-api")
@Slf4j
public class SystemUserController {

    @Autowired
    private SystemUserService systemUserService;

    @GetMapping("/findall")
    public List<SystemUser> findAll() {
        return systemUserService.findAll();
    }

    @PostMapping("/addsystemuser")
    public SystemUser addSystemUser(SystemUser systemUser) {
        //log.info("System uSer: {}", systemUser);
        return systemUserService.addSystemUser(systemUser);
    }
    // dasamatebelia yvelaarsebuli servisis kontrolerebi
    @GetMapping("/authentication")
     public Boolean authentication (SystemUser systemUser) {
        return systemUserService.authentication(systemUser.getUsername(), systemUser.getPassword());
    }
    @GetMapping("/update")
    public Boolean updateSystemUser (SystemUser systemUser){
        return systemUserService.updateSystemUser(systemUser);
    }


}

