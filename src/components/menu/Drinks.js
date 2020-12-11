import { Grid, Segment } from 'semantic-ui-react';

import { cocktails, beers, wines } from './data';

const Drinks = () => {

    const mixedDrinks = cocktails.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
                <p className="menu-description">
                    {item.description}
                </p>
            </li>
        )
    });

    const beer = beers.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
                <p className="menu-description">
                    {item.description}
                </p>
            </li>
        )
    });

    const wine = wines.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                {item.type}
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
                <p className="menu-description">
                    {item.description}
                </p>
            </li>
        )
    });

    return (
        <Segment>
            <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <h3 className="menu-head">COCKTAILS</h3>
                    <ul>
                        {mixedDrinks}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">WINE</h3>
                    <div className="wine-type"></div>
                    <ul>
                        {wine}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">BEER</h3>
                    <ul>
                        {beer}
                    </ul>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Drinks;