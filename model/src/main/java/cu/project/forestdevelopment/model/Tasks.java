package cu.project.forestdevelopment.model;

import cu.project.forestdevelopment.repository.TasksStatus;

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

    private String address;

    private Date createTasksDate;

    private Double price;

    @OneToOne
    private Plants plants;

    @OneToOne
    private SystemUser volunteer;

    @OneToOne
    private SystemUser systemUser;

    @Enumerated(EnumType.STRING)
    private TasksStatus tasksStatus;


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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public SystemUser getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(SystemUser volunteer) {
        this.volunteer = volunteer;
    }

    public SystemUser getSystemUser() {
        return systemUser;
    }

    public void setSystemUser(SystemUser systemUser) {
        this.systemUser = systemUser;
    }

    public TasksStatus getTasksStatus() {
        return tasksStatus;
    }

    public void setTasksStatus(TasksStatus tasksStatus) {
        this.tasksStatus = tasksStatus;
    }

    public Plants getPlants() {
        return plants;
    }

    public void setPlants(Plants plants) {
        this.plants = plants;
    }
}
