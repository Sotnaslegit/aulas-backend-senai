// 19. Imagine que temos uma classe Usuario com os atributos id, nome, ativo, documento.
// Crie os métodos getters e setters desses atributos e depois instancie essa classe
// utilizando esses métodos.

class Usuario{
    //classe pronta

    setId(id){
        this.id = id;
    };
    getId(){
        return this.id;
    };

    setNome(nome){
        this.nome = nome;
    };
    getNome(){
        return this.nome;
    };

    setAtivo(ativo){
        this.ativo = ativo;
    };
    getAtivo(){
        return this.ativo;
    };

    setDocumento(documento){
        this.documento = documento;
    };
    getDocumento(){
        return this.documento;
    };
}

const usuario = new Usuario();
usuario.setId("1");
console.log(usuario.getId());
usuario.setNome("Ronaldo");
console.log(usuario.getNome());
usuario.setAtivo(true);
console.log(usuario.getAtivo());
usuario.setDocumento("12345678910");
console.log(usuario.getDocumento());
