import React, { useContext } from 'react';
import { AppContext } from '../../../pages/index';
import img from '../../../img/Hail.png';
import moment from 'moment'
import './more-information.scss';
import ImgState from '../../atoms/img-state/img-state';
import air from '../../../img/near_me_white_24dp.svg';

const MoreInformation = props => {
    const [locationActual] = useContext(AppContext);

    const rot = {
        transform: `rotate(${locationActual['consolidated_weather'][0].wind_direction}deg)`
        // transform: `rotate(-150deg)`
      };
    return ( 
        <div className="o-more-information">
            <div className="o-more-information-days">
                {
                    locationActual['consolidated_weather'].map((item, key)=>(
                        key !== 0 ? 
                            <div className="o-more-information-days-day" key={key}>
                                <p>{moment(item['applicable_date']).format('dddd, D MMM')}</p>
                                <ImgState img={item['weather_state_abbr'] } className="o-more-information-days-day-img" />

                                <p className="o-more-information-days-day-temp"><span>{ Math.floor( item['min_temp'] ) }°C</span><span>{ Math.floor( item['max_temp'] )}°C</span></p>
                            </div>
                            :""
                    ))
                }
            </div>
            <div className="o-more-information-today">
                <h2>Lo más destacado de hoy</h2>
                <div className="o-more-information-today-hight-lights">
                    <div className="o-more-information-today-hight-lights-item">
                        <p className="o-more-information-today-hight-lights-item-title">Wind status</p>
                        <p><span className="dato">{ Math.floor(locationActual['consolidated_weather'][0].wind_speed) }</span><span className="ext">mph</span></p>
                        <p className="direction"><img src={air} alt="" className="air-direction" style={ rot }/>wsw</p>
                    </div>
                    <div className="o-more-information-today-hight-lights-item">
                        <p className="o-more-information-today-hight-lights-item-title">Humidity</p>
                        <p><span className="dato">{Math.floor(locationActual['consolidated_weather'][0].humidity)}</span><span className="ext">%</span></p>
                        <div className="progres-bar">
                            <div className="progres-bar-porcent">
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </div>
                            <div className="progres-bar-bar">
                                <progress value={Math.floor(locationActual['consolidated_weather'][0].humidity)} max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className="o-more-information-today-hight-lights-item">
                        <p className="o-more-information-today-hight-lights-item-title">Visibility</p>
                        <p><span className="dato">{Math.floor(locationActual['consolidated_weather'][0].visibility)}</span><span className="ext">miles</span></p>
                    </div>
                    <div className="o-more-information-today-hight-lights-item">
                        <p className="o-more-information-today-hight-lights-item-title">Air Pressure</p>
                        <p><span className="dato">{Math.floor(locationActual['consolidated_weather'][0].predictability)}</span><span className="ext">mb</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MoreInformation;