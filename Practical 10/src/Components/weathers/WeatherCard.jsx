import React from 'react'

function WeatherCard({props}) {
    console.log(props)
  return (
    <div className='row mt-5' >
        <div className='col-md-5  col-9  offset-2 offset-md-5'>
            <div className={`card ${props.day ? "bg-info text-dark":"bg-dark text-light"}  `}   >
                <div className='card-header d-flex justify-content-evenly '> <h3>{"Weather Api"}</h3>
                {props.day?<i class="fa-regular fa-sun"></i>:<i class="fa-solid fa-moon"></i>}
            </div>
            <div className='card-body d-flex'>
                Longitude : {props.longi}°
                <br/>
                Latitude : {props.lati}°
                <br/>
                Location : {props.location}
                <br/>
                Temprature : {props.temprate}°C
                <br/>
                WindSpeed : {props.windspeed}KM/S
                <br/>
                WindDirection : {props.direction}°

            </div>
            <div className='card-footer' >Success</div>
                </div>
        </div>
    </div>
  )
}

export default WeatherCard