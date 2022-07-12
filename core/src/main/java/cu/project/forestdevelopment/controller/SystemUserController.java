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
    public ResponseEntity findAll() throws Exception{
        try {
            return ResponseEntity.ok(systemUserService.findAll());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/addsystemuser")
    public ResponseEntity addSystemUser(@RequestBody SystemUser systemUser) throws Exception{
        try {
            return ResponseEntity.ok(systemUserService.addSystemUser(systemUser));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping("/authentication")
    public ResponseEntity authentication(@RequestParam String username, @RequestParam String password) throws Exception {
        try {
            return ResponseEntity.ok(systemUserService.authentication(username, password));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/updatesystemuser")
    public ResponseEntity updateSystemUser(@RequestBody SystemUser systemUser) throws Exception {
        try {
            return ResponseEntity.ok(systemUserService.updateSystemUser(systemUser));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/deletesystemuser")
    public ResponseEntity deleteSystemUser(@RequestParam Long id) throws Exception {
        try {
            return ResponseEntity.ok(systemUserService.deleteSystemUser(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}

