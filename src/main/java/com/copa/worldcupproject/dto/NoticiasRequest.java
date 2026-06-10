package com.copa.worldcupproject.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record NoticiasRequest(


@NotBlank(message = "Título obrigatório")
@Size(min = 3, max = 100)
String titulo,

@NotBlank(message = "Imagem obrigatória")
String imagem,

@NotBlank(message = "Conteúdo obrigatório")
String conteudo,

@NotNull(message = "Data obrigatória")
LocalDate diaPostagem


) {
}
