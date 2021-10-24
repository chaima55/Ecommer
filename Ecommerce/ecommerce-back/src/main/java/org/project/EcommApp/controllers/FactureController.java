package org.project.EcommApp.controllers;

import org.project.EcommApp.dto.FactureDto;
import org.project.EcommApp.services.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/facture")
public class FactureController {
    @Autowired
    private FactureService factureService;

    @GetMapping("/{id}")
    public List<FactureDto> loadList(@PathVariable long id) {
        return factureService.loadList(id);
    }

    @PostMapping("{id}")
    public void save(@RequestBody FactureDto factureDto, @PathVariable long id) {
        factureService.save(factureDto, id);
    }
}
