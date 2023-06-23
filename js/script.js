let numero = prompt("Número de sua escolha")
let contador = 1;
let mensagem = 'Contagem: ';

while(contador <= numero) {
    mensagem = mensagem + contador + ' ';

    contador++;
}

mensagem = mensagem + 'Acabou';

console.log(mensagem);