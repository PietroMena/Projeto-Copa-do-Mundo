package com.copa.worldcupproject.dto;

import java.time.LocalDateTime;

public class ErroResponse {

    private int status;
    private String message;
    private String error;
    private String path;
    private LocalDateTime timestamp;

    public ErroResponse(int status, String message, String error, String path) {
        this.status = status;
        this.message = message;
        this.error = error;
        this.path = path;
        this.timestamp = LocalDateTime.now();
    }

    // getters
}