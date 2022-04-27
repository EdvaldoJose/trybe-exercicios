const camiseta = document.getElementById('t-shirt');
const tamanhos = ['PP', 'P', 'M', 'G', 'GG', 'XG'];

for (let tamanho of tamanhos){
  const opt = document.createElement('option'); 
  opt.value = tamanho;
  opt.innerHTML = tamanho;
  camiseta.appendChild(opt);

  console.log(tamanhos);
}
