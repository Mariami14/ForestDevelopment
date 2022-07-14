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
    public ResponseEntity updatePlants (@RequestBody Plants plants) throws Exception{
        try {
            return ResponseEntity.ok(plantsService.updatePlants(plants));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/deleteplants")
    public ResponseEntity deletePlants(@RequestParam Long id) throws Exception{
        try {
            return ResponseEntity.ok(plantsService.deletePlants(id));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/findplants")
    public ResponseEntity findplants() throws Exception{
        try {
            return ResponseEntity.ok(plantsService.findPlants());
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
