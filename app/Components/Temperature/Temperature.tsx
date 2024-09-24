"use client"
import { kelvinToCelsius } from '@/app/utils/misc';
import { useGlobalContext } from '@/app/context/globalContext';
import React, { useState } from 'react'
import { clearSky, cloudy, drizzleIcon, rain, snow, thunderstorm, waves } from '@/app/utils/Icons';

function Temperature() {
    const {forecast} = useGlobalContext()

    const { main, timezone, name, weather } = forecast

    if (!forecast || !weather) {
        return <div>Loading...</div>
    }

    const temp = kelvinToCelsius(main?.temp);
    const mintemp = kelvinToCelsius(main?.temp_min);
    const maxtemp = kelvinToCelsius(main?.temp_max);

    // States
    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const { main: weatherMain, description } = weather[0];


    const getIcon = () => {
        switch (weatherMain) {
            case "Drizzle":
                return drizzleIcon;
            case "Rain":
                return rain;
            case "Snow":
                return snow;
            case "Clear":
                return clearSky;
            case "Clouds":
                return cloudy;
            case "Thunderstorm":
                return thunderstorm;
            case "Atmosphere":
                return waves;
            default:
                return clearSky;
        }
    }

    return (
        <div className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
            <p className='flex justify-between items-center'>
                <span className='font-medium'>{currentDay}</span>
                <span className='font-medium'>{localTime}</span>
            </p>
        </div>
    )
}

export default Temperature 