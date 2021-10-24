package org.project.EcommApp.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(unique=true)
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private boolean active;
    private String roles;

    public Client(Long id) {
        this.id = id;
    }
}
