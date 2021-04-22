import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../pages/index'
import location from '../../../img/location.svg';
import Button from '../../atoms/button/button';
import axios from 'axios';
import img from '../../../img/Shower.png'
import moment from 'moment';
import './aside.scss';
import ImgState from '../../atoms/img-state/img-state';

const Aside = props => {
    // const { img } = props
    moment.lang('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      }
      );
    const [locationActual, setLocationActual] = useContext(AppContext);
    const [search, setSearch] = useState([]);
    let ejecutar;
    let ubicacion;

    const weatherStates = {
        "sn":"Snow",
        "sl":"Sleet",
        "h":"Hail",
        "t":"Thunderstorm",
        "hr":"Heavy Rain",
        "lr":"Light Rain",
        "s":"Showers",
        "hc":"Heavy Cloud",
        "lc":"Light Cloud",
        "c":"Clear"
    };

    useEffect(() => {
        // console.log(1)
        if (navigator.geolocation) { //check if geolocation is available
            navigator.geolocation.getCurrentPosition( async function(position){
                // console.log(position);
                var config = {
                    method: 'get',
                    url: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong='+position.coords.latitude+','+position.coords.longitude,
                    headers: {
                    }
                };
                await axios(config)
                .then(async function (response) {
                    setSearch(response.data);
                    ubicacion = position;
                    ejecutar = 1;
                    var config = {
                        method: 'get',
                        url: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'+response.data[0].woeid+'/',
                        headers: {
                         }
                        };
                    await axios(config)
                    .then(function (response) {
                        setLocationActual(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            });   
        }

    
    }, [ubicacion])

    return ( 
        <div className="o-aside">
            <div className="o-aside-buttons">
                <Button type='button' text="Buscar una ciudad" />
                <Button type='img' img={ location } />
            </div>
            <div className="o-aside-icono">
                {/* <img src={ img } alt=""/> */}
                <ImgState img={ locationActual['consolidated_weather'][0].weather_state_abbr } ></ImgState>
            </div>
            <div className="o-aside-temp">
                <p className="o-aside-tem-number">
                    { Math.floor( locationActual['consolidated_weather'][0].the_temp) }<span className="o-aside-tem-number-prefijo">°C</span>
                </p>
            </div>
            <div className="o-aside-time">
                <p>{weatherStates[locationActual['consolidated_weather'][0].weather_state_abbr]}</p>
            </div>
            <div className="o-aside-date">
                <p>{moment(locationActual['consolidated_weather'][0].time).format('lll')}</p>
            </div>
        </div>
     );
}
 
export default Aside;