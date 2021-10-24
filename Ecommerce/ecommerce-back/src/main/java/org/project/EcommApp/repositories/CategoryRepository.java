package org.project.EcommApp.repositories;


import org.project.EcommApp.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
