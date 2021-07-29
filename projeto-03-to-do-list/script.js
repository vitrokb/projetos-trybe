window.onload = recLocalStorage;

const ol = document.getElementById('lista-tarefas');
// Botão para adicionar elemento a lista.
const tarefaParaAdc = document.getElementById('texto-tarefa');
const btnAdc = document.getElementById('criar-tarefa');

function criaLi(content) {
  const li = document.createElement('li');
  li.classList.add('elemento-lista');
  li.textContent = content;
  return li;
}

// Função para adicionar elemento a lista e apagar o que está dentro do input.
function adcLista() {
  const elementoLista = criaLi(tarefaParaAdc.value);
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(elementoLista);
  tarefaParaAdc.value = '';

  const storage = JSON.parse(localStorage.getItem('listaDeLi')) || [];
  storage.push(elementoLista.textContent);
  localStorage.setItem('listaDeLi', JSON.stringify(storage));
}

btnAdc.addEventListener('click', adcLista);

// Teste para ver se o elemeno clicado é um li da lista ordenada e cria
// a função toggle do background.

document.addEventListener('click', function ({ target }) {
  const elementoCinza = document.querySelector('.elemento-cinza');
  if (target.classList.contains('elemento-lista')) {
    if (elementoCinza) {
      return elementoCinza.classList.remove('elemento-cinza');
    } 
    target.classList.toggle('elemento-cinza');
  }
}, false);

// Outro teste para verificar se o elemento é um li para riscá-lo ou não.
document.addEventListener('dblclick', function ({ target }) {
  if ( target.classList.contains('elemento-lista')) {
    target.classList.toggle('completed');
  }
}, false);

// Implementação do botão Limpar.
document.getElementById('apaga-tudo')
  .addEventListener('click', function () {
    ol.innerHTML = '';
    localStorage.removeItem('listaDeLi');
  });


// Função para remover finalizados.
function removeFinalizados() {
  const lis = document.querySelectorAll('.completed');
  lis.forEach((item) => {
    ol.removeChild(item);
  })
}

// Implementação do botão Remover Finalizados.
document.getElementById('remover-finalizados')
  .addEventListener('click', removeFinalizados);


// Função para salvar itens no localstorage.
function salvaLocalStorage() {
  const listaDeLi = [];
  const listaParaSalvar = document.getElementById('lista-tarefas').childNodes;
  listaParaSalvar.forEach((item) => {
    listaDeLi.push(item.textContent);
  });
  localStorage.setItem('listaDeLi', JSON.stringify(listaDeLi));
}

// Implementação do botão salvar.
document.getElementById('salvar-tarefas')
  .addEventListener('click', salvaLocalStorage);


// Função para recuperar dados do localStorage.
function recLocalStorage() {
  const listaDoStorage = JSON.parse(localStorage.getItem('listaDeLi')) || [];
  listaDoStorage.forEach((item) => {
    ol.appendChild(criaLi(item));
  });
}

// Função para mover elemento de lista para cima.
function moveCima() {
  const elementoCinza = document.querySelector('.elemento-cinza');
  const listaArray = Array.from(document.getElementById('lista-tarefas').childNodes);
  const indexSelecionado = listaArray.indexOf(elementoCinza);
  let backupSelecionado = '';

  if (elementoCinza) {
    if (listaArray[0].classList.contains('elemento-cinza')) {
      alert('Elemento não pode subir mais.');
    } else {
      backupSelecionado = listaArray[indexSelecionado];
      listaArray.splice(indexSelecionado, 1);
      listaArray.splice(indexSelecionado - 1, 0, backupSelecionado);
      listaArray.forEach((item) => {
        ol.appendChild(item);
      })
    }
  } else {
    alert('Não há elemento selecionado')
  }
}

// Implementação do botão mover para cima.
document.getElementById('mover-cima')
  .addEventListener('click', moveCima);

  
  // Função para mover elemento de lista para baixo.
function moveBaixo() {
  const elementoCinza = document.querySelector('.elemento-cinza');
  const listaArray = Array.from(document.getElementById('lista-tarefas').childNodes);
  const indexSelecionado = listaArray.indexOf(elementoCinza);
  let backupSelecionado = '';
  if (elementoCinza) {
    if (listaArray[listaArray.length - 1].classList.contains('elemento-cinza')) {
      alert('Elemento não pode descer mais.');
    } else {
      backupSelecionado = listaArray[indexSelecionado];
      listaArray.splice(indexSelecionado, 1);
      listaArray.splice(indexSelecionado + 1, 0, backupSelecionado);
      listaArray.forEach((item) => {
        ol.appendChild(item);
      })
    }
  } else {
    alert('Não há elemento selecionado')
  }
}

// Implementação do botão mover para baixo.
document.getElementById('mover-baixo')
  .addEventListener('click', moveBaixo);


// remover selecionado

function removerSelecionado() {
  const elementoCinza = document.querySelector('.elemento-cinza');
  const listaArray = Array.from(document.getElementById('lista-tarefas').childNodes);
  const indexSelecionado = listaArray.indexOf(elementoCinza);
  if (elementoCinza) {
    listaArray.splice(indexSelecionado, 1);
    ol.innerHTML = '';
    listaArray.forEach((item) => {
      ol.appendChild(item);
    })

    const storage = JSON.parse(localStorage.getItem('listaDeLi'));
    storage.splice(indexSelecionado, 1);
    localStorage.setItem('listaDeLi', JSON.stringify(storage));
  } else {
    alert('Nenhuma tarefa selecionada');
  }
};

document.getElementById('remover-selecionado')
  .addEventListener('click', removerSelecionado);
