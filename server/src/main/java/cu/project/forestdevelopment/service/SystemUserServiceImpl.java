package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.repository.SystemUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SystemUserServiceImpl implements SystemUserService {

    @Autowired
    private SystemUserRepository systemUserRepository;

    @Override
    public List<SystemUser> findAll() {
        return systemUserRepository.findAll();
    }

    @Override
    public SystemUser addSystemUser(SystemUser systemUser) {
        return systemUserRepository.save(systemUser);
    }
}
