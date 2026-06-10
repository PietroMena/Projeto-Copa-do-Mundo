package com.copa.worldcupproject.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.copa.worldcupproject.Entities.Noticias;

public interface NoticiasRepository
                extends JpaRepository<Noticias, Long> {
        List<Noticias> findByTituloContainingIgnoreCase(String titulo);
        List<Noticias> findAllByOrderByDiaPostagemDesc();

}