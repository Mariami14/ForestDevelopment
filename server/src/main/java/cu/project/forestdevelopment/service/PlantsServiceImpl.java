package cu.project.forestdevelopment.service;


import cu.project.forestdevelopment.model.Plants;
import cu.project.forestdevelopment.repository.PlantsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PlantsServiceImpl implements PlantsService{

    @Autowired
    private PlantsRepository plantsRepository;

    @Override
    public Plants addPlants(Plants plants) throws Exception{

        return plantsRepository.save(plants);
    }
    @Transactional
    @Override
    public boolean updatePlants(Plants plants) {
        Plants oldPlants = plantsRepository.findById(plants.getId()).orElse(null);
        oldPlants.setPlantName(plants.getPlantName());
        oldPlants.setLocation(plants.getLocation());
        return true;
    }

    @Override
    public boolean deletePlants(Long id) {
        try {
            plantsRepository.deleteById(id);
            return true;
        } catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Plants> findPlants() {
        return plantsRepository.findAll();

    }
}
