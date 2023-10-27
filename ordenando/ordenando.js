//Função Swap, que troca os valores de duas posições. A entrada é o vetor e as posições que vão ser trocadas
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};


//Função Shuffle, embaralha os elementos do vetor tendo como parâmetros o vetor e a quantidade trocas. 
//Em cada iteração do loop, a função escolhe duas posições aleatórias do vetor e troca os valores nessas posições
const shuffle = (arr, n) => {
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * (arr.length - i));
    swap(arr, i, j);
  }
  return arr;
};

//Função Bubble Sort, ordena os elementos do vetor em ordem crescente, "borbulhando" os números na ordem, verificando quem é maior e "passando" pra frente
const bubble_sort = (arr) => { 
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      }
    }
  return arr;
};


//Função Selection Sort, ordena os elementos procurando o menor elemento e colocando na primeira posição, até não ter mais outros elementos menor que o da primeira posição
const selection_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // Encontra o menor elemento a partir da posição i
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // Troca o menor elemento com o elemento da posição i
    swap(arr, i, min);
  }
  return arr;
};


//Função Quick Sort
const quick_sort = (arr, left, right) => {
// Base case
if (left >= right) {
  return;
}

// Escolha o pivô
const pivot = arr[Math.floor((left + right) / 2)];

// Particione o vetor
let l = left;
let r = right;
while (l <= r) {
  while (arr[l] < pivot) {
    l++;
  }
  while (arr[r] > pivot) {
    r--;
  }
  if (l <= r) {
    swap(arr, l, r);
    l++;
    r--;
  }
}

// Recursivamente ordene as subarrays
quick_sort(arr, left, r);
quick_sort(arr, l, right);

return arr;
};


//Função PARTICIONAMENTO, a função apoia função QUICK SORT retornando a posição do pivô no vetor dividido
const particionamento = (arr, left, right, pivot) => {
  let l = left
  let r = right

  while (l <= r) {
    while (arr[l] < pivot){
      i++;
    }
    while (arr[r] > pivot){
      j--;
    }
    if (l <= r){
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  return l;
}


//Capturar a lista de valores do input
function add() {
  const valor = window.document.getElementById('valor')
  const valores = document.getElementById('valores')
  const node = document.createElement('li')
  //Nó de texto
  const textNode = document.createTextNode(valor.value)
  //Inclui o nó como filho de node
  node.appendChild(textNode)
  //Adiciona o nó à lista
  valores.appendChild(node)
}


//Função para colocar em ordem
function ordenar() {
  const valores = document.getElementById('valores')
  const selecionado = document.getElementById('select')
  const vetor = []
  let vetorBagunçado = []
  //Cria o vetor
  for (const item of valores.children){
    const texto = item.textContent
    const valor = parseInt(texto)
    vetor.push(valor)
  }
  //Pega a opção selecionada e chama a função
  const index = selecionado.selectedIndex
  if(index==0){
    vetorBagunçado = bubble_sort(vetor)
  } else if(index==1){
    vetorBagunçado = selection_sort(vetor)
  } else {
    vetorBagunçado = quick_sort(vetor, 0, vetor.length-1)
  }
  //Arrumando o innerHTML
  const elemento = document.querySelector('ul')
  elemento.innerHTML = ''
  for (let i=0; i<vetorBagunçado.length; i++){
    elemento.innerHTML += `<li>${vetorBagunçado[i]}</li>`
  }
}


//Função para misturar os números
function misturar() {
  const valores = document.getElementById('valores')
  //*const selecionado = document.getElementById('select')
  const vetor = []
  let vetorBagunçado = []
  //Cria o vetor convertido para int
  for (const item of valores.children){
    const texto = item.textContent
    const valor = parseInt(texto)
    vetor.push(valor)
  }
  //Aplica a função shuffle ao vetor
  vetorBagunçado = shuffle(vetor, vetor.length)
  console.log(vetorBagunçado)
  //Arrumando o innerHTML
  const elemento = document.querySelector('ul')
  elemento.innerHTML = ''
  for (let i=0; i<vetorBagunçado.length; i++){
    elemento.innerHTML += `<li>${vetorBagunçado[i]}</li>`
  }
}