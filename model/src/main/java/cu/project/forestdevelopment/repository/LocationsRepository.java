package cu.project.forestdevelopment.repository;

import cu.project.forestdevelopment.model.Locations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationsRepository extends JpaRepository<Locations, Long> {
}
