
const containerProduto = document.querySelectorAll('card');

function FazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    function ParseJson (json){
        const jsonParse = JSON.parse(json);
        return jsonParse;
    }
    
    return ParseJson(request.responseText);


    
}







function CriarProduto(production){
   const produto = document.createElement('div');
    
   produto.innerHTML = `${production.nome}`;

   containerProduto.appendChild(produto);

    
return produto.innerHTML;

    

}
function main(){
    const tops = FazGet('https://test-api-production-1830.up.railway.app/tops');
    const shorts = FazGet('https://test-api-production-1830.up.railway.app/shorts');
    const calcas = FazGet('https://test-api-production-1830.up.railway.app/calcas');
    const products = FazGet('https://test-api-production-1830.up.railway.app/products/:id');

    for (let i = 0; i < tops.length; i++) {
        CriarProduto(tops[i]);
        CriarProduto(shorts[i]);
        CriarProduto(calcas[i]);
        CriarProduto(products[i]);

        
    }
    

    
}




main();

    




