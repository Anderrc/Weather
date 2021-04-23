import React, { useState } from "react";
import Layout from "../components/templates/layout/layout";

const Index = props => {
    const [locationActual, setLocationActual] = useState({
        consolidated_weather: [
            {
                air_pressure: 0,
                applicable_date: "",
                created: "",
                humidity: 0,
                id: 0,
                max_temp: 19.005,
                min_temp: 10.245000000000001,
                predictability: 75,
                the_temp: 18.225,
                visibility: 11.834325041756143,
                weather_state_abbr: "lr",
                weather_state_name: "Light Rain",
                wind_direction: 219.60095823778028,
                wind_direction_compass: "SW",
                wind_speed: 2.835731523044089
            }
        ],
        latt_long: "4.656370,-74.117790",
        location_type: "City",
        parent: {title: "Colombia", location_type: "Country", woeid: 23424787, latt_long: "4.116410,-72.958527"},
        sources: [],
        sun_rise: "2021-04-21T05:47:45.357714-05:00",
        sun_set: "2021-04-21T18:02:29.956626-05:00",
        time: "2021-04-21T10:14:38.887656-05:00",
        timezone: "America/Bogota",
        timezone_name: "LMT",
        title: "Bogotá",
        woeid: 368148,
    });
    return ( 
        
        <AppContext.Provider value={[locationActual, setLocationActual]}>
            <Layout>

            </Layout>
        </AppContext.Provider>
       

     );
}
 
export default Index;
export const AppContext = React.createContext();