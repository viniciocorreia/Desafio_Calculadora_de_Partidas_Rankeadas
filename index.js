let vitorias = 50; 
let derrotas = 5; 
let rank;

function calcular(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
let resultado = calcular(vitorias, derrotas);


if (resultado < 10 ) {
    rank = "Ferro";
    } else if (resultado >= 11 && resultado <= 20 ) {
        rank = "Bronze";
    } else if (resultado >= 21 && resultado <= 50 ) {
        rank = "Prata";
    } else if (resultado >= 51 && resultado <= 80 ) {
        rank = "Ouro";
    } else if (resultado >= 81 && resultado <= 90 ) {
        rank = "Diamante";
    } else if (resultado >= 91 && resultado <= 100 ) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
}
  
console.log(`O Herói tem de saldo de ${resultado} vitórias e está no nível de ${rank}`);