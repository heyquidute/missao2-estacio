function preencheCatalogo(){
    fetch("receitas.json")
    .then(response => response.json())
    .then(data => {
        const cardReceitas = data.map(getCard).join("")
        const getReceitas =document.getElementById("catalogoReceitas")
        getReceitas.innerHTML = cardReceitas
        });
    
}

function getCard(receita){
    const {titulo, imagem, preparo, ingredientes} = receita
    const ingredientesHTML = ingredientes.map((ingredientes) => `<li>${ingredientes}</li>`).join("")

    return `
    <div class = "container">
        <div class="col-sm colum border rounded" style = "background-color: white; padding: 25px; margin: 20px;">
            <img src = "${imagem}" class = "img-fluid card-img-top"/>
            <h1>${titulo}</h1>
            <p>${ingredientesHTML}</p>
        <hr>
            <p>${preparo}</p>
        </div>
    </div>
    `
}

preencheCatalogo()