package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.Plants;

import java.util.List;

public interface PlantsService {

    Plants addPlants (Plants plants) throws Exception;

    boolean updatePlants (Plants plants);

    boolean deletePlants(Long id);

    List<Plants> findPlants();
}
