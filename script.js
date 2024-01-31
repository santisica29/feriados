
document.querySelector("#btnFeriados").addEventListener("click", BuscarFeriados);

PoblarSelect();

function PoblarSelect() {
    let slcPaises = document.querySelector("#slcPaises");

    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        for (let pais of data){
            slcPaises.innerHTML += `<option value="${pais.cca2}">${pais.name.common}</option>`;
        }
    })
}

function BuscarFeriados(){
    let codigoPais = document.querySelector("#slcPaises").value;
    let anio = document.querySelector("#anio").value;
    document.querySelector("ul").innerHTML = ""

    fetch(`https://date.nager.at/api/v2/publicholidays/${anio}/${codigoPais}`)
    .then((response) => response.json())
    .then((data) => {
        for (let feriado of data){
            document.querySelector("ul").innerHTML += `<li>${feriado.date} - ${feriado.localName}</li>`;
        }
    })
}
