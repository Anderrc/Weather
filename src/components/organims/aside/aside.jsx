import React, { useState } from 'react';
import './aside.scss';
import location from '../../../img/location.svg';
import Button from '../../atoms/button/button';
import axios from 'axios';

const Aside = props => {
    const { img } = props

    const [locationActual, setLocationActual] = useState("");
    const [search, setSearch] = useState("")

    if (navigator.geolocation) { //check if geolocation is available
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            var config = {
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong='+position.coords.latitude+','+position.coords.longitude,
                // mode: 'no-corse',
                headers: {
                    // 'Access-Control-Allow-Origin':'*'
                 }
                };
            axios(config)
            .then(function (response) {
                setSearch(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        });   
    }

    // useEffect(() => {
    //     var config = {
    //         method: 'get',
    //         url: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/',
    //         // mode: 'no-corse',
    //         headers: {
    //             // 'Access-Control-Allow-Origin':'*'
    //          }
    //         };
    //     axios(config)
    //     .then(function (response) {
    //         setLocationActual(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //     return () => {
    //         cleanup
    //     }
    // }, [search])

    return ( 
        <div className="o-aside">
            <div className="o-aside-buttons">
                <Button type='button' text="Buscar una ciudad" />
                <Button type='img' img={ location } />
            </div>
            <div className="o-aside-icono">
                <img src={ img } alt=""/>
            </div>
        </div>
     );
}
 
export default Aside;