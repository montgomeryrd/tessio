import { Divider, Grid, Segment } from 'semantic-ui-react';

import { appetizers, tapBeers, houseWines, wells } from './data';

const HappyHour = () => {

    const apps = appetizers.map((item, index) => {
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

    const beers = tapBeers.map((item, index) => {
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

    const wines = houseWines.map((item, index) => {
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

    const well = wells.map((item, index) => {
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

    return (
        <Segment>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <h3 className="menu-head">APPETIZERS</h3>
                    <ul>
                        {apps}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">BEVERAGES</h3>
                    <ul>
                        {beers}
                        {wines}
                        {well}
                    </ul>
                </Grid.Column>
            </Grid>

            <Divider vertical>AND</Divider>
        </Segment>
    )
}

export default HappyHour;