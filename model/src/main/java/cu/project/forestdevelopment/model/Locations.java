package cu.project.forestdevelopment.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Locations")

public class Locations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    private String address;

    private Date createDate;

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

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    @Override
    public String toString() {
        return "Locations{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", createDate=" + createDate +
                '}';
    }
}
