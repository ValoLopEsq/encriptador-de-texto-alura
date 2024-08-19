//Variables
const btnEncriptar = document.getElementById("btn__encriptar");
const textEncriptar = document.getElementById("textarea__encriptar");
const advertencia = document.getElementById("encrip__advertencia");
const aviso = document.getElementById("advertencia");
const respuesta = document.getElementById("texto__final");
const contenidoDerecha = document.getElementById("contenido__derecha");
const btnCopiar = document.getElementById("btn__copiar");
const btnDesencriptar = document.getElementById("btn__desencriptar");

//evita el ingreso de caracteres no validos
textEncriptar.addEventListener("input", (e) => {
    let texto = e.target.value;
    let textoFiltrado = texto.replace(/[^a-zñ\s]/g, '');
    let textoUpper = /[A-Z]/.test(texto);
    e.target.value = textoFiltrado;
    
    //condicionar caracteres especiales
    if(texto !== textoFiltrado)
    {
        advertencia.style.display = "flex";
        aviso.textContent = "No debe tener acento o caracteres especiales";
        
        setTimeout(()=>{
            advertencia.style.display = "none";
        },3000);
    }
    
    //condicinar mayusculas
    if(textoUpper){
        advertencia.style.display = "flex";
        aviso.textContent = "El texto debe estar en minúsculas";
        
        setTimeout(()=>{
            advertencia.style.display = "none";
        },3000);
    }
});

//boton encriptar
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt);

    //condicionar vacio
    if(texto === ""){        
        advertencia.style.display = "flex";
        aviso.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(()=>{
            advertencia.style.display = "none";
        },3000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        
        //imprimiendo en el text area
        respuesta.style.fontSize = "24px";
        respuesta.style.textAlign = "left";
        respuesta.innerHTML = texto;
        contenidoDerecha.remove();
        btnCopiar.style.visibility = "inherit";
    }
});

//boton desencriptar
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt);

    //condicionar vacio
    if(texto === ""){        
        advertencia.style.display = "flex";
        aviso.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(()=>{
            advertencia.style.display = "none";
        },3000);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        //imprimiendo en el text area
        respuesta.style.fontSize = "24px";
        respuesta.style.textAlign = "left";
        respuesta.innerHTML = texto;
        contenidoDerecha.remove();
        btnCopiar.style.visibility = "inherit";
    }
});

//boton copiar
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    navigator.clipboard.writeText(respuesta.value);
});

// Evita la selección de texto
respuesta.addEventListener('mousedown', function(e) {
    e.preventDefault(); 
});
