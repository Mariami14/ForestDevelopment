package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.model.Tasks;

import java.util.List;

public interface TasksService {

    Tasks addTasks (Tasks tasks) throws Exception;

    boolean updateTasks (Tasks tasks);

    boolean deleteTasks (Long id);

    List<Tasks> findTasks();

    boolean assignTask(Long systemUserId, Long taskId) throws Exception;
}
