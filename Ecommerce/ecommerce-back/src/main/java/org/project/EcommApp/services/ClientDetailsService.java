package org.project.EcommApp.services;



import org.project.EcommApp.repositories.ClientRepository;
import org.project.EcommApp.entities.ClientDetails;
import org.project.EcommApp.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClientDetailsService implements UserDetailsService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public ClientDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Client> client = clientRepository.findByEmail(email);
        client.orElseThrow(() -> new UsernameNotFoundException("Client not found with e-mail: "+email));
        return client.map(ClientDetails::new).get();
    }

}
