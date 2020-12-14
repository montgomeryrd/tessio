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
                <li onClick={() => {handleItemClick('happy hour')}} style={{color: activeItem === 'happy hour' ? '#5499C7' : '#666'}}>
                    Happy Hour
                </li>
                <li onClick={() => {handleItemClick('food')}} style={{color: activeItem === 'food' ? '#5499C7' : '#666'}}
                    >Food
                </li>
                <li onClick={() => {handleItemClick('beverages')}} style={{color: activeItem === 'beverages' ? '#5499C7' : '#666'}}>
                    Beverages
                </li>
                <li onClick={() => {handleItemClick('whiskey')}} style={{color: activeItem === 'whiskey' ? '#5499C7' : '#666'}}>
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