let amigos = [];

function adicionarAmigo() {
    
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

  
    if (nomeAmigo === '') { 
        alert ('Por favor, insira um nome');
    } else {
        amigos.push(nomeAmigo);
        console.log(amigos);
        inputAmigo.value = ""; 
        inputAmigo.focus(); 
        listaAmigos();
    }    
}

function listaAmigos(){ 
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (var i = 0; i < amigos.length; i++) {
        let checagem = document.createElement('li');
        checagem.textContent = amigos[i];
        lista.appendChild(checagem);

    }
}
          
function sortearAmigo() {

    if (amigos.length === 0 ) {
        alert(`Não é possível realizar o sorteio, por favor, insira um nome`);
    } else {
        let nomeEscolhido = parseInt(Math.random() * amigos.length) ;
        var escolha = amigos[nomeEscolhido];
        resultado.innerHTML = ( `O nome sorteado foi ${escolha}`);  

     }           
}


    


