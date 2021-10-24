package org.project.EcommApp.services;

import javassist.NotFoundException;
import org.project.EcommApp.entities.Client;
import org.project.EcommApp.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public Client loadByEmail(String email) throws NotFoundException {
        return clientRepository.findByEmail(email)
                .orElseThrow(()->{return new NotFoundException("Client not found with e-mail: "+email);});
    }
}
