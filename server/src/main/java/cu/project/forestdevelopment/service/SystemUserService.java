package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface SystemUserService {

    ResponseEntity authentication(String userName, String password) throws Exception;

    List<SystemUser> findAll();

    SystemUser addSystemUser(SystemUser systemUser) throws Exception;

    Boolean updateSystemUser(SystemUser systemUser);

    Boolean deleteSystemUser (Long id);




}
