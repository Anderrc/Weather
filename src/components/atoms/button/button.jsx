import React from 'react';
import { Link } from "react-router-dom";
import './button.scss';

const Button = props => {
    const { type, text, link, action, img} = props
    if(type=== "button"){
        return ( 
            <button className="o-button" onClick={action}>{text}</button>
         );
    }else if( type === "link" ){
        return ( 
            <Link to={ link }  className="o-button">{text}</Link>
         );
    }else if( type === "img" ){
        return ( 
            <button className="o-button-img" onClick={action}><img src={img} alt=""/></button>
        );
    }
}
 
export default Button;