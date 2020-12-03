var calendario = document.getElementById('ano');

function ApresentarIdade(){
    let idade = calcularIdade();
    let localdafoto = document.getElementById('pessoa');
    document.getElementById('idade').innerHTML = "Você tem " + idade + " Anos";
    if (idade <= 5){
        //bebê
        localdafoto.innerHTML =
        '<img class="imagem__idade" src="idades/babys.png" alt="Imagem: Bebês">';
    }
    else if (idade > 5 && idade <= 10){
        //criança
        localdafoto.innerHTML =
        '<img class="imagem__idade" src="idades/criancas.png" alt="Imagem: Crianças">';
    }
    else if(idade > 10 && idade <= 18){
        //adolecente
        localdafoto.innerHTML =
        '<img class="imagem__idade" src="idades/adolecentes.png" alt="Imagem: Adolecentes">';
    }
    else if(idade > 18 && idade <= 55){
        //adulto
        localdafoto.innerHTML =
        '<img class="imagem__idade" src="idades/adultos.png" alt="Imagem: Adultos">';
    }
    else{
        //idoso
        localdafoto.innerHTML =
        '<img class="imagem__idade" src="idades/idosos.png" alt="Imagem: Idosos">';
    }
}
function calcularIdade(){
    let data = parseInt(calendario.value.slice(0, 4));
    let idade = Math.abs((data - obterAnoAtual()));
    return idade;
}
function obterAnoAtual(){
    let anoAtual = new Date;
    anoAtual = anoAtual.getFullYear();
    return anoAtual;
}

calendario.addEventListener('change', ApresentarIdade);