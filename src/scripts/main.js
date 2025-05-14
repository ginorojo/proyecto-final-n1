import { stays } from "./stays.js";
import traerSkeleton from "./utils.js";
import {Alojamientos} from "./utils.js";
import {adultosCantidad, niñosCantidad, total} from "./utils.js";

const location = document.querySelector("#location");

const contenedor = document.querySelector("#alojamientos");

//funcion para traer el skeleton
traerSkeleton(contenedor, stays);

//funcion para trer los alojamientos con un set time out 
setTimeout(() => {
  contenedor.innerHTML = "";
  Alojamientos(stays, contenedor);
}, 800);

//abrir y cerrar modal
const btnModal=document.querySelectorAll(".btnModal")
const btnCerrarModal=document.querySelector("#closeModal")
const modalPadre= document.querySelector(".modalPadre")

btnModal.forEach((element)=>{
  element.addEventListener("click", function(){
  modalPadre.classList.remove("hidden")

})
})

btnCerrarModal.addEventListener("click", function(){
  modalPadre.classList.add("hidden")
})

adultosCantidad()

niñosCantidad()

total()

