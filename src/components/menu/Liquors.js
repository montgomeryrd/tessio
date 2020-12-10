import { Grid, Segment } from 'semantic-ui-react';

import { irish, rye, malt, blended, bourbon, canadian, flavored, misc, flights } from './data';

const Liquors = () => {

    const irishAlc = irish.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const ryeAlc = rye.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const maltAlc = malt.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const blendedAlc = blended.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const bourbonAlc = bourbon.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const canadianAlc = canadian.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const flavoredAlc = flavored.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const miscAlc = misc.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const flightsAlc = flights.map((item, index) => {
        return (
            <li className="menu-item-container" key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    return (
        <Segment>
            <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <h3 className="menu-head">IRISH</h3>
                    <ul>
                        {irishAlc}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">RYE</h3>
                    <ul>
                        {ryeAlc}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">SINGLE MALT SCOTCH</h3>
                    <ul>
                        {maltAlc}
                    </ul>
                </Grid.Column>
            </Grid>
            <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <h3 className="menu-head">BLENDED SCOTCH</h3>
                    <ul>
                        {blendedAlc}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">BOURBON</h3>
                    <ul>
                        {bourbonAlc}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">CANADIAN</h3>
                    <ul>
                        {canadianAlc}
                    </ul>
                </Grid.Column>
            </Grid>
            <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <h3 className="menu-head">FLAVORED</h3>
                    <ul>
                        {flavoredAlc}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">MISC</h3>
                    <ul>
                        {miscAlc}
                    </ul>
                </Grid.Column>
                <Grid.Column>
                    <h3 className="menu-head">WHISKEY FLIGHTS</h3>
                    <ul>
                        {flightsAlc}
                    </ul>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Liquors;