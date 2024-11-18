//Crea constantes para cada id
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const titulo = document.getElementById("principal");

//Se revisa que los botones existan de ser asi manda a llamar a la funcion de redireccion
//en caso contrario mostramos por consola que no existe ningun boton
if (boton1) {
    boton1.addEventListener("click", redirectFunction1);
} else {
    console.error("Button 1 not found.");
}

if (boton2) {
    boton2.addEventListener("click", redirectFunction2);
} else {
    console.error("Button 2 not found.");
}

if (boton3) {
    boton3.addEventListener("click", redirectFunction3);
} else {
    console.error("Button 3 not found.");
}

if (titulo) {
    titulo.addEventListener("click", redirectFunction3)
}else{
    console.error("Title not found.");
}

function redirectFunction1() {
    console.log("Redireccionando a la página de Diversión...");
    setTimeout(() => {
        window.location.href = "/page/diversion.html";
    }, 1000); // Delay for 1 second
}
//Se crea la funcion para redireccionar a la pagina de ciencia

function redirectFunction2() {
    console.log("Redireccionando a Google...");
    setTimeout(() => {
        window.location.href = "/page/ciencia.html";
    }, 1000); // Delay for 1 second
}

function redirectFunction3() {
    console.log("Redireccionando a Principal...");
    setTimeout(() => {
        window.location.href = "/index.html";
    }, 1000); // Delay for 1 second
}