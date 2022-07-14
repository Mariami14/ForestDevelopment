package cu.project.forestdevelopment.model;

import javax.persistence.*;

@Entity
@Table(name = "Plants")

public class Plants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String plantName;

    private String location;

    private int amount;

    private int price;

    //todo potoa dasamatebeli



    public Plants(long id, String plantName, String location, int amount, int price, String image) {
        this.id = id;
        this.plantName = plantName;
        this.location = location;
        this.amount = amount;
        this.price = price;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


    @Override
    public String toString() {
        return "Plants{" +
                "id=" + id +
                ", plantName='" + plantName + '\'' +
                ", location='" + location + '\'' +
                ", amount=" + amount +
                ", price=" + price +
                '}';
    }
}

