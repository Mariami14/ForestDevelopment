package cu.project.forestdevelopment.controller;


import cu.project.forestdevelopment.model.Plants;
import cu.project.forestdevelopment.service.PlantsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plants-service-api")
public class PlantsController {
    @Autowired
    private PlantsService plantsService;

    @PostMapping("/addplant")
    public ResponseEntity addPlants (@RequestBody Plants plants) throws Exception{
        try {
            return ResponseEntity.ok(plantsService.addPlants(plants));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/updateplant")
    public boolean updatePlants (@RequestBody Plants plants){
        return plantsService.updatePlants(plants);
    }

    @DeleteMapping("/deletemapping")
    public boolean deletePlants(@RequestParam Long id){
        return plantsService.deletePlants(id);
    }

    @GetMapping("/findplants")
    public List<Plants> findplants() {
        return plantsService.findPlants();
    }

// todo pagination
}
