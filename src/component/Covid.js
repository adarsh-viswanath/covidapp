import axios from 'axios';
import { useState } from 'react';

const Covid = () => {
    const [covid, setCovid] = useState("")
    const message = false
    const apiCall = async (e) => {
        e.preventDefault();
        console.log(e);
        
        const country = e.target.elements.location.value;
        const url = `https://api.covid19api.com/summary`
        const request = axios.get(url);
        const response = await request;
        console.log(response.data.Countries.length);

        for (let i = 0; i < response.data.Countries.length; i++) {
            if(response.data.Countries[i].Country===country) {
                console.log(response.data.Countries[i].Country);
               
                setCovid({
                Country: response.data.Countries[i].Country,
                totalConfirmed: response.data.Countries[i].TotalConfirmed,
                totalDeath: response.data.Countries[i].TotalDeaths,
                        
            }) 
            }
          }
       
    }

    const Weatherdetails = () => {
        return(
            <div>
                <h1>Country: {covid.Country}</h1>
                <h1>Total Confirmed: {covid.totalConfirmed}</h1>
                <h1>Total Deaths: {covid.totalDeath}</h1>     
            </div>
        )
    }

        return(
            <div>
                <form onSubmit={apiCall}>
                    <input type="text" placeholder="Enter a city name" name="location"></input>
                    <button>Search</button>
                </form>
                <Weatherdetails/>
            </div>
        )
}
export default Covid;
