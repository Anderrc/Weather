import React from 'react';
import Aside from '../../organims/aside/aside';
import MoreInformation from '../../organims/more-information/more-information';
import './layout.scss';

const Layout = props => {
    return ( 
        <div className="t-layout">
            <div className="t-layout-aside">
                <Aside />
            </div>
            <div className="t-layout-container">
                <MoreInformation />
            </div>
        </div>
     );
}
 
export default Layout;