import { secWhiteFlame , secWhiteFlameResponsive , secSection4 , secSection4responsive, medialuna} from "./imgData.js";
import { tres60_0 , tres60_1 , tres60_2 ,tres60_3 , tres60_4} from "./tres60.js";


window.addEventListener("scroll", recorridoScroll)
window.addEventListener("scroll", changeBg)
window.addEventListener("scroll", recorridoScroll2)

// animacion seccion 1//
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const cargadas = []
const cargadasResponsive = []

// animacion seccion 2//
const canvas2 = document.getElementById("canvas2")
const ctx2 = canvas2.getContext("2d")
const bg = ["medios/BG-S2/bg1.webp", "medios/BG-S2/bg2.webp", "medios/BG-S2/bg3.webp"]
const bgCargadas = []
///
const tres60_cargado = [
  [],
  [],
  [],
  [],
  []
];
//
// carga asincronica de imagenes//
window.addEventListener("load", pageLoaded)
function pageLoaded () {
    
    // carga de imagenes sección 1 //
    if (window.innerWidth > 600){
    for (let i = secWhiteFlame.length - 1; i >= 0; i--){
        const image = new Image()
        image.src = secWhiteFlame[i]
        image.addEventListener("load", () => {
            cargadas[i] = image
            if (i === 0) {
                loadImage(i)
            }
        });
      }
    } else {
      for (let i = secWhiteFlameResponsive.length - 1; i >= 0; i--){
        const image = new Image()
        image.src = secWhiteFlameResponsive[i]
        image.addEventListener("load", () => {
            cargadasResponsive[i] = image
            if (i === 0) {
                loadImage(i)
            }
        });
      }

    }
    // carga de imagenes sección 2 //
    for(let i = 0; i < bg.length; i++ ){
        const image = new Image()
        image.src = bg[i]
        image.addEventListener("load", () =>{
            bgCargadas[i] = image
            {loadImage2(i)}
        })
    }
    if (window.innerWidth > 600) {
      for (let i = 0; i < secSection4.length; i++) {
        const image = new Image();
        image.src = secSection4[i];
        image.addEventListener("load", () => {
          seccion4cargadas[i] = image;
          loadImage3(i);
        });
      }
    } else {
      for (let i = 0; i < secSection4responsive.length; i++) {
        const image = new Image();
        image.src = secSection4responsive[i];
        image.addEventListener("load", () => {
          seccion4responsivecargadas[i] = image;
          loadImage3(i);
        });
      }
    }    
    // carga de imagenes sección 5 //
  for(let i = 0; i < medialuna.length; i++ ){
    const image = new Image()
    image.src = medialuna[i]
    image.addEventListener("load", () =>{
        medialunaCargadas[i] = image
        {loadImage5(2)}
    })
  }
  for(let i = 0; i < tres60_0.length; i++ ){
    const image = new Image()
    image.src = tres60_0[i]
    image.addEventListener("load", () =>{
      tres60_cargado[0][i] = image
    })
  }
  for(let i = 0; i < tres60_1.length; i++ ){
    const image = new Image()
    image.src = tres60_1[i]
    image.addEventListener("load", () =>{
      tres60_cargado[1][i] = image
    })
  }
  for(let i = 0; i < tres60_2.length; i++ ){
    const image = new Image()
    image.src = tres60_2[i]
    image.addEventListener("load", () =>{
      tres60_cargado[2][i] = image
    })
  }
  for(let i = 0; i < tres60_3.length; i++ ){
    const image = new Image()
    image.src = tres60_3[i]
    image.addEventListener("load", () =>{
      tres60_cargado[3][i] = image
       {loadImage4(i)}
    })
  }
  for(let i = 0; i < tres60_4.length; i++ ){
    const image = new Image()
    image.src = tres60_4[i]
    image.addEventListener("load", () =>{
      tres60_cargado[4][i] = image
        {loadImage4(i)}
    })
  }
}

// SECCIÓN 1 //

// imprimir imagen en canvas
function loadImage(index) {
    const reversedIndex = cargadas.length - 1 - index;
    const reversedIndex2 = cargadasResponsive.length - 1 - index;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (window.innerWidth > 600) {
      ctx.drawImage(cargadas[reversedIndex], 0, 0, canvas.width, canvas.height)
    } else {
      ctx.drawImage(cargadasResponsive[reversedIndex2], 0, 0, canvas.width, canvas.height)
    }
}

// Cambio de imagenes segun Scroll

let n = 0 // n = scroll/valor . Permite regular la velocidad de la animación //

function recorridoScroll() {
    let scroll = window.scrollY
    n = Math.floor(scroll/15)
    const stopFrame = 8
    if (n <= stopFrame){
        loadImage(n);
    }
}

// SECCIÓN 2 //

// imprimir imagen en canvas

function loadImage2(index) {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(bgCargadas[index], 0, 0, canvas.width, canvas.height)
}

function changeBg () {
    let scroll = window.scrollY
    if (window.innerWidth < 600) { // responsive
      switch (true) {
        case (scroll < 710):
            loadImage2(0)
            break
        case (scroll < 810):
            loadImage2(1)
            break
        case (scroll < 910):
            loadImage2(2)
            break}
    } else {
    switch (true) {
        case (scroll < 750):
            loadImage2(0)
            break
        case (scroll < 900):
            loadImage2(1)
            break
        case (scroll < 1050):
            loadImage2(2)
            break}
  }
}

// SECCIÓN 3 //

// carruseles hacia la izquierda //

// asignar valores al carrusel
function initCarouselLeft(sliderId, sectionClass) {
  const slider = document.querySelector(`#${sliderId}`);
  let sliderSections = document.querySelectorAll(`.${sectionClass}`);
  let sliderSectionLast = sliderSections[sliderSections.length - 1];
  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    // desplazar imagen segun el margen y pasar la ultima imagen al primer lugar
    function next() {
      let sliderSectionFirst = document.querySelectorAll(`.${sectionClass}`)[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 2s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 2000);
    }
    // tiempo para ejecutarse
    setInterval(function () {
      next();
    }, 3000);
  }

  initCarouselLeft("slide1", "slider_section_1");
  initCarouselLeft("slide2", "slider_section_2");

// carrusel hacia arriba //

// asignar valores al carrusel
function initVerticalCarousel(sliderId, sectionClass, containerSelector) {
  const slider = document.querySelector(`#${sliderId}`);
  let sliderSections = document.querySelectorAll(`.${sectionClass}`);
  let sliderSectionLast = sliderSections[sliderSections.length - 1];
  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  // almacenar tamaño del container
  function setSliderHeight() {
    const container = document.querySelector(containerSelector);
    const containerHeight = container.offsetHeight;
    slider.style.height = `${containerHeight}px`;
  }

  // desplazar imagen segun el tamaño del contacto
  function next() {
    let sliderSectionFirst = document.querySelectorAll(`.${sectionClass}`)[0];
    slider.style.marginTop = `-${sliderSectionFirst.offsetHeight}px`; 
    slider.style.transition = "all 2s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginTop = "0";
    }, 2000);
  }

  // valor inicial del slider y actualización
  setSliderHeight(); 
  window.addEventListener("resize", setSliderHeight); 

  // tiempo para ejecutarse
  setInterval(function () {
    next();
  }, 3000);
}

initVerticalCarousel("slide3", "slider_section_3", ".galeria_item:nth-child(4)");

// SECCIÓN 4 //

// animacion seccion 4//
const canvas3 = document.getElementById("canvas3")
const ctx3 = canvas3.getContext("2d")
const seccion4cargadas = []
const seccion4responsivecargadas = []

// imprimir imagen en canvas
function loadImage3(index) {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  if (window.innerWidth < 600) { 
    ctx3.drawImage(seccion4responsivecargadas[index], 0, 0, canvas3.width, canvas3.height)
  } else { 
    ctx3.drawImage(seccion4cargadas[index], 0, 0, canvas3.width, canvas3.height)
  }
}       

// Cambio de imagenes segun Scroll

let n2 = 0; 
const stopFrame = 6;

function recorridoScroll2() {
  let scroll = window.scrollY;

  if (window.innerWidth < 600) { // responsive
    n2 = Math.floor((scroll - 1950) / 14);
  } else {
    n2 = Math.floor((scroll - 2400) / 13);
  }
  

  if (n2 < 0) {
    n2 = 0;
  } else if (n2 > stopFrame) {
    n2 = stopFrame;
  }

  loadImage3(n2);
}

// mostrar texto 

const container = document.querySelector(".text");

window.addEventListener("scroll", function () {
  if (window.innerWidth < 600) {// responsive
    if (window.scrollY > 2050) { 
      container.classList.add("mostrar");
    } else {
      container.classList.remove("mostrar");
    }
  } else {
  if (window.scrollY > 2475) { 
    container.classList.add("mostrar");
  } else {
    container.classList.remove("mostrar");
    }
  }
});

// SECCIÓN 5 //

// canvas 5 fondo medialuna //

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");
const medialunaCargadas = []

// selección del color de fondo y de la moto segun el click en el container //
const tanques = document.querySelectorAll(".container-tanques img")
let idSeleccionado = 2
let arraySeleccionado = tres60_cargado[idSeleccionado]
let fotograma = 0

tanques.forEach(tanque => {
  tanque.addEventListener("click", () => {

    tanques.forEach(t => {
        t.classList.remove("activo");
    })
    tanque.classList.add("activo");
    idSeleccionado = tanque.id;
    arraySeleccionado = tres60_cargado[idSeleccionado];
    loadImage5(idSeleccionado)

  })
})


const slider =document.querySelector("#slider")
slider.addEventListener("input", sliderValue )

function sliderValue() {
  fotograma = (this.value)
  loadImage4(this.value)
}

function loadImage5(idSeleccionado) {
  ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
  ctx5.drawImage(medialunaCargadas[idSeleccionado], 0, 0, canvas5.width, canvas5.height)

  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  ctx4.drawImage(arraySeleccionado[fotograma], 0, 0, canvas4.width, canvas4.height);
}

// canvas 4 moto 360 //

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");

function loadImage4(index) {
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  ctx4.drawImage(arraySeleccionado[index], 0, 0, canvas4.width, canvas4.height);
}

//  SECCIÓN 7  FORMULARIO  //
const formulario = document.getElementById("formulario");
const divform = document.querySelector(".divform");
const divform2 = document.querySelector(".divform2");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const seleccion = document.getElementById("seleccion").value;

    // Validaciones
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
        alert("Nombre no válido. Debe contener solo letras y espacios.");
        return;
    }

    if (!/^[A-Za-z\s]+$/.test(apellido)) {
        alert("Apellido no válido. Debe contener solo letras y espacios.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Correo electrónico no válido.");
        return;
    }

    if (seleccion === "Ciudad") {
        alert("Por favor, selecciona una ciudad válida.");
        return;
    }

    const datos = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        seleccion: seleccion
    };

    // Ocultar divform y mostrar divform2
    divform.style.display = "none";
    divform2.style.display = "block";
});
