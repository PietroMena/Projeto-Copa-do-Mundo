package com.copa.worldcupproject.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.copa.worldcupproject.Entities.Noticias;

public interface NoticiasRepository
        extends JpaRepository<Noticias, Long> {

}