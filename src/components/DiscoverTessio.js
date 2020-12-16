import React from 'react'

import fb from '../assets/fb-icon.png';
import instagram from '../assets/instagram-icon.png';
import slice from '../assets/slice-icon.png';
import map from '../assets/gmaps-icon.png';

const DiscoverTessio = () => {
    return (
        <div>
            <div className="google-map-code">
                <iframe 
                    title="tessio-location" 
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2687.6821136466483!2d-122.68335774813745!3d47.65174387908548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x54903aeb63528bf3%3A0x6bd3e6d3ce9cfb14!2sTessio%2C%202238%20NW%20Bucklin%20Hill%20Rd%20%23103%2C%20Silverdale%2C%20WA%2098383!3m2!1d47.6517439!2d-122.6811637!5e0!3m2!1sen!2sus!4v1607803939489!5m2!1sen!2sus"
                    height="450" 
                    style={{ border: 0 }} 
                    aria-hidden="false" 
                >
                </iframe>
            </div>
            
            <div className="about-container">

                <div className="about-tessio-section">
                    <h2>TESSIO'S HOURS</h2>
                    <ul className="about-tessio-info">
                        <li>Sunday through Thursday</li>
                        <li className="bold">4pm ➛ 8pm</li>
                        <li>Friday and Saturday</li>
                        <li className="bold">4pm ➛ 9pm</li>
                    </ul>
                </div>

                <div className="about-tessio-section">
                    <h2>CONTACT US</h2>
                    <ul className="about-tessio-info">
                        <li>2238 NW Bucklin Hill Rd Ste 103</li>
                        <li>Silverdale, WA 98383</li>
                        <li className="bold">(360) 286-2193</li>
                    </ul>
                </div>
                
                <div className="about-tessio-section">
                    <ul className="about-tessio-links">
                        <li>
                            <a href="https://www.facebook.com/Pizza.Beer.Whiskey/" target="_blank" rel="noreferrer">
                                <img className="icons" src={fb} alt="facebook" /><span>Find us on Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tessio.pizza.beer.whiskey/?hl=bn" target="_blank" rel="noreferrer">
                                <img className="icons" src={instagram} alt="instagram" /><span>Find us on Instagram</span>
                            </a>
                        </li>             
                        <li>
                            <a href="https://slicelife.com/restaurants/wa/silverdale/98383/tessio/menu" target="_blank" rel="noreferrer">
                                <img className="icons" src={slice} alt="slice" /><span>Order through Slice</span>
                            </a>
                        </li>    
                        <li>
                            <a href="https://goo.gl/maps/ZzRhoudrNdUaWeTS7" target="_blank" rel="noreferrer">
                                <img className="icons" src={map} alt="google maps" /><span>On Google Maps</span>
                            </a>
                        </li>
                    </ul>    
                </div>
            </div>
        </div>
    )
}

export default DiscoverTessio;