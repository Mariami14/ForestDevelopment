package cu.project.forestdevelopment.controller;

import cu.project.forestdevelopment.model.Locations;
import cu.project.forestdevelopment.service.LocationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locations-service-api")

public class LocationsController {

    @Autowired
    private LocationsService locationsService;

    @GetMapping("/findall")
    public ResponseEntity findLocations() throws Exception{
        try {
            return ResponseEntity.ok(locationsService.findLocations());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/addlocations")
    public ResponseEntity addLocations(@RequestBody Locations locations) throws Exception{
        try {
            return ResponseEntity.ok(locationsService.addLocations(locations));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/updatelocations")
    public ResponseEntity updateLocations(@RequestBody Locations locations) throws Exception{
        try {
            return ResponseEntity.ok(locationsService.updateLocations(locations));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/deletelocations")
    public ResponseEntity deleteLocations(@RequestParam Long id) throws Exception{

        try {
            return ResponseEntity.ok(locationsService.deleteLocations(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
