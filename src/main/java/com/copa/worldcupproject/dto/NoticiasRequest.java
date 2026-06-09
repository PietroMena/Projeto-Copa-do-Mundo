package com.copa.worldcupproject.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record NoticiasRequest(

```
@NotBlank(message = "Título obrigatório")
String titulo,

@NotBlank(message = "Imagem obrigatória")
String imagem,

@NotBlank(message = "Conteúdo obrigatório")
String conteudo,

@NotNull(message = "Data obrigatória")
LocalDate diaPostagem
```

) {
}
