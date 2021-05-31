


//Função para definir a cor selecionada e atribuir a classe 'color' para a que tinha a classe 'selected'.
function selecionado (botaoSelecionado) {
  let antigoSelecionado = document.querySelector('.selected');
  antigoSelecionado.classList.toggle('selected');
  
  botaoSelecionado.target.classList.add('selected');
}

//Função para preencher célula com a cor desejada.
function preencheCelula (preenche) {
  let cor = document.querySelector('.selected');
  preenche.style.backgroundColor = (window.getComputedStyle(cor, null).getPropertyValue("background-color"));
}

//Criando função para limpar a grade.
function limpaGrade(botao) {
  let todasCelulas = document.getElementsByClassName('pixel');
  for (let index = 0; index < todasCelulas.length; index +=1) {
    let celula = todasCelulas[index];
    celula.style.backgroundColor = ('white');
  }
}

//Função para gerar cores aleatórias.
function geraCores () {
  let cor = 'rgb(' + geraNum() + ',' + geraNum() + ',' + geraNum() + ')'
  return (cor);
}

//Função para criar numeros aleatorios.
function geraNum () {
  let numRandom = Math.floor(Math.random() * 255);
  return(numRandom);
}

//Criando quadrados modelo de cores para paleta.
let paletaDeCor = document.getElementById('color-palette');
let arrayDeCores = [geraCores(), geraCores(), geraCores()];

for (let index = 0; index < 4; index += 1) {
  let corDaPaleta = document.createElement('div');
  corDaPaleta.className = ('color');
  if (index == 0){
    corDaPaleta.style.backgroundColor = ('black');
    corDaPaleta.className = ('color');
    corDaPaleta.className += (' selected');
  } else {
    corDaPaleta.style.backgroundColor = (arrayDeCores[index - 1]);
  } 
  corDaPaleta.addEventListener('click', selecionado);
  paletaDeCor.appendChild(corDaPaleta);
}

//Criando botão para limpar as células e preenche-las com branco.
let botaoLimpar = document.getElementById('clear-board');
botaoLimpar.style.marginBottom = ('10px');
botaoLimpar.style.marginTop = ('5px');
botaoLimpar.addEventListener('click', limpaGrade);
 

//Criando primeiro mosaico 5x5.
let gradeCelulas = document.getElementById('pixel-board');
gradeCelulas.style.borderSpacing = (0);
gradeCelulas.style.border = ('none');

for (let primeiroIndex = 0; primeiroIndex < 5; primeiroIndex += 1) {
  let linhaDaTabela = document.createElement('tr');
  for (let segundoIndex = 0; segundoIndex < 5; segundoIndex += 1) {
    let celulaLinhaTabela = document.createElement('td');
    celulaLinhaTabela.className = ('pixel');
    linhaDaTabela.appendChild(celulaLinhaTabela);
  }
  gradeCelulas.appendChild(linhaDaTabela);
}


//Criando funcionalidade para o botão VQV e recebimento do tamanho da grade de células.
let sizeGrid = document.getElementById('board-size'); 
let botaoVQV = document.getElementById('generate-board');
botaoVQV.addEventListener('click', criaGrid);



//Criando mosaico com as células a serem pintadas com argumento do usuário.
function criaGrid (tamanhoGrid) {
  let size = sizeGrid.value
  if (size == '') {
    return(alert('Board inválido!'));
  } else if (size > 50) {
    size = 50;
  } else if (size < 5) {
    size = 5;
  }
  let gradeCelulas = document.getElementById('pixel-board');
  gradeCelulas.innerHTML = '';
  gradeCelulas.style.borderSpacing = (0);
  gradeCelulas.style.border = ('none');

  for (let primeiroIndex = 0; primeiroIndex < size; primeiroIndex += 1) {
    let linhaDaTabela = document.createElement('tr');
    for (let segundoIndex = 0; segundoIndex < size; segundoIndex += 1) {
      let celulaLinhaTabela = document.createElement('td');
      celulaLinhaTabela.className = ('pixel');
      linhaDaTabela.appendChild(celulaLinhaTabela);
    }
    gradeCelulas.appendChild(linhaDaTabela);
  }
}


//Adicionando o método event bubbling para preencher as células.
document.addEventListener('click', function (clique) {
  if ( clique.target.classList.contains( 'pixel' ) ) {
      preencheCelula(clique.target);
  }
}, false);


