package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import org.springframework.stereotype.Service;

import java.util.List;

public interface SystemUserService {

    Boolean authentication(String userName, String password);

    List<SystemUser> findAll();

    SystemUser addSystemUser(SystemUser systemUser);

    Boolean updateSystemUser(SystemUser systemUser);


}
