package com.copa.worldcupproject.Controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.copa.worldcupproject.Services.NoticiasService;
import com.copa.worldcupproject.dto.NoticiasRequest;
import com.copa.worldcupproject.dto.NoticiasResponse;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/noticias")
@CrossOrigin
public class NoticiasController {

    @Autowired
    private NoticiasService service;

    @GetMapping
    public ResponseEntity<List<NoticiasResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<NoticiasResponse> getById(@PathVariable long id) {
        return ResponseEntity.ok(service.findById(id));

    }

    @GetMapping("/buscar")
    public ResponseEntity<List<NoticiasResponse>> buscarPorTitulo(
            @RequestParam String titulo) {

        return ResponseEntity.ok(service.buscarPorTitulo(titulo));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<NoticiasResponse> save(@Valid @RequestBody NoticiasRequest noticias) {
        NoticiasResponse n = service.save(noticias);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(n.id())
                .toUri();

        return ResponseEntity.created(location).body(n);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable long id,
            @RequestBody NoticiasRequest noticias) {

        service.update(noticias, id);
        return ResponseEntity.noContent().build();
    }

}
