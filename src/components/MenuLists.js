import { useState } from 'react';

import HappyHour from './menu/HappyHour';
import Food from './menu/Food';
import Drinks from './menu/Drinks';
import Liquors from './menu/Liquors';

const MenuLists = () => {
    const [activeItem, setActiveItem] = useState('happy hour');

    const handleItemClick = (name) => setActiveItem(name);
  
    return (
        <div className="menu-list-container">
            <ul className="menu-nav">
                <li onClick={() => {handleItemClick('happy hour')}} style={{color: activeItem === 'happy hour' ? '#6E9D09' : '#666'}}>
                    Happy Hour
                </li>
                <li onClick={() => {handleItemClick('food')}} style={{color: activeItem === 'food' ? '#6E9D09' : '#666'}}
                    >Food
                </li>
                <li onClick={() => {handleItemClick('beverages')}} style={{color: activeItem === 'beverages' ? '#6E9D09' : '#666'}}>
                    Beverages
                </li>
                <li onClick={() => {handleItemClick('whiskey')}} style={{color: activeItem === 'whiskey' ? '#6E9D09' : '#666'}}>
                    Whiskey
                </li>
            </ul>    
            
            { activeItem === 'happy hour' ? <HappyHour /> : '' }
            { activeItem === 'food' ? <Food /> : '' }
            { activeItem === 'beverages' ? <Drinks /> : '' }
            { activeItem === 'whiskey' ? <Liquors /> : '' }
        </div>
    )
}

export default MenuLists;