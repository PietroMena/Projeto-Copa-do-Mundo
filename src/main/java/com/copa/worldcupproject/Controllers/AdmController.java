package com.copa.worldcupproject.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.copa.worldcupproject.Services.AdmService;
import com.copa.worldcupproject.dto.LoginRequest;

@RestController
@RequestMapping("/adm")
@CrossOrigin
public class AdmController {

    @Autowired
    private AdmService service;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {

        return ResponseEntity.ok(service.login(request));

    }
}
