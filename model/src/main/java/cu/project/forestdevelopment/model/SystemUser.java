package cu.project.forestdevelopment.model;

import cu.project.forestdevelopment.repository.SystemUserRole;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "Customer")
@NoArgsConstructor

public class SystemUser {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Enumerated(EnumType.STRING) //With @Enumerated(EnumType.STRING), we can safely add new enum values or change our enum's order. However, renaming an enum value will still break the database data.
    private SystemUserRole userRole;

    public SystemUser(String firstName, String lastName, String email, String password, SystemUserRole userRole) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    }

    public SystemUserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(SystemUserRole userRole) {
        this.userRole = userRole;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
