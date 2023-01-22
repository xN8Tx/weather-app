import React, {useState,  useEffect} from 'react';
import './App.css'
import CitySearch from '../CitySearch/CitySearch';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import { GetData } from '../../GetData/GetData';
import Loading from '../Loading/Loading';

const App = () => {
    const [data, setData] = useState()
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isFirstStart, setIsFirstStart] = useState(true)

    async function fetching(value) {
        try {
            setIsLoading(true)
            const res = await GetData(value)
            setData(res.data);
            setIsFirstStart(false)
        } catch (error) {
            setError('error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setError(null)
        setIsFirstStart(true)
    }, [value])


    return (
        <section className='app'>
            <CitySearch 
                value={value}
                setValue={setValue}
                description={isFirstStart ? " ..." : data.weather[0].description}
            />
            {   
                error === 'error'
                ?
                <h1 className='start'>Oops, check the city name,<br/>maybe there are mistake</h1>
                :
                isFirstStart 
                ?
                <h1 className='start'>Find a country</h1>
                :
                isLoading
                ?
                <Loading />
                :
                <WeatherInfo
                    main={data.weather[0].main}
                    temp={data.main.temp}
                    min={data.main.temp_min}
                    max={data.main.temp_max}
                    speed={data.wind.speed}
                    humidity={data.main.humidity}
                    gust={data.wind.gust}
                />
            }
            <button className='button' onClick={(e) => {
                e.preventDefault()
                fetching(value)
            }}>Look at {value}</button>
        </section>
    );
};

export default App;