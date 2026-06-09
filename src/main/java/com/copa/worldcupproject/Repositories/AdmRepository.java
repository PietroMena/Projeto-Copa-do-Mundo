package com.copa.worldcupproject.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.copa.worldcupproject.Entities.Adm;

public interface AdmRepository extends JpaRepository<Adm, Long> {

Optional<Adm> findByLogin(String login);

}