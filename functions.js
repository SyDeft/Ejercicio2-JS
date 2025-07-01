let elementos = [];

function agregarGato(gato) {
  elementos.push(gato);
  verificarRepeticion();
  mostrar();
}

function verificarRepeticion() {
  if (elementos.length < 5) return;

  let i = 0;
  while (i <= elementos.length - 5) {
    const grupo = elementos.slice(i, i + 5);
    if (grupo.every(g => g === grupo[0])) {
      elementos.splice(i, 5);
      elementos.unshift('⬛');
      i = 0;
    } else {
      i++;
    }
  }
}

function mostrar() {
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = elementos.join('');
}

//unshift: agrega x elemento al inicio
//splice: modifica cierta posicion del objeto