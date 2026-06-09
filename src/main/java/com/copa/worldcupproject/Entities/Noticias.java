package com.copa.worldcupproject.Entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TBL_NOTICIAS")
public class Noticias implements java.io.Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;    
    private String imagem;
    private String titulo;

    @Column(length = 5000)
    private String conteudo;
    private LocalDate diaPostagem;

    //Id
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
////////////////////////////

    //Imagens
    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
////////////////////////////

    //Titulo
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
//////////////////////////// 

    //Conteudo
    public String getConteudo() {
        return conteudo;
    }
    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }
////////////////////////////
   
    //Data da Postagem da noticia
    public LocalDate getDiaPostagem() {
        return diaPostagem;
    }
    public void setDiaPostagem(LocalDate diaPostagem) {
        this.diaPostagem = diaPostagem;
    }
///////////////////////////

 @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Noticias other = (Noticias) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
