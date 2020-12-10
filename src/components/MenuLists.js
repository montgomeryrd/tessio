import { useState } from 'react';
import { Menu } from 'semantic-ui-react';

import HappyHour from './menu/HappyHour';
import Food from './menu/Food';
import Drinks from './menu/Drinks';
import Liquors from './menu/Liquors';

const MenuLists = () => {
    const [activeItem, setActiveItem] = useState('happy hour');

    const handleItemClick = (e, { name }) => setActiveItem(name);
  
    return (
        <div>
            <Menu pointing secondary size="massive" color="teal">
                <span className="tessio-menu">
                    TESSIO MENU
                </span>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='happy hour'
                        active={activeItem === 'happy hour'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='food'
                        active={activeItem === 'food'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='beverages'
                        active={activeItem === 'beverages'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='whiskey'
                        active={activeItem === 'whiskey'}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
            { activeItem === 'happy hour' ? <HappyHour /> : '' }
            { activeItem === 'food' ? <Food /> : '' }
            { activeItem === 'beverages' ? <Drinks /> : '' }
            { activeItem === 'whiskey' ? <Liquors /> : '' }
        </div>
    )
}

export default MenuLists;