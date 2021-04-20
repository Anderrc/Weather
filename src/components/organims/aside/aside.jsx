import React from 'react';
import './aside.scss';
import img from '../../../img/location.ico';
import Button from '../../atoms/button/button';

const Aside = props => {
    return ( 
        <div className="o-aside">
            <div className="o-aside-buttons">
                <Button type='button' text="Buscar una ciudad" />
                <Button type='img' img={ img } />
            </div>
        </div>
     );
}
 
export default Aside;