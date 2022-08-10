import React from 'react';
import usbLogo from '../images/usb-logo.svg';

/**
 * Banner component which imports the usbLogo and displays with US Bank branding
 * @param {*} props 
 */
const Banner = (props) => {
  return (
    <header role="banner">
        <img src={usbLogo} alt="US Bank Logo" className="header-logo"/>
    </header>
  )
}

export default Banner;