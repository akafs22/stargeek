const cards = document.querySelector(".cards");

carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadastrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card")
        divcard.innerHTML = `<div class="cardimg">
        <img src="img/${elemento.foto}">
        </div> 
        <div class="cardnome">${elemento.nome}</div>
        <div class="carddescricao">${elemento.descricao}</div>
        <div class="cardbtn">
        <img src="imagens/excluir.png" alt="" onclick="excluir(${indice})"> |
        <a onclick="editar(${indice})">editar</a>
        </div>`;
        
        cards.appendChild(divcard);
        
    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="item.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

