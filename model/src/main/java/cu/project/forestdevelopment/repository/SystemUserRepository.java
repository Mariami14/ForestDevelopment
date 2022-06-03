package cu.project.forestdevelopment.repository;

import cu.project.forestdevelopment.model.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SystemUserRepository extends JpaRepository<SystemUser,Long> {
     SystemUser findSystemUserByUsername(String username); // lanas gadocemuli filtristvis specifiuri search bazis select
     SystemUser findSystemUserByLastNameAndFirstName(String lastName, String firstName);
}
