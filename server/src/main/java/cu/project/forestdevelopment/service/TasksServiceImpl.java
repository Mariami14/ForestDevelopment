package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.model.Tasks;
import cu.project.forestdevelopment.repository.SystemUserRepository;
import cu.project.forestdevelopment.repository.SystemUserRole;
import cu.project.forestdevelopment.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TasksServiceImpl implements TasksService{

    @Autowired
    private TasksRepository tasksRepository;

    @Autowired
    private SystemUserRepository systemUserRepository;

    @Override
    public Tasks addTasks(Tasks tasks) throws Exception {
        if (tasks.getTaskName() == null || tasks.getTaskName().isEmpty()){
            throw new Exception("Please indicate Task Name");}
        if (tasks.getDescription() == null || tasks.getDescription().isEmpty()){
            throw new Exception("Please write the description for the task"); }
        // todo datebis validacia
        tasks.setCreateTasksDate(new Date());
        tasksRepository.save(tasks); //todo
        return null;
    }
//todo dasamtavrebeli implement tasks
    @Override
    public boolean updateTasks(Tasks tasks) {
        return false;
    }

    @Override
    public boolean deleteTasks(Long id) {
        return false;
    }

    @Override
    public List<Tasks> findTasks() {
        return null;
    }

    @Override
    public boolean assignTask(Long systemUserId, Long taskId) throws Exception{
        SystemUser userFromDB = systemUserRepository.findById(systemUserId).orElse(null); //systemuser is id mogvaq chven bazidan
        Tasks taskFromDb = tasksRepository.findById(taskId).orElse(null);

        if (userFromDB == null || taskFromDb == null) {
            throw new Exception("User or Task not found");
        }

        if (userFromDB.getUserRole() == SystemUserRole.USER && userFromDB.getBalance() - taskFromDb.getPrice() >= 0) {
            if (userFromDB.getTask() == null || taskFromDb.getSystemUser() == null){ //minichebamde vamowmebt task aqvs tu ara, ert users erti task
                userFromDB.setTask(taskFromDb);
                taskFromDb.setSystemUser(userFromDB);
                return true;
            }
            throw new Exception("User already has assigned task");
        } else if (userFromDB.getUserRole() == SystemUserRole.USER && userFromDB.getBalance() - taskFromDb.getPrice() < 0) {
            throw new Exception("not enough money");
        }

        if (userFromDB.getUserRole() == SystemUserRole.VOLUNTEER) {
            if (userFromDB.getTask() == null || taskFromDb.getSystemUser() == null) {
                userFromDB.setTask(taskFromDb);
                taskFromDb.setSystemUser(userFromDB);
                return true;
            }
            throw new Exception("Volunteer already has assigned task");
        }

        return false;
    }
}
//todo 1. taskebis implementacia 2. assign msgavsi metodis shemogeba rom unassign qnas da mere null
//todo tasks emateba axali field status da enums klasi davamatot in progress, done, unassigned
//todo
