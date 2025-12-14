import { useEffect, useState } from "react"
import City from "./City"
import style from './WeatherApp.module.css'

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({})
    const [inputValue, setInputValue] = useState('')
    const [inputCity, setInputCity] = useState('')

    useEffect(() =>{
        const getWeatherData = async () => {
            await fetch('https://api.openweathermap.org/data/2.5/weather?lat=82&lon=42&appid=94f970db1e9c0803481daa2265f780ad&units=metric&lang=ru')
            .then(res => res.json())
            .then(data => setWeatherInfo(data))
        }
        getWeatherData();
    })

    return(
        <main>
            <City time={Date().toString()}
            className={style.title}
            city = {inputCity ? inputCity : "Новосибирск"}
            temp = {weatherInfo?.main?.temp ?? "0"}
            />
            <section className={style.panel}>
                <input onChange={e => setInputValue(e.target.value)} type="text" />
                <button onClick={() => setInputCity(inputValue)}>Enter</button>
                <div></div>
                <div></div>
            </section>
        </main>
    )
}