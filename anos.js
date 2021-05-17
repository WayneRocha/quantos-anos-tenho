const calendario = document.getElementById('ano');

function ApresentarIdade(){
    const idade = calcularIdade();
    const localdafoto = document.getElementById('pessoa');
    document.getElementById('idade').innerHTML = "Você tem " + idade + " Anos";
    const imagemIdade = () => {
        if (idade <= 5)
            return '<img class="imagem__idade" src="img/babys.png" alt="Imagem: Bebês">'
        else if (idade > 5 && idade <= 10)
            return '<img class="imagem__idade" src="img/criancas.png" alt="Imagem: Crianças">';
        else if(idade > 10 && idade <= 18)
            return '<img class="imagem__idade" src="img/adolecentes.png" alt="Imagem: Adolecentes">';
        else if(idade > 18 && idade <= 55)
            return '<img class="imagem__idade" src="img/adultos.png" alt="Imagem: Adultos">';
        else if(idade > 55 && idade <= 110)
            return '<img class="imagem__idade" src="img/idosos.png" alt="Imagem: Idosos">';
        else
            return '<img class="imagem__idade" src="img/dead.webp" alt="Imagem: morto">';
    };
    localdafoto.innerHTML = imagemIdade();
}
function calcularIdade(){
    const data = parseInt(calendario.value.slice(0, 4));
    const idade = Math.abs((data - obterAnoAtual()));
    return idade;
}
function obterAnoAtual(){
    const date = new Date;
    return date.getFullYear();
}

calendario.addEventListener('change', ApresentarIdade);