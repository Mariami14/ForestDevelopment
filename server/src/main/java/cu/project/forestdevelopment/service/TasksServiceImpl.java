package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.Locations;
import cu.project.forestdevelopment.model.Plants;
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

    @Autowired
    private LocationsRepository locationsRepository;

    @Override
    public Tasks addTasks(Tasks tasks) throws Exception {
        if (tasks.getTaskName() == null || tasks.getTaskName().isEmpty()) {
            throw new Exception("Please indicate Task Name");
        }
        if (tasks.getDescription() == null || tasks.getDescription().isEmpty()) {
            throw new Exception("Please write the description for the task");
        }
        if (tasks.getLocations() == null || tasks.getPlants() == null) {
            throw new Exception("Please set correct location or plant name");
        }
        if (tasks.getPrice() == null) {
            throw new Exception("Please set correct price");
        }
        tasks.getTasksStatus(TasksStatus.UNASSIGNED);

        /*Plants plantFromDB = plantsRepository.findById(tasks.getPlants())
        Locations locationFromDB = locationsRepository.findById(locationId).orElse(null);
        if (plantFromDB == null || locationFromDB == null) {
            throw new Exception("Plant or Location not found");
        }*/

        tasks.setCreateTasksDate(new Date());
        tasksRepository.save(tasks);
        return null;
    }
    @Transactional
    @Override
    public boolean updateTasks(Tasks tasks) {
        Tasks oldTasks = tasksRepository.findById(tasks.getId()).orElse(null);
        oldTasks.setTaskName(tasks.getTaskName());
        oldTasks.setPrice(tasks.getPrice());
        oldTasks.setDescription(tasks.getDescription());
        oldTasks.setSystemUser(tasks.getSystemUser()); // todo systemuserze davtovo??????????????
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
                return true;
            }
            throw new Exception("User already has assigned task");
        } else if (userFromDB.getUserRole() == SystemUserRole.USER && userFromDB.getBalance() - taskFromDB.getPrice() < 0
            /* || plantFromDB.getAmount() * plantFromDB.getPrice() < userFromDB.getBalance()*/) {//todo am vels ra vuyot?
            throw new Exception("You don't have enough balance");
        }

        if (userFromDB.getUserRole() == SystemUserRole.VOLUNTEER) {
            if (userFromDB.getTask() == null || taskFromDB.getSystemUser() == null) {
                userFromDB.setTask(taskFromDB);
                taskFromDB.setSystemUser(userFromDB);
            if (userFromDB.getUserRole() == TasksStatus.)// tu task ar aqvs aris assigned an in progress, in progress tu aris assigned  mara araa done
                //aq enicheba statusi set status unassign/assign
                return true;
            }
            throw new Exception("Volunteer already has assigned task");
        }

        return false;
    }

    @Override
    public boolean unAssignTask(Long systemUserId, Long taskId) throws Exception {
        return false;
    }
}
//todo 1. taskebis implementacia + 2. assign msgavsi metodis shemogeba rom unassign qnas da mere nullzwe shemowmdes?
//todo volonteer vumatebt feedback is vels
//todo NIKAS MOWERILEBI CHATSHI
//todo tasks emateba axali field status da enums klasi davamatot in progress, done, unassigned
//todo metodi romelic gadaiyvans statusebshi , marto volonteer gaauqmebs tasks - lanam marto volonteer gauketos unassign
//todo funqcionali avuxsnat lanas, tu sistemashi shedis volonteer ar uchandes pasi gaitvaliswinos

