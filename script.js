let randomLoc = Math.floor(Math.random()*5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let guesses = 0;
let hit = 0;
let isSunk = false;
const listaTiros = [];

function jogar(){
    while (!isSunk){
        var guess = prompt('Pronto para atirar? Informe um número entre 0 e 5')
        guess = Number(guess)
        if (guess < 0 || isNaN(guess) || guess > 6){
            alert('Por favor, informe um número válido entre 0 e 6')
        }else if
            (listaTiros.includes(guess)){
                alert('Você já jogou este número')
        }else{
            guesses += 1
            listaTiros.push(guess)
            if (guess == location1 || guess == location2 || guess == location3){
                alert('Você acertou o Navio')
                hit += 1
                if (hit == 3){
                    isSunk = true;
                    alert('Você afundou o navio')
                }
            }else{
                alert('Você errou')
            }
        }
    }
    let precisao = (hit/guesses)*100
    let mensagem = `Você afundou o navio com ${guesses} tentativas com a precisão de ${precisao.toFixed(2)} %`
    alert(mensagem)
}
jogar()    
