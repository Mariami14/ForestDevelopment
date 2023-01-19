package cu.project.forestdevelopment.controller;


import cu.project.forestdevelopment.AssaigneDto;
import cu.project.forestdevelopment.model.SystemUser;
import cu.project.forestdevelopment.model.Tasks;
import cu.project.forestdevelopment.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/tasks-service-api")
public class TasksController {
    @Autowired
    private TasksService tasksService;

    @PostMapping("/addtasks")
    public ResponseEntity addTasks(@RequestBody Tasks tasks) throws Exception {
        try {
            return ResponseEntity.ok(tasksService.addTasks(tasks));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @PutMapping("/updatetasks")
    public ResponseEntity updateTasks(@RequestBody Tasks tasks) throws Exception {
        try {
            return ResponseEntity.ok(tasksService.updateTasks(tasks));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/deletetasks")
    public ResponseEntity deleteTasks(@RequestParam Long id) throws Exception {
        try {
            return ResponseEntity.ok(tasksService.deleteTasks(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/findtasks")
    public ResponseEntity findtasks() throws Exception {
        try {
            return ResponseEntity.ok(tasksService.findTasks());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/assign-task")
    public ResponseEntity assignTask(@RequestBody AssaigneDto assaigneDto) throws Exception {
        try {
            return ResponseEntity.ok(tasksService.assignTask(assaigneDto.systemUserId, assaigneDto.taskId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping("/unassign-task")
    public ResponseEntity unAssignTask (@RequestBody AssaigneDto assaigneDto) throws Exception{
        try {
            return ResponseEntity.ok(tasksService.unAssignTask(assaigneDto.systemUserId, assaigneDto.taskId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/finish-task/{taskId}")
    public ResponseEntity finishTask(@PathVariable Long taskId) throws Exception{
        try {
            return ResponseEntity.ok(tasksService.finishTask(taskId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping("/finish-task")
    public ResponseEntity finishTask (@RequestParam Long taskId) throws Exception{
        try {
            return ResponseEntity.ok(tasksService.finishTask(taskId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
