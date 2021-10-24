package org.project.EcommApp.services;

import org.project.EcommApp.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.project.EcommApp.repositories.CategoryRepository;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> loadList() {
        return categoryRepository.findAll();
    }
}
