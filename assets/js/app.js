const form = document.getElementById("form")
const inputText = document.getElementById("inputText")
const boton = document.getElementById("boton")
const cardTemp = document.getElementById("cardTemp")
import { crearGrafico } from "./chart.js"

const consulta = async (event) => {
    event.preventDefault()
    if (inputText.value === ""){
        Swal.fire('¡Ingresa una ciudad!') //mensaje de alerta persolizado
        return
    }
    
    try{
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputText.value}&appid=6faa87e3f768687b9e45ebce4dfc63ec&units=metric&lang=es`
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    const fechas = datos.list.map(elemento => elemento.dt_txt.substring(2,16))
    const temperaturas = datos.list.map(elemento => elemento.main.temp)

    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&appid=6faa87e3f768687b9e45ebce4dfc63ec&lang=es&units=metric`
    const respuesta2 = await fetch(url2)
    const datos2 = await respuesta2.json()
    cardTemp.innerHTML = `
    <div class = "weatherCard ${datos2.weather[0].main}" >
    <h3 class="red">${datos2.main.temp}ºC</h3>
    <span>${datos2.weather[0].description}</span>
    <h5>velocidad del viento</h5>
    <span>${datos2.wind.speed}km/h</span> </div>
`

crearGrafico (fechas,temperaturas)

    }
    catch{ Swal.fire("La ciudad ingresada no existe")
    form.reset()

    }
   
   
}

    boton.addEventListener("click", consulta)

