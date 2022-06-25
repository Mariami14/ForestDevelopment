package cu.project.forestdevelopment.controller;


import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.service.SystemUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer-service-api")
public class SystemUserController {

    @Autowired
    private SystemUserService systemUserService;

    @GetMapping("/findall")
    public List<SystemUser> findAll() {
        return systemUserService.findAll();
    }

    @PostMapping("/addsystemuser")
    public ResponseEntity addSystemUser(@RequestBody SystemUser systemUser) {
        try {
            return ResponseEntity.ok(systemUserService.addSystemUser(systemUser));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping( "/authentication")
     public ResponseEntity authentication (@RequestParam String username,@RequestParam String password) throws Exception {
        return systemUserService.authentication(username, password); }

    @PutMapping("/updatesystemuser")
    public Boolean updateSystemUser (@RequestBody SystemUser systemUser){
        return systemUserService.updateSystemUser(systemUser);
    }

    @DeleteMapping("/deletesystemuser")
    public Boolean deleteSystemUser (@RequestParam Long id) {return  systemUserService.deleteSystemUser(id); }
//todo response entity ebia dasamatebeli


}

