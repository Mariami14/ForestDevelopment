package cu.project.forestdevelopment.service;

import cu.project.forestdevelopment.model.Locations;
import cu.project.forestdevelopment.repository.LocationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LocationsServiceImpl implements LocationsService{

    @Autowired LocationsRepository locationsRepository;

    @Override
    public Locations addLocations(Locations locations) throws Exception{
        System.out.println("Please Enter Address Correctly");
        if (locations.getAddress()== null){
            throw new Exception("Please Enter address, required field");
        }
        if (locations.getCreateLocationsDate()== null){
            throw new Exception("Please Enter Date of Creation, required field");
        }
        return locationsRepository.save(locations);
    }
    @Transactional
    @Override
    public boolean updateLocations(Locations locations) {
        Locations oldLocation = locationsRepository.findById(locations.getId()).orElse(null);
        oldLocation.setAddress(locations.getAddress());
        oldLocation.setCreateLocationsDate(locations.getCreateLocationsDate());
        return true;
    }

    @Override
    public boolean deleteLocations(Long id) {
        try {
            locationsRepository.deleteById(id);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Locations> findLocations() {
        return locationsRepository.findAll();
    }
}
