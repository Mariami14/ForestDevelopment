package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import org.springframework.stereotype.Service;

import java.util.List;

public interface SystemUserService {

    List<SystemUser> findAll();

    SystemUser addSystemUser(SystemUser systemUser);

}
