package cu.project.forestdevelopment.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Locations")

public class Locations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    private String address;

    private Date createLocationsDate;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getCreateLocationsDate() {
        return createLocationsDate;
    }

    public void setCreateLocationsDate(Date createLocationsDate) {
        this.createLocationsDate = createLocationsDate;
    }


    @Override
    public String toString() {
        return "Locations{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", createLocationsDate=" + createLocationsDate +
                '}';
    }
}
