import { Grid, Card, Box, CardContent, Typography } from '@mui/material';
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const WeatherCard = (data) => {
    const weatherData = data.data
    return (
        <Grid sx={{display:"flex",justifyContent:"center",opacity:0.5}}>
            <Box sx={{ width: "40vw"}}>
            <Card variant="outlined">
            <CardContent> 
                <Typography sx={{ fontSize: 20,fontWeight:700 }}>
                   {weatherData.city.toUpperCase()}
                </Typography> 
                <Typography sx={{ fontSize: 20,fontWeight:400,marginTop:"1rem" }}>
                     {weatherData.desc}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{marginTop:"1rem"}}>
                        <Typography sx={{ fontSize: 20,fontWeight:700,marginLeft:"1rem" }}>
                            <WbSunnyIcon sx={{color:"yellow",fontSize:"5rem"}}/> 
                        </Typography>  
                        <Typography sx={{ fontSize: 17,fontWeight:400}}>Sun Rise -  {weatherData.sunrise} </Typography>     
                    </Grid>
                    <Grid item xs={6} sx={{marginTop:"1rem"}}>
                        <Typography sx={{ fontSize: 20,fontWeight:700,marginLeft:"1rem" }}>
                            <WbTwilightIcon sx={{color:"black",fontSize:"5rem"}}/> 
                        </Typography>  
                        <Typography sx={{ fontSize: 17,fontWeight:400}}>Sun Set -  {weatherData.sunset} </Typography>     
                    </Grid>
                </Grid>
                <hr/>
                <Grid sx={{marginTop:"1rem",display:"flex",flexDirection:"row"}}>
                        <Typography sx={{ fontSize: 20,fontWeight:400 }}>
                        Tepmerature : {weatherData.temp} &#xb0; C
                        </Typography>  
                        <Typography sx={{ marginTop:"0.2rem",marginLeft:"1rem"}}><ThermostatIcon/></Typography>     
                </Grid>
                <Grid sx={{marginTop:"1rem",display:"flex",flexDirection:"row"}}>
                        <Typography sx={{ fontSize: 20,fontWeight:400 }}>
                        Feels like : {weatherData.feels_like} &#xb0; C
                        </Typography>  
                        <Typography sx={{ marginTop:"0.2rem",marginLeft:"1rem"}}><ThermostatIcon/></Typography>     
                </Grid>
                <Grid sx={{marginTop:"1rem",display:"flex",flexDirection:"row"}}>
                        <Typography sx={{ fontSize: 20,fontWeight:400 }}>
                        Humidity : {weatherData.humidity}
                        </Typography>  
                        <Typography sx={{ marginTop:"0.2rem",marginLeft:"1rem"}}> <OpacityIcon/></Typography>     
                </Grid>
                <Grid sx={{marginTop:"1rem",display:"flex",flexDirection:"row"}}>
                        <Typography sx={{ fontSize: 20,fontWeight:400 }}>
                        Wind Speed : {weatherData.wind_speed} 
                        </Typography>  
                        <Typography sx={{ marginTop:"0.2rem",marginLeft:"1rem"}}><AirIcon/></Typography>     
                </Grid>
            </CardContent>
            </Card>
            </Box>
        </Grid>
    );
}

export default WeatherCard;
