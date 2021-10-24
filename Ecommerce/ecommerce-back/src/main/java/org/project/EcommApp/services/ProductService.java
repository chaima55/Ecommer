package org.project.EcommApp.services;

import javassist.NotFoundException;
import org.project.EcommApp.entities.Product;
import org.project.EcommApp.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Page<Product> loadByCategoryId(Long id, Pageable pageable) {
       Page<Product> page = productRepository.findByCategoryId(id, pageable);
        return page;
    }

    public Product loadById(long id) throws NotFoundException {
        return productRepository.findById(id)
                .orElseThrow(()->{return new NotFoundException("Product not found with id: "+id);});
    }
    public Page<Product> loadByName(String Name, Pageable pageable) throws NotFoundException {
        return productRepository.findByNameContaining(Name, pageable);
    }

//    public void save(Product product) {
//        productRepository.save(product);
//    }
//
//    public void delete(long id) {
//        productRepository.deleteById(id);
//    }
}
