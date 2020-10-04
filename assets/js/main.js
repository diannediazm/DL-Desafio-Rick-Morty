import { DetallesPersonajes } from '../../assets/js/detallesPersonajes.js';

let llamadoPersonajes = (() => {
  const urlAPI = 'https://rickandmortyapi.com/api/character/';
  const resultados = document.querySelector('.resultados');
  let datosPersonajes;

  // Función 1
  let obtenerPersonajes = async () => {
    try {
      let respuesta = await fetch(urlAPI);
      let datos = await respuesta.json();
      datosPersonajes = datos;
      // console.log(datosPersonajes);
      return datos;
    } catch (error) {
      console.error(error);
    }
  };

  let obtenerDetalles = async (id) => {
    const urlPje = `https://rickandmortyapi.com/api/character/${id}`;
    let datosPje;
    try {
      let resPje = await fetch(urlPje);
      let datos = await resPje.json();
      datosPje = datos;
      let detallesPersonajes = new DetallesPersonajes();
      detallesPersonajes.infoGeneral(datosPje.id, datosPje.species);
      return datos;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    mostrar: async () => {
      const personajes = await obtenerPersonajes();
      const respuestaPersonajes = await personajes.results;
      respuestaPersonajes.forEach((p) => {
        obtenerDetalles(p.id);
        resultados.innerHTML += `
              <img src=${p.image} />
              <div class=res id=r${p.id}>
                    <ul>
                      <li>
                        <span>${p.id}</span>
                      </li>
                      <li>
                        <span>${p.species}</span>
                      </li>
                    </ul>
                </div>`;
      });
    },
  };
})();

setTimeout(() => {
  let spinner = document.getElementById('spinner');
  spinner.style.display = 'none';
  let cantidadMostrada = document.getElementsByClassName('res').length;
  document.getElementById(
    'cantidad-personajes'
  ).innerHTML = `${cantidadMostrada}`;
}, 2000);

llamadoPersonajes.mostrar();