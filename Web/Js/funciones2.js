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

//----------------------------------------------------------------------------------------- Logo que direcciona al index.html

// Aquí se declara la constante que voy a usar:

const logo = document.getElementById("logo");


logo.addEventListener("click",() => {
    // Redirige a la página index
    window.location.href = "index.html";
});
