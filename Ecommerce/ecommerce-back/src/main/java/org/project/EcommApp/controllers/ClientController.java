package org.project.EcommApp.controllers;

import javassist.NotFoundException;
import org.project.EcommApp.entities.Client;
import org.project.EcommApp.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("client")

public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping("/load-client/{email}")
    public Client loadClient(@PathVariable String email) throws NotFoundException {
        return clientService.loadByEmail(email);
    }

}