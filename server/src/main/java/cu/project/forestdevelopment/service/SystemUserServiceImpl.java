package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.repository.SystemUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SystemUserServiceImpl implements SystemUserService {

    @Autowired
    private SystemUserRepository systemUserRepository;

    @Override
    public Boolean authentication(String userName, String password) {
        SystemUser systemUser = systemUserRepository.findSystemUserByUsername(userName);
        return systemUser.getPassword().equals(password);
    }

    @Override
    public List<SystemUser> findAll() {
        return systemUserRepository.findAll();
    }

    @Override
    public SystemUser addSystemUser(SystemUser systemUser) {
        return systemUserRepository.save(systemUser);
    }

    @Override
    @Transactional
    public Boolean updateSystemUser(SystemUser systemUser) { // systemuser aris lanas gadmocemuli obj bazidan rac tipma
        // im momentshi chawera olduser aqamde rac ewera
        SystemUser oldSystemUser = systemUserRepository.findById(systemUser.getId()).orElse(null);
        oldSystemUser.setUsername(systemUser.getUsername());
        oldSystemUser.setFirstName(systemUser.getFirstName()); // transactional am manipulaciebis temashi shuashi rom moxdes
        // yvela veli unda iyos chasetili old-Shi axalidan (lanas gadmocemulidan)
        return true;
    }
}
