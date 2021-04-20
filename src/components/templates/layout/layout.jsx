import React from 'react';
import Aside from '../../organims/aside/aside';
import './layout.scss';

const Layout = props => {
    const { children } = props;
    return ( 
        <div className="t-layout">
            <div className="t-layout-aside">
                <Aside />
            </div>
            <div className="t-layout-container">
                { children }
            </div>
        </div>
     );
}
 
export default Layout;