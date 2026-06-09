package com.copa.worldcupproject.Mappers;


import com.copa.worldcupproject.Entities.Noticias;
import com.copa.worldcupproject.dto.NoticiasRequest;
import com.copa.worldcupproject.dto.NoticiasResponse;

public class NoticiasMapper {

    public static Noticias toEntity(NoticiasRequest request) {

        Noticias n = new Noticias();

        n.setTitulo(request.titulo());
        n.setImagem(request.imagem());
        n.setConteudo(request.conteudo());
        n.setDiaPostagem(request.diaPostagem());

        return n;
    }

    public static NoticiasResponse toDTO(Noticias noticias) {
        return new NoticiasResponse(
                noticias.getId(),
                noticias.getTitulo(),
                noticias.getImagem(),
                noticias.getConteudo(),
                noticias.getDiaPostagem()
        );
    }
}
