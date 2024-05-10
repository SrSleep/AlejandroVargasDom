//Ejercicio 1
let calcularBtn = document.getElementById("calcular");
let resultadoDiv = document.getElementById("resultado");
calcularBtn.addEventListener("click", function () {

    let valorAltura = document.getElementById("altura").value;
    let valorPeso = document.getElementById("peso").value;

    if (valorAltura === "" || valorPeso === "") {
        resultadoDiv.innerHTML = `<p class="error">Por favor ingrese los datos sugeridos</p>`;
    } else {
        valorAltura = parseFloat(valorAltura / 100);
        valorPeso = parseInt(valorPeso);
        imc = valorPeso / (valorAltura * valorAltura);
        resultadoDiv.innerHTML = `<p class="success">Su IMC es: ${imc.toFixed(2)}</p>`;
    }
});

//Ejercicio 2
let dolarInput = document.getElementById("dolar");
let pesoCInput = document.getElementById("pesoC");

function convertToPesos() {
    let dolarValue = parseFloat(dolarInput.value);
    let pesoCValue = dolarValue * 3.888;
    pesoCInput.value = pesoCValue.toFixed(2);
}

function convertToUSD() {
    let pesoCValue = parseFloat(pesoCInput.value);
    let dolarValue = pesoCValue / 3.888;
    usdInput.value = dolarValue.toFixed(2);
}

dolarInput.addEventListener("input", convertToPesos);
pesoCInput.addEventListener("input", convertToUSD);

//Ejercicio 3
let arrayNotas = [
    {
        id: 1,
        titulo: `Sacar la basura`,
        texto: `mi mama me va retar si no lo hago`,
        realizada: false
    },
    {
        id:2,
        titulo:`Comer`,
        texto:`quedo comida de ayer`,
        realizada:true
    },
    {
        id:3,
        titulo:`estudiar`,
        texto:`estoy flojo de papeles y no voy a aprobar la task 3`,
        realizada:false
    },
    {
        id:4,
        titulo:`Comer`,
        texto:`quedo comida de ayer`,
        realizada:true
    }
]

let idGlobal = 4