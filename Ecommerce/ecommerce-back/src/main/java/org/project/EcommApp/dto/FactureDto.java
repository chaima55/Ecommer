package org.project.EcommApp.dto;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.project.EcommApp.entities.Facture;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class FactureDto {
    private Long id;
    private Double totalPrice;
    private Long totalProducts;
    private LocalDate date;

    public FactureDto(Facture facture) {
        id = facture.getId();
        totalPrice = facture.getTotalPrice();
        totalProducts = facture.getTotalProducts();
        date = facture.getDate();
    }
}
