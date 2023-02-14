
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




//alert( int );



function CriarProduto(produto){
   
    


    

}
function main(){
    const tops = FazGet('https://test-api-production-1830.up.railway.app/tops');
    const shorts = FazGet('https://test-api-production-1830.up.railway.app/shorts');
    const calcas = FazGet('https://test-api-production-1830.up.railway.app/calcas');
    const products = FazGet('https://test-api-production-1830.up.railway.app/products/:id');
  

    console.log (tops);
}




main();

    




