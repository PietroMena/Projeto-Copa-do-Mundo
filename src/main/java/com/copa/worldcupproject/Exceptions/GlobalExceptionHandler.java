package com.copa.worldcupproject.Exceptions;

import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.copa.worldcupproject.dto.ErroResponse;

//Faz o tratamento de erros, colocando os status corretos
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErroResponse> entityNotFound(
            EntityNotFoundException ex,
            HttpServletRequest request) {

        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ErroResponse(
                        404,
                        ex.getMessage(),
                        "Entity Not Found",
                        request.getRequestURI()
                ));
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErroResponse> runtime(
            RuntimeException ex,
            HttpServletRequest request) {

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ErroResponse(
                        400,
                        ex.getMessage(),
                        "Bad Request",
                        request.getRequestURI()
                ));
    }
}