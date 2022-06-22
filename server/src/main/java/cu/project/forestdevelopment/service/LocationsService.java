package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.Locations;

import java.util.List;

public interface LocationsService {

    Locations addLocations(Locations locations);

    boolean updateLocations(Locations locations);

    boolean deleteLocations(Long id);

    List<Locations> findLocations();
}
