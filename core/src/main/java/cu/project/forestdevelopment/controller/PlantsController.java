package cu.project.forestdevelopment.controller;


import cu.project.forestdevelopment.model.Plants;
import cu.project.forestdevelopment.service.PlantsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plants-service-api")
public class PlantsController {
    @Autowired
    private PlantsService plantsService;

    @PostMapping("/addplant")
    public Plants addPlants (Plants plants) throws Exception{
        return plantsService.addPlants(plants);
    }

    @PutMapping("/updateplant")
    public boolean updatePlants (Plants plants){
        return plantsService.updatePlants(plants);
    }

    @DeleteMapping("/deletemapping")
    public boolean deletePlants(Long id){
        return plantsService.deletePlants(id);
    }

    @GetMapping("/findplants")
    public List<Plants> findplants() {
        return plantsService.findPlants();
    }


}
