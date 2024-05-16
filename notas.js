//Ejercicio 3
let arrayNotas = [
    {
        id: 1,
        titulo: `Sacar la basura`,
        texto: `mi mama me va retar si no lo hago`,
        realizada: false
    },
    {
        id: 2,
        titulo: `Comer`,
        texto: `quedo comida de ayer`,
        realizada: true
    },
    {
        id: 3,
        titulo: `estudiar`,
        texto: `estoy flojo de papeles y no voy a aprobar la task 3`,
        realizada: false
    },
    {
        id: 4,
        titulo: `Tomar agua`,
        texto: `Debo hidratrarme bien para no desmayarme`,
        realizada: true
    }
]

let idGlobal = 4

let notasDiv = document.getElementById(`contedorNotas`);
pintarNotas(notasDiv, arrayNotas)
let guardarBoton = document.getElementById(`guardar`);
let resetBoton = document.getElementById(`reset`);
let changeswitch = document.getElementById(`realizadas`);
let inputBuscar = document.getElementById(`buscar`)

changeswitch.addEventListener(`change`, function (evento) {
    let arraycambiado = filtrarRealizadas(arrayNotas);
    if (changeswitch.checked) {
        if (arraycambiado.length == 0) {
            notasDiv.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR </p>`
        } else {
            if(inputBuscar.length != 0){
                arraycambiado=filtrarTexto(arraycambiado,inputBuscar.value)
                pintarNotas(notasDiv, arraycambiado);
            }
            pintarNotas(notasDiv, arraycambiado);
        }
    } else {
        pintarNotas(notasDiv, arrayNotas);
    }

})

inputBuscar.addEventListener(`input`, function (evento) {
    let arrayTexto = filtrarTexto(arrayNotas, inputBuscar.value);
    if (changeswitch.checked) {
        arrayTexto = filtrarRealizadas(arrayTexto);
        pintarNotas(notasDiv,arrayTexto)
    }else{
        pintarNotas(notasDiv,arrayTexto)
    }



})

guardarBoton.addEventListener(`click`, function (evento) {
    let titulo = document.getElementById(`tituloNota`).value;
    let texto = document.getElementById(`textoNota`).value;
    if (titulo == "" || texto == "") {
        pintarNotas(notasDiv, arrayNotas)
    } else {
        agregarNota(titulo, texto)
        pintarNotas(notasDiv, arrayNotas)
    }

});

resetBoton.addEventListener(`click`, function (evento) {
    limpiarInput();
});



function eliminarNota(id) {
    for (let i = 0; i < arrayNotas.length; i++) {
        if (arrayNotas[i].id === id) {
            arrayNotas.splice(i, 1)
        }
        pintarNotas(notasDiv, arrayNotas)
    }
}

function limpiarInput() {
    let titulo = document.getElementById(`tituloNota`);
    let texto = document.getElementById(`textoNota`);
    titulo.value = "";
    texto.value = "";
}

function limpiarContenedor() {
    notasDiv.innerHTML = "";
}


function agregarNota(titulo, texto) {
    let nota = {
        id: ++idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    }
    arrayNotas.push(nota)
    limpiarContenedor();
    limpiarInput();
}

function pintarNotas(ubicacion, laNota) {
    ubicacion.innerHTML = ""
    if (arrayNotas.length == 0) {
        notasDiv.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR </p>`
    } else {
        for (let i = 0; i < laNota.length; i++) {
            crearNota(ubicacion, laNota[i]);
        }
    }
}

function crearNota(ubicacion, laNota) {

    let nuevaNota = document.createElement(`div`);
    nuevaNota.classList.add(`card`, `w-25`);
    nuevaNota.innerHTML = `
        <div class="card-body text-center">

        <input onClick="marcaRealizada(${laNota.id})" type="checkbox"${laNota.realizada ? "checked" : ""}>

        <h5 class="card-title">${laNota.titulo}</h5>

        ${laNota.realizada ? `<p class="card-text"><del>${laNota.texto}</del></p>` : `<p class="card-text">${laNota.texto}</p>`}

        <button class="btn btn-danger eliminar" onclick ="eliminarNota(${laNota.id})" >Borrar</button>
        
        </div>`;
    ubicacion.appendChild(nuevaNota);

};

function marcaRealizada(id) {
    for (let i = 0; i < arrayNotas.length; i++) {
        if (arrayNotas[i].id === id) {
            if (arrayNotas[i].realizada) {
                arrayNotas[i].realizada = false;
            } else {
                arrayNotas[i].realizada = true;
            }
        }
    }
    let arraycambiado = filtrarRealizadas(arrayNotas);
    if (changeswitch.checked) {
        if (arraycambiado.length == 0) {
            notasDiv.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR </p>`
        } else {
            pintarNotas(notasDiv, arraycambiado);
        }
    } else {
        pintarNotas(notasDiv, arrayNotas);
    }

}


function filtrarRealizadas(lasNotas) {


    let arrayFiltrado = lasNotas.filter(laNota => laNota.realizada == true);

    return arrayFiltrado;
}

function filtrarTexto(lasNotas, texto) {
    let arrayFiltradoTexto = lasNotas.filter(laNota =>
        laNota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
        laNota.texto.toLowerCase().includes(texto.toLowerCase())
    );

    return arrayFiltradoTexto
}
