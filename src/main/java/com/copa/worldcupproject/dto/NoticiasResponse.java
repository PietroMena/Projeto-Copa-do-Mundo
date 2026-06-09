package com.copa.worldcupproject.dto;

import java.time.LocalDate;

public record NoticiasResponse(
        Long id,
        String titulo,
        String imagem,
        String conteudo,
        LocalDate diaPostagem
    ) {

}
