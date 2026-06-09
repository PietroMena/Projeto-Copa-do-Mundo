package com.copa.worldcupproject.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.copa.worldcupproject.Entities.Adm;
import com.copa.worldcupproject.Repositories.AdmRepository;
import com.copa.worldcupproject.dto.LoginRequest;

@Service
public class AdmService {

    @Autowired
    private AdmRepository repository;

    public String login(LoginRequest request) {
        Adm adm = repository.findByLogin(request.login())
                .orElseThrow(() -> new RuntimeException("Login inválido"));

        if (adm.getSenha().equals(request.senha())) {
            return "Login realizado";
        }
        throw new RuntimeException("Senha inválida");
    }

}