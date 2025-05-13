/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
const contenedor = document.querySelector("#alojamientos");

function Alojamientos(listastays){
    

    listastays.forEach(element => {

        contenedor.innerHTML+= `
        <div class="flex flex-col justify-center pb-[20px] gap-1 ">
            <div class="w-[337px] h-[223.26px]">
                <img class="w-[337px] h-[223.26px] rounded-2xl" src="${element.photo}" alt="" />
            </div>
            <div class="flex justify-between">
                <div class="flex items-center gap-1">
                    ${
                        element.superHost
                        ? `<span class="text-[10px] border border-black px-2 rounded-md font-semibold">SUPER HOST</span>`
                        : ""
                        }
                        <span class="text-[12px]">
                            ${element.type} ${element.beds} beds
                        </span>

                </div>
                <div class="flex">
                    <svg class="w-[12px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#eb5757"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="size-6"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                    </svg>
                    <span class="text-[12px]">
                        ${element.rating}
                    </span>
                </div>
            </div>
            <div>
                <p class="font-semibold">
                    ${element.title}
                </p>
            </div>
        </div>
        
        `
        
    });
}

Alojamientos(stays)


const location = document.querySelector("#location");


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

// botones cantidad
  let cantidadAdul=0
  let contador=0




function total(){
  const totalguest = document.querySelector(".totalguest")
  let sumaguest= cantidadAdul + contador
  totalguest.textContent=sumaguest
  
}


function adultosCantidad(cantidad){
  const btnmasAdulto=document.querySelector(".btn-masa")
  const btnmenosAdulto=document.querySelector(".btn-menosa")
  const cantidadAdultos=document.querySelector(".cantidadAdultos")


  btnmasAdulto.addEventListener("click", function(){
    cantidadAdul +=1
    cantidadAdultos.textContent = cantidadAdul
    total()
  })
  btnmenosAdulto.addEventListener("click", function(){
    if(cantidadAdul>0){
    cantidadAdul -=1
    cantidadAdultos.textContent = cantidadAdul
     total()
    }

   
  })
}





function niñosCantidad (numero){

const btnmasniño=document.querySelector(".btn-masn")
const cantidadniños=document.querySelector(".cantidadniños")
const btnmenosniño=document.querySelector(".btn-menosn")

  
  btnmasniño.addEventListener("click", function(){
    contador +=1
    cantidadniños.textContent=contador
     total()
  })

  btnmenosniño.addEventListener("click", function(){
    if(contador>0){
      contador -=1
      cantidadniños.textContent=contador
      total()

    }
    
  })



}

adultosCantidad()

niñosCantidad()

total()

