package cu.project.forestdevelopment.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Tasks")

public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String TaskName;

    private String description;

    private Date createTasksDate;

    private Double price;

    @OneToOne
    private Plants plants;

    @OneToOne
    private SystemUser systemUser;

    //todo Locations id da plants id rogorc foreign key agvnishno da davajoino?

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskName() {
        return TaskName;
    }

    public void setTaskName(String taskName) {
        TaskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreateTasksDate() {
        return createTasksDate;
    }

    public void setCreateTasksDate(Date createTasksDate) {
        this.createTasksDate = createTasksDate;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public SystemUser getSystemUser() {
        return systemUser;
    }

    public void setSystemUser(SystemUser systemUser) {
        this.systemUser = systemUser;
    }
}
