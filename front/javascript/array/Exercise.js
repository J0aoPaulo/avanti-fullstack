// Atividade 01

let array = new Array(30);

for (let i = 0; i < array.length; i++) {
  array[i] = i + 23;
}

console.log(array);

// Atividade 02

let nomes = ['Dino', 'Baby', 'Charlotte'];

let nomesCompletos = nomes.map(nome => `${nome} da Silva Sauro`);

nomesCompletos.forEach(nome => console.log(nome));