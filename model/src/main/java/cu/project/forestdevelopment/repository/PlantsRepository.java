package cu.project.forestdevelopment.repository;

import cu.project.forestdevelopment.model.Plants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PlantsRepository extends JpaRepository <Plants,Long> {
  Plants findPlantsByPlantName (String plantName);
  Plants findPlantsByLocation (String Location);
  Plants findByAmount (int amount);
  Plants findByPrice (int price);
}
