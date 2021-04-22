import React from 'react';
import c from '../../../img/Clear.png'
import h from '../../../img/Hail.png'
import sn from '../../../img/Snow.png'
import sl from '../../../img/Sleet.png'
import t from '../../../img/Thunderstorm.png'
import hr from '../../../img/HeavyRain.png'
import lr from '../../../img/LightRain.png'
import s from '../../../img/Shower.png'
import hc from '../../../img/HeavyCloud.png'
import lc from '../../../img/LightCloud.png'

const ImgState = props => {

    switch (props.img) {
        case "sn":
            return (<img src={sn} alt="" className={props.className}/>)
            break;
        case "sl":
            return (<img src={sl} alt="" className={props.className}/>)
            break;
        case "h":
            return (<img src={h} alt="" className={props.className}/>)
            break;
        case "t":
            return (<img src={t} alt="" className={props.className}/>)
            break;
        case "hr":
            return (<img src={hr} alt="" className={props.className}/>)
            break;
        case "lr":
            return (<img src={lr} alt="" className={props.className}/>)
            break;
        case "s":
            return (<img src={s} alt="" className={props.className}/>)
            break;
        case "hc":
            return (<img src={hc} alt="" className={props.className}/>)
            break;
        case "lc":
            return (<img src={lc} alt="" className={props.className}/>)
                break;
        case "c":
            return (<img src={c} alt="Clear" className={props.className}/>)
            break;
    
        default:
            return (<></>);
            break;
    }
}
 
export default ImgState;