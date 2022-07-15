// let input  = document.getElementById("inputPesquisa")
// console.log(input)
// let button = document.getElementById("barraPesquisa")
// console.log(button)

// button.addEventListener("click",function(){console.log(input.value)})

let listaProdutos = document.getElementById("lista")

function addProdutos(arr){
    
    listaProdutos.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        let produto     = arr[i]
        let nome        = produto.nome
        let descricao   = produto.descrição
        let img         = produto.img
        let preco       = produto.preço
        let categoria   = produto.categoria

        let tagLi       = document.createElement("li")
        let tagImg      = document.createElement("img")
        let tagNome     = document.createElement("h2")
        let tagDecricao = document.createElement("p") 
        let tagCategoria= document.createElement("h4")
        let tagPreco    = document.createElement("strong")
        let tagButton   = document.createElement("button")

        tagImg.src             = img
        tagImg.alt             = descricao
        tagNome.innerText      = nome
        tagDecricao.innerText  = descricao
        tagPreco.innerText     = `R$ ${preco}`
        tagCategoria.innerText = categoria
        tagButton.innerText    = "Adicionar ao Carrinho"

        tagLi.appendChild(tagImg)
        tagLi.appendChild(tagNome)
        tagLi.appendChild(tagDecricao)
        tagLi.appendChild(tagCategoria)
        tagLi.appendChild(tagPreco)
        tagLi.appendChild(tagButton)
        
        
        listaProdutos.appendChild(tagLi)
    }
}

function addProdutosBonecos(arr){
    listaProdutos.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        let produto     = arr[i]
        let nome        = produto.nome
        let descricao   = produto.descrição
        let img         = produto.img
        let preco       = produto.preço
        let categoria   = produto.categoria

        let tagLi       = document.createElement("li")
        let tagImg      = document.createElement("img")
        let tagNome     = document.createElement("h2")
        let tagDecricao = document.createElement("p") 
        let tagCategoria= document.createElement("h4")
        let tagPreco    = document.createElement("strong")
        let tagButton   = document.createElement("button")

        tagImg.src             = img
        tagImg.alt             = descricao
        tagNome.innerText      = nome
        tagDecricao.innerText  = descricao
        tagPreco.innerText     = `R$ ${preco}`
        tagCategoria.innerText = categoria
        tagButton.innerText    = "Adicionar ao Carrinho"

        console.log(tagCategoria,categoria)

        if(categoria == "Bonecos de Ação"){
            tagLi.appendChild(tagImg)
            tagLi.appendChild(tagNome)
            tagLi.appendChild(tagDecricao)
            tagLi.appendChild(tagCategoria)
            tagLi.appendChild(tagPreco)
            tagLi.appendChild(tagButton)
        
            listaProdutos.appendChild(tagLi)
        }
    }
}
function addProdutosCamisetas(arr){
    listaProdutos.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        let produto     = arr[i]
        let nome        = produto.nome
        let descricao   = produto.descrição
        let img         = produto.img
        let preco       = produto.preço
        let categoria   = produto.categoria

        let tagLi       = document.createElement("li")
        let tagImg      = document.createElement("img")
        let tagNome     = document.createElement("h2")
        let tagDecricao = document.createElement("p") 
        let tagCategoria= document.createElement("h4")
        let tagPreco    = document.createElement("strong")
        let tagButton   = document.createElement("button")

        tagImg.src             = img
        tagImg.alt             = descricao
        tagNome.innerText      = nome
        tagDecricao.innerText  = descricao
        tagPreco.innerText     = `R$ ${preco}`
        tagCategoria.innerText = categoria
        tagButton.innerText    = "Adicionar ao Carrinho"

        console.log(tagCategoria,categoria)

        if(categoria == "Camisetas"){
            tagLi.appendChild(tagImg)
            tagLi.appendChild(tagNome)
            tagLi.appendChild(tagDecricao)
            tagLi.appendChild(tagCategoria)
            tagLi.appendChild(tagPreco)
            tagLi.appendChild(tagButton)
        
            listaProdutos.appendChild(tagLi)
        }
    }
}

function addProdutosCanecas(arr){

    listaProdutos.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        let produto     = arr[i]
        let nome        = produto.nome
        let descricao   = produto.descrição
        let img         = produto.img
        let preco       = produto.preço
        let categoria   = produto.categoria

        let tagLi       = document.createElement("li")
        let tagImg      = document.createElement("img")
        let tagNome     = document.createElement("h2")
        let tagDecricao = document.createElement("p") 
        let tagCategoria= document.createElement("h4")
        let tagPreco    = document.createElement("strong")
        let tagButton   = document.createElement("button")

        tagImg.src             = img
        tagImg.alt             = descricao
        tagNome.innerText      = nome
        tagDecricao.innerText  = descricao
        tagPreco.innerText     = `R$ ${preco}`
        tagCategoria.innerText = categoria
        tagButton.innerText    = "Adicionar ao Carrinho"

        console.log(tagCategoria,categoria)
        
        if(categoria == "Canecas"){
            tagLi.appendChild(tagImg)
            tagLi.appendChild(tagNome)
            tagLi.appendChild(tagDecricao)
            tagLi.appendChild(tagCategoria)
            tagLi.appendChild(tagPreco)
            tagLi.appendChild(tagButton)
        
            listaProdutos.appendChild(tagLi)
        }
    }
}

addProdutos(produtos)

let clicandoTodos = document.getElementById("tab1")
console.log(clicandoTodos)

clicandoTodos.addEventListener("click", function(){
    addProdutos(produtos)
})


let clicandoBonecos = document.getElementById("tab2")
console.log(clicandoBonecos)

clicandoBonecos.addEventListener("click", function(){
    
    addProdutosBonecos(produtos)
    
})

let clicandoCamisetas = document.getElementById("tab3")
clicandoCamisetas.addEventListener("click", function(){
    
    addProdutosCamisetas(produtos)
    
})

let clicandoCanecas = document.getElementById("tab4")
clicandoCanecas.addEventListener("click", function(){
    
    addProdutosCanecas(produtos)
    
})

// nome: "Caneca do Thanos",
// descrição: "Caneca do Thanos",
// img: "./img/Canecas/Caneca Thanos.png",
// preço: 30.00,
// categoria: "Canecas