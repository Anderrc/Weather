import React from 'react';
import { Link } from "react-router-dom";
import './button.scss';

const Button = props => {
    const { type, text, link, action, img, className, children} = props
    if(type=== "button"){
        return ( 
            <button className={"o-button "+ className}  onClick={action}>{text} { children }</button>
         );
    }else if( type === "link" ){
        return ( 
            <Link to={ link }  className={"o-button "+ className} >{text}</Link>
         );
    }else if( type === "img" ){
        return ( 
            <button className={"o-button-img "+ className}  onClick={action}><img src={img} alt=""/></button>
        );
    }
}
 
export default Button;