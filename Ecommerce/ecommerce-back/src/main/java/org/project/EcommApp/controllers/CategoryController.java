package org.project.EcommApp.controllers;

import org.project.EcommApp.entities.Category;
import javassist.NotFoundException;
import org.project.EcommApp.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("load-list")
    public List<Category> loadList() {
        return categoryService.loadList();
    }
}
