import React from 'react'
import { useSelector } from 'react-redux'
import { useFetch } from '../hooks/useFetch'

export const Clima = () => {
    const { ciudad, pais } = useSelector(state => state.clima)
    const { data, loading } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=09c0528147b9bd01bf9d3f627f526dbb`)
    const { temp } = !!data && data.main

    return (
        <div className="clima__container">
            {
                loading ? <h1>Cargando</h1>
                    :
                    <>
                        <h1 style={{textAlign: 'center'}}>La Temperatura Actual de {ciudad}:</h1>
                        <img alt="Imagen" src={(parseFloat(temp - 273.15, 10).toFixed(2) >= 19) ? 'https://res.cloudinary.com/defok5em4/image/upload/v1630294896/API%C2%B4S/sunrise_sun_sunny_shower_showers_sunny_cloudy_fog_day_time_1458_gdfini.png' : 'https://res.cloudinary.com/defok5em4/image/upload/v1630309589/API%C2%B4S/clouds_icon-icons.com_62491_1_k5xcla.png'} className="clima__imagen" />
                        <h3 className="clima__temp">{parseFloat(temp - 273.15, 10).toFixed(2)}°</h3>
                    </>
            }
        </div>
    )
}
