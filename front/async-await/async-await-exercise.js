// Usando Promises
function funcaoUsandoPromises() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log('Dados da URL:', data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

funcaoUsandoPromises();
console.log('Continuação do programa...');

// Usando 
async function funcaoUsandoAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Dados da URL:', data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

(async () => {
    await funcaoUsandoAsyncAwait();
    console.log('Continuação do programa...');
})();