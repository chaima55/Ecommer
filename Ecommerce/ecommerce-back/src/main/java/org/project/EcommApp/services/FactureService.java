package org.project.EcommApp.services;

import org.project.EcommApp.dto.FactureDto;
import org.project.EcommApp.entities.Facture;
import org.project.EcommApp.repositories.FactureRepository;
import org.project.EcommApp.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FactureService {

    @Autowired
    private FactureRepository factureRepository;

    public List<FactureDto> loadList(long id) {
        List<Facture> factures = factureRepository.findByClientId(id);
        List<FactureDto> factureDtoList = new ArrayList<>();
        for (Facture f : factures)
            factureDtoList.add(new FactureDto(f));
        return factureDtoList;
    }

    public void save(FactureDto factureDto, long id) {
        Facture facture = new Facture(factureDto);
        facture.setClient(new Client(id));
        factureRepository.save(facture);
    }
}
