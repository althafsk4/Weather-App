import {useState,useEffect} from "react";
import axios from "axios";
import { Button,Grid,TextField,Backdrop } from "@mui/material";
import WeatherCard from "../weatherCard/WeatherCard";
import CircularProgress from '@mui/material/CircularProgress';

const Searchbar=()=>{
    const API_KEY = "48cbb97aed6e493105e920f2dca487f4";
    const [lat,setLat]=useState(12.9767936);
    const [lon,setLon]=useState(77.590082)
    const [city,setCity]=useState("Bangalore")
    const [weather,setWeather]=useState({})
    const [loading,setLoading]=useState(false)

    const getCityWeather=async(e)=>{
        e.preventDefault();
        setLoading(true)
        await axios.get("http://api.openweathermap.org/geo/1.0/direct",{
            params: {
              q: city,
              limit:1,
              appid:API_KEY
            }
          })
          .then((res)=>{
            const latitude=res.data[0].lat
            const logitude=res.data[0].lon
            setLat(latitude);
            setLon(logitude);
            getWeather(latitude,logitude);
        })
          .catch((e)=>setLoading(false))
    }

    const dateConvert=(date)=>{
       let toDate= new Date(date*1000);
       const hours =toDate.getHours();
       const min=toDate.getMinutes()
       return `${hours}:${min}`
    }
    const getWeather=async (latitude,logitude)=>{
      setLoading(true)
        await axios.get("https://api.openweathermap.org/data/3.0/onecall",{
            params: {
              lat: latitude,
              lon:logitude,
              appid:"48cbb97aed6e493105e920f2dca487f4",
              units:"metric"
            }
          })
          .then((res)=>{
            setLoading(false)
            const data = {
                temp:res.data.current.temp,
                humidity:res.data.current.humidity,
                feels_like:res.data.current.feels_like,
                sunrise:dateConvert(res.data.current.sunrise),
                sunset:dateConvert(res.data.current.sunset),
                wind_speed:res.data.current.wind_speed,
                desc:res.data.current.weather[0].description,
                city:city,
            }
            setWeather(data)
          })
          .catch((e)=>setLoading(false))
    }

    const handleOnChange=(e)=>{
        const cityName = e.target.value
        setCity(cityName);
    }
      useEffect(() => {
        getWeather(lat,lon)
      }, []); 

    const handleClick=(e)=>{
        getCityWeather(e)
    }
    return(
        <>
            <Grid sx={{display:"flex",justifyContent:"center"}}>
                <TextField sx={{marginRight:"1rem"}} type="text" onChange={handleOnChange}  size="small" value={city} label="City Name" variant="outlined"/>
                <Button type="submit" variant="contained" onClick={handleClick}>search</Button>
            </Grid>
            {weather.temp && (
                <Grid sx={{marginTop:"1rem"}}>
                    <WeatherCard data={weather}/>
                </Grid>
            )}
                    <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                  >
                    <CircularProgress sx={{color:"blue"}} />
                  </Backdrop>
        </>
    )
}

export default Searchbar;