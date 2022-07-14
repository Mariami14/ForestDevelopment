package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.model.Tasks;
import cu.project.forestdevelopment.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class TasksServiceImpl implements TasksService {

    @Autowired
    private TasksRepository tasksRepository;

    @Autowired
    private SystemUserRepository systemUserRepository;

    @Autowired
    private PlantsRepository plantsRepository;

    @Override
    public Tasks addTasks(Tasks tasks) throws Exception {
        if (tasks.getTaskName() == null || tasks.getTaskName().isEmpty()) {
            throw new Exception("Please indicate Task Name");
        }
        if (tasks.getDescription() == null || tasks.getDescription().isEmpty()) {
            throw new Exception("Please write the description for the task");
        }
        if (tasks.getAddress() == null) {
            throw new Exception("Please set correct location or plant name");
        }
        if (tasks.getPrice() == null) {
            throw new Exception("Please set correct price");
        }
        if (tasks.getPlants() == null) {
            throw new Exception("Please set correct plants");
        }

        tasks.setCreateTasksDate(new Date());
        tasks.setTasksStatus(TasksStatus.UNASSIGNED);
        tasks.setSystemUser(null);
        tasks.setVolunteer(null);

        return tasksRepository.save(tasks);
    }
    @Transactional
    @Override
    public boolean updateTasks(Tasks tasks) {
        Tasks oldTasks = tasksRepository.findById(tasks.getId()).orElse(null);
        oldTasks.setTaskName(tasks.getTaskName());
        oldTasks.setPrice(tasks.getPrice());
        oldTasks.setDescription(tasks.getDescription());
        oldTasks.setPlants(tasks.getPlants());
        oldTasks.setAddress(tasks.getAddress());
        return true;
    }

    @Override
    public boolean deleteTasks(Long id) {
        try {
            tasksRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<Tasks> findTasks() {

        return tasksRepository.findAll();
    }

    @Override
    public boolean assignTask(Long systemUserId, Long taskId) throws Exception {
        SystemUser userFromDB = systemUserRepository.findById(systemUserId).orElse(null); //systemuser is id mogvaq chven bazidan
        Tasks taskFromDB = tasksRepository.findById(taskId).orElse(null);


        if (userFromDB == null || taskFromDB == null) {
            throw new Exception("User or Task not found");
        }


        if (userFromDB.getUserRole() == SystemUserRole.USER && userFromDB.getBalance() - taskFromDB.getPrice() >= 0) {
            if (userFromDB.getTask() == null || taskFromDB.getSystemUser() == null) { //minichebamde vamowmebt task aqvs tu ara, ert users erti task
                userFromDB.setTask(taskFromDB);
                taskFromDB.setSystemUser(userFromDB);
                taskFromDB.setTasksStatus(TasksStatus.PURCHASED);
                return true;
            }
            throw new Exception("User already has assigned task");
        } else if (userFromDB.getUserRole() == SystemUserRole.USER && userFromDB.getBalance() - taskFromDB.getPrice() < 0) {
            throw new Exception("You don't have enough balance");
        }

        if (userFromDB.getUserRole() == SystemUserRole.VOLUNTEER) {
            if (userFromDB.getTask() == null || taskFromDB.getSystemUser() == null) {
                userFromDB.setTask(taskFromDB);
                taskFromDB.setVolunteer(userFromDB);
                taskFromDB.setTasksStatus(TasksStatus.IN_PROGRESS);
                return true;
            }
            throw new Exception("Volunteer already has assigned task");
        }

        return false;
    }

    @Override
    public boolean unAssignTask(Long systemUserId, Long taskId) throws Exception {
        SystemUser userFromDB = systemUserRepository.findById(systemUserId).orElse(null);
        Tasks taskFromDB = tasksRepository.findById(taskId).orElse(null);

        if (userFromDB == null || taskFromDB == null) {
            throw new Exception("User or Task not found");
        }

        if (userFromDB.getUserRole() == SystemUserRole.USER) {
            if (userFromDB.getTask() != null && taskFromDB.getSystemUser() != null && taskFromDB.getVolunteer() == null) { //minichebamde vamowmebt task aqvs tu ara, ert users erti task
                userFromDB.setTask(null);
                taskFromDB.setSystemUser(null);
                taskFromDB.setTasksStatus(TasksStatus.UNASSIGNED);
                return true;
            }
            throw new Exception("you can't unassigned this task");
        }

        if (userFromDB.getUserRole() == SystemUserRole.VOLUNTEER) {
            if (userFromDB.getTask() != null && taskFromDB.getVolunteer() != null) {
                userFromDB.setTask(null);
                taskFromDB.setVolunteer(null);
                taskFromDB.setTasksStatus(TasksStatus.PURCHASED);
                return true;
            }
            throw new Exception("Volunteer already has assigned task");
        }

        return false;
    }

    @Override
    public boolean finishTask(Long taskId) {
        Tasks task = tasksRepository.getById(taskId);
        SystemUser volunteer = systemUserRepository.getById(task.getVolunteer().getId());
        SystemUser systemUser = systemUserRepository.getById(task.getSystemUser().getId());
        if (task.getTasksStatus() == TasksStatus.IN_PROGRESS) {
            volunteer.setTask(null);
            systemUser.setTask(null);
            task.setSystemUser(null);
            task.setVolunteer(null);
            task.setTasksStatus(TasksStatus.DONE);
            return true;
        }
        return false;
    }
}


