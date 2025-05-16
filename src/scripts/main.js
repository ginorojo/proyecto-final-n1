import { stays } from "./stays.js";
import traerSkeleton from "./utils.js";
import {Alojamientos} from "./utils.js";
import {adultosCantidad, niñosCantidad, total} from "./utils.js";
import {autocompletado} from "./utils.js";



const contenedor = document.querySelector("#alojamientos");
const ciudadMostrar = document.querySelector("#ciudadMostrar")
const numberCiudad = document.querySelector("#numberCiudad")
const btnModal=document.querySelectorAll(".btnModal")
const btnCerrarModal=document.querySelector("#closeModal")
const modalPadre= document.querySelector(".modalPadre")
const locationCity = document.querySelector("#location");
const gest = document.querySelector(".totalguest");
const botonEnviar = document.querySelector("#botonEnviar");
const ciudades = ["Helsinki", "Turku", "Oulu", "Vaasa"]
const suggestions = document.querySelector("#suggestions")


//funcion para traer el skeleton
traerSkeleton(contenedor, stays);

//funcion para trer los alojamientos con un set time out 
setTimeout(() => {
  contenedor.innerHTML = "";
  Alojamientos(stays, contenedor);
}, 800);

//abrir y cerrar modal
let botonOculto = null;

btnModal.forEach((element) => {
  element.addEventListener("click", function () {
    modalPadre.classList.remove("hidden");
    element.classList.add("hidden");
    botonOculto = element; 
  });
});

function cerrarModal(){
btnCerrarModal.addEventListener("click", function () {
  modalPadre.classList.add("hidden");
  if (botonOculto) {
    botonOculto.classList.remove("hidden");
    botonOculto = null; 
  }
});

}
cerrarModal()

adultosCantidad()

niñosCantidad()

total()

botonEnviar.addEventListener("click", function (evento) {
  modalPadre.classList.add("hidden");

  if (botonOculto) {
    botonOculto.classList.remove("hidden");
    botonOculto = null;
  }

  contenedor.innerHTML = "";

  const ciudad = locationCity.value.trim().toLowerCase();
  const cantidadHuespedes = Number(gest.textContent.trim());

let contador = 0;
contenedor.innerHTML = ""; 

stays.forEach((stay) => {
  const coincideCiudad = ciudad === "" || stay.city.toLowerCase().includes(ciudad);
  const coincideHuespedes = cantidadHuespedes === 0 || stay.maxGuests === cantidadHuespedes;

  if (coincideCiudad && coincideHuespedes) {
    contador++;

    contenedor.innerHTML += `
      <div class="flex flex-col justify-center pb-[20px] gap-1">
        <div class="w-[337px] h-[223.26px]">
          <img class="w-[337px] h-[223.26px] rounded-2xl" src="${stay.photo}" alt="" />
        </div>
        <div class="flex justify-between">
          <div class="flex items-center gap-1">
            ${stay.superHost ? `<span class="text-[10px] border border-black px-2 rounded-md font-semibold">SUPER HOST</span>` : ""}
            <span class="text-[12px]">${stay.type} ${stay.beds !== null ? `${stay.beds} beds` : ""}</span>
          </div>
          <div class="flex">
            <svg class="w-[12px]" xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            <span class="text-[12px]">${stay.rating}</span>
          </div>
        </div>
        <div>
          <p class="font-semibold">${stay.title}</p>
        </div>
      </div>
    `;
  }
});

// Mostrar ciudad y cantidad
ciudadMostrar.textContent = ciudad ? `Stay in ${ciudad}` : "All stays";
numberCiudad.textContent = `${contador} stays`;

// Mostrar mensaje si no hay alojamientos
if (contador === 0) {
  contenedor.innerHTML = `<p class="text-center text-gray-500 text-lg ml-5">No se encontraron alojamientos con los criterios seleccionados.</p>`;
  ciudadMostrar.textContent=""
}
})

//autocompletado de ciudades
autocompletado(locationCity, ciudades, suggestions)