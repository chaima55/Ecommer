package org.project.EcommApp.controllers;

import javassist.NotFoundException;
import org.project.EcommApp.entities.Product;
import org.project.EcommApp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/load-list")
    public Page<Product> loadListByCategoryId(@RequestParam("id") Long id, Pageable pageable) {
        return productService.loadByCategoryId(id, pageable);
    }

    @GetMapping("/load-one/{id}")
    public Product loadList(@PathVariable long id) throws NotFoundException {
        return productService.loadById(id);
    }

    @GetMapping("/load-list-name")
    public Page<Product> loadByName(@RequestParam("name") String name, Pageable pageable) throws NotFoundException {
        return productService.loadByName(name, pageable);
    }


//    @PostMapping("/save")
//    public void save(@RequestBody Product product) {
//        productService.save(product);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public void delete(@PathVariable long id) {
//        productService.delete(id);
//    }
}