package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.repository.SystemUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SystemUserServiceImpl implements SystemUserService {

    @Autowired
    private SystemUserRepository systemUserRepository;

    @Override
    public ResponseEntity authentication(String userName, String password) throws Exception {
        SystemUser systemUser = systemUserRepository.findSystemUserByUsername(userName);
        if (systemUser == null || !systemUser.getPassword().equals(password)) {
            return ResponseEntity.badRequest().body("Wrong Password");
        }
        return ResponseEntity.ok(systemUser);

    }

    @Override
    public List<SystemUser> findAll() {
        return systemUserRepository.findAll();
    }

    @Override
    public SystemUser addSystemUser(SystemUser systemUser) throws Exception {
            if    (systemUser.getFirstName() == null
                || systemUser.getLastName() == null
                || systemUser.getEmail() == null
                || systemUser.getPassword() == null
                || systemUser.getUsername() == null
                || systemUser.getFirstName().isEmpty()
                || systemUser.getLastName().isEmpty()
                || systemUser.getEmail().isEmpty()
                || systemUser.getPassword().isEmpty()
                || systemUser.getUsername().isEmpty())
        {
            throw new Exception("UsersFillAllFieldsValidation");

        } else if (systemUserRepository.findSystemUserByUsername(systemUser.getUsername()) != null ) {
            throw new Exception("Username is already used");
        } else {
            systemUser.setBalance(0.0);
            systemUser.setTask(null);
            systemUserRepository.save(systemUser);
            return systemUser;
        }
    }
    @Transactional
    @Override
    public Boolean updateSystemUser(SystemUser systemUser) { // systemuser aris lanas gadmocemuli obj bazidan rac tipma
        // im momentshi chawera olduser aqamde rac ewera
        SystemUser oldSystemUser = systemUserRepository.findById(systemUser.getId()).orElse(null);
        oldSystemUser.setUsername(systemUser.getUsername());
        oldSystemUser.setFirstName(systemUser.getFirstName()); // transactional am manipulaciebis temashi shuashi rom moxdes
        // yvela veli unda iyos chasetili old-Shi axalidan (lanas gadmocemulidan)
        return true;
    }

    @Override
    public Boolean deleteSystemUser(Long id) {
        try {
            systemUserRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
