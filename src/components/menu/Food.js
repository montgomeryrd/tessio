import { Divider, Grid, Segment } from 'semantic-ui-react';

import { starters, salads, pizzas, paninis } from './data';

const Food = () => {

    const starts = starters.map((item, index) => {
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

    const greens = salads.map((item, index) => {
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

    const pies = pizzas.map((item, index) => {
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

    const sammies = paninis.map((item, index) => {
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
                    <h3 className="menu-head">STARTERS</h3>
                    <ul>
                        {starts}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">TESSIO SALADS</h3>
                    <ul>
                        {greens}
                    </ul>
                </Grid.Column>
            </Grid>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <h3 className="menu-head">10" PIZZAS</h3>
                    <ul>
                        {pies}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">TESSIO PANINIS</h3>
                    <ul>
                        {sammies}
                    </ul>
                </Grid.Column>
            </Grid>
            <Divider vertical>AND</Divider>
        </Segment>
    )
}

export default Food;