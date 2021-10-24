package org.project.EcommApp.repositories;

import org.project.EcommApp.entities.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FactureRepository extends JpaRepository<Facture, Long> {
    List<Facture> findByClientId(long id);
}
