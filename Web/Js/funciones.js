//----------------------------------------------------------------------------------------- Botón log in

// Aquí se declaran las constantes y variables que voy a usar:

const botonLogin = document.getElementById("botonLogin");
const sectionLogin = document.querySelector(".logIn");
const botonLogin2 = document.getElementById("botonLogin2")
const botonLogOut = document.getElementById("logOut")
const sectionLogout = document.querySelector(".logOut")
let span = botonLogin.querySelector("span");

// Este botón hace que se haga visible la sección para hacer el login
botonLogin.addEventListener("click", () =>{
    sectionLogin.classList.add("logInVisible");
});

// Este botón que esta dentro de la sección desplegada hace que: 

botonLogin2.addEventListener("click", () => {
    sectionLogin.classList.remove("logInVisible"); // Se quite la sección de log in desplegada anteriormente
    span.innerHTML = "Usuario conectado"; // Cambie el texto del HTML de "log in" a "Usuario conectado"  
    sectionLogout.classList.add("logOutvisible"); // Que aparezca en el nav la opción de "log out"
  
});

// Este botón de log out hace que todo vuelva al estado incial previo al log in
botonLogOut.addEventListener("click", () => {
    span.innerHTML = "Log in";  // Vuelve a modificarse el HTML para poner de nuevo log in
    sectionLogin.classList.remove("logInVisible"); // Desaparece la sección desplegada del log in 
    sectionLogout.classList.remove("logOutvisible"); // Desaparece el botón de log out

});

//----------------------------------------------------------------------------------------- Mostrar/cerra menu desplegable

// Aquí se declaran las constantes que voy a usar:

const menuBurger = document.querySelector(".menuBurger");
const botones = document.querySelectorAll(".abrirMenu, .cerrarMenu");
const botonLoginMenu = document.getElementById("botonLoginMenu");

// Uso un toggle ya que el botón hará la funcion de poner o quitar una misma clase
botones.forEach(boton => {
    boton.addEventListener("click", () => menuBurger.classList.toggle("menuBurgerVisible"));
});

//Este botón que esta situado dentro del menu desplegado hará que:
botonLoginMenu.addEventListener("click", () => {
    sectionLogin.classList.add("logInVisible");// Aparezca la sección de log in para realizar el trámite anterior
    menuBurger.classList.remove("menuBurgerVisible");// Desaparezca el menu desplegado
});


//----------------------------------------------------------------------------------------- Modal "Solicita una demo"

// Aquí se declaran las constantes que voy a usar:

const botonDemo = document.querySelectorAll(".botonDemo");
const modal = document.querySelector(".demo");
const emailInput = modal.querySelector("input[type='email']")

//Debido a que hay diferentes botones que realizan la misma acción uso el forEach:
botonDemo.forEach((boton) => {
    boton.addEventListener("click", () =>{
        modal.classList.add("demoVisible") // Hace visible la modal
    });
});

//Para poder desaparecer la modal en cualquier punto, excepto cuando hacemos click en el campo email:
modal.addEventListener("click", (evento) => {
    if (evento.target !== emailInput) { /* el "evento".target lo que hace es que justamente allí donde haces click ( en este caso que el evento es "click") se selcciona ese elemento concretamente. Si resulta que el elemento es !== distinto al campo email que previamente hemos declarado, entonces será TRUE y se dispara el callback, en este caso es: que se quite la clase visible a la modal*/
        modal.classList.remove("demoVisible");
    }
});

//----------------------------------------------------------------------------------------- Carrusel de reseñas


// Aquí se declaran las constantes y variables que voy a usar:

const reviews = document.querySelectorAll(".tarjeta");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
let indice = 0; // Se declara un primer indice que sera 0 incialmente, y que nos sirve para ir "llevando la cuenta" posteriormente

// Establecer el primer div como visible al cargar la página
reviews[indice].style.display = "flex";

// El siguiente código hace que al darle click al boton derecho:
btnNext.addEventListener("click", () => {
    reviews[indice].style.display = "none"; // Se quite la tarjeta visible en ese momento ( al inicio sera la primera)
    indice = indice + 1;  // Hace que indice se le añada + 1 
    if (indice >= reviews.length) { // Aquí hacemos un if para decirle que si el indice es igual o mayor que el número de reseñas, entonces vuelva a la inicial
        indice = 0; // Para volver al principio
    }
    reviews[indice].style.display = "flex"; // Finalmente hace que se muestre la reseña según el indice después de haber hecho el click
});

// El siguiente código hace que al darle click al boton izquierndo haga justo lo mismo que la anterior pero hacia atrás:
btnPrev.addEventListener("click", () => {
    reviews[indice].style.display = "none";
    indice = indice - 1;
    if (indice < 0) {
        indice = reviews.length - 1; // Para volver al final
    }
    reviews[indice].style.display = "flex";
});


//----------------------------------------------------------------------------------------- Sección showcase de Servicios 


// Aquí se declaran la constante que voy a usar:

const productos = document.querySelectorAll(".productosCarrusel div");

// Hacemos un forEach de cada div que tendrá dos escenarios: cuando el puntero entre en el div("mouseenter") y cuando salda("mouseleave") - son eventos:


productos.forEach((producto) => {

    //mouseenter:
    producto.addEventListener("mouseenter", () => {
        const span = producto.querySelector("span"); // Esta constante hace que se declare el span dentro de ese div.
        if (span) { // Este if hace que, si se ha seleccionado el span con el evento anterior, cambie a display block para que se vea y la opacidad a 100%, teniendo en cuenta la transición creada en CSS + hover
            span.style.display = "block";
            span.style.opacity = 1; // Cambia la opacidad a 1 cuando el mouse entra
        }
    });

    //mouseleave:
    producto.addEventListener("mouseleave", () => {
        const span = producto.querySelector("span");
        if (span) {
            span.style.opacity = 0; // Cambia la opacidad a 0 cuando el mouse sale
            setTimeout(() => { // Asegura que la transición termine antes de ocultarlo añadiendo ese medio segundo que hace un estilo de "fade out"
                span.style.display = "none"; // Oculta el span después de la transición
            }, 500); 
        }
    });
});


