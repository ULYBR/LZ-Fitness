async function FazGet(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    try {
                        const json = JSON.parse(request.responseText);
                        resolve(json);
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    reject(new Error("Erro ao fazer a requisição"));
                }
            }
        };
        request.send();
    });
}

function CriarProduto(production){
    const containerProduto = document.createElement('div'); // criar o contêiner de produto
    containerProduto.classList.add('card'); // adicionar a classe card ao contêiner
    const produto = document.createElement('div');
    const preco = document.createElement('span');
    const imagem = document.createElement('img');
  
    preco.innerHTML = `${production.preços}`;
    produto.innerHTML = `${production.nome}`;
    imagem.src = `${production.imagem}`;
  
    containerProduto.appendChild(produto);
    containerProduto.appendChild(preco);
    containerProduto.appendChild(imagem);
  
    document.body.appendChild(containerProduto); // adicionar o contêiner de produto ao documento
}

async function main() {
    try {
        const tops = await FazGet('https://test-api-production-1830.up.railway.app/tops');
        const shorts = await FazGet('https://test-api-production-1830.up.railway.app/shorts');
        const calcas = await FazGet('https://test-api-production-1830.up.railway.app/calcas');
        
        // criar um contêiner para cada produto e adicionar ao documento
        tops.forEach((product) => CriarProduto(product));
        shorts.forEach((product) => CriarProduto(product));
        calcas.forEach((product) => CriarProduto(product));
        
    } catch (error) {
        console.error(error);
    }
}

main();




