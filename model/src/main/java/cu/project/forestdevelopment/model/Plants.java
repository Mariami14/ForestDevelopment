package cu.project.forestdevelopment.model;

import javax.persistence.*;

@Entity
@Table(name = "Plants")

public class Plants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String plantName;

    private String imageURL;


    public Plants(long id, String plantName, String location, int amount, int price, String image) {
        this.id = id;
        this.plantName = plantName;

    }

    public Plants() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPlantName() {
        return plantName;
    }

    public void setPlantName(String plantName) {
        this.plantName = plantName;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    @Override
    public String toString() {
        return "Plants{" +
                "id=" + id +
                ", plantName='" + plantName + '\'' +
                '}';
    }
}

