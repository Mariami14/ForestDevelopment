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
    public List<Locations> findLocations () {return locationsService.findLocations();}

    @PostMapping("/addlocations")
    public ResponseEntity addLocations (@RequestBody Locations locations) {
        try {
           return ResponseEntity.ok(locationsService.addLocations(locations));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PutMapping("/updatelocations")
     public  boolean updateLocations (@RequestBody Locations locations){
        return locationsService.updateLocations(locations);
    }
    @DeleteMapping("/deletelocations")
     public boolean deleteLocations (@RequestParam Long id){
        return locationsService.deleteLocations(id);
    }
}
