package cu.project.forestdevelopment.repository;

import cu.project.forestdevelopment.model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TasksRepository extends JpaRepository<Tasks,Long> {
}
