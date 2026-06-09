package com.copa.worldcupproject.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.copa.worldcupproject.Entities.Noticias;
import com.copa.worldcupproject.Mappers.NoticiasMapper;
import com.copa.worldcupproject.Repositories.NoticiasRepository;
import com.copa.worldcupproject.dto.NoticiasRequest;
import com.copa.worldcupproject.dto.NoticiasResponse;

import jakarta.persistence.EntityNotFoundException;

@Service
public class NoticiasService {
    @Autowired
    private NoticiasRepository repository;

    public List<NoticiasResponse> findAll() {
        return repository.findAll()
                        .stream()
                        .map(NoticiasMapper::toDTO)
                        .toList();
    }

    public NoticiasResponse findById (long id) {
        return repository.findById(id)
                        .map(NoticiasMapper::toDTO)
                        .orElseThrow(() -> new EntityNotFoundException("Noticia não cadastrada"));
    }

    
    public void deleteById(Long id)
    {
        if(repository.existsById(id))
            repository.deleteById(id);
        else
           throw new EntityNotFoundException("Notícia não cadastrada");
    }

    public NoticiasResponse save(NoticiasRequest noticias)
    {
         Noticias n = repository.save(NoticiasMapper.toEntity(noticias));
         return NoticiasMapper.toDTO(n);
    }

    public void update(NoticiasRequest noticias, Long id)
    {
        Noticias n  = repository.findById(id)
                               .orElseThrow(() -> new EntityNotFoundException("Notícia não cadastrada"));

        n.setTitulo(noticias.titulo());                                
        n.setConteudo(noticias.conteudo());
        n.setImagem(noticias.imagem());
        n.setDiaPostagem(noticias.diaPostagem());

        repository.save(n);


    }

    
}
