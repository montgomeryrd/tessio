import { irish, rye, malt, blended, bourbon, canadian, flavored, misc, flights } from './data';

const Liquors = () => {

    const irishAlc = irish.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const ryeAlc = rye.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const maltAlc = malt.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const blendedAlc = blended.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const bourbonAlc = bourbon.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const canadianAlc = canadian.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const flavoredAlc = flavored.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const miscAlc = misc.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item} ${item.price}
                </p>
            </li>
        )
    });

    const flightsAlc = flights.map((item, index) => {
        return (
            <li key={index}>
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
        <div className="menu-container">

            <div className="menu-div three-column-view">
                <h4 className="menu-head">WHISKEY FLIGHTS</h4>
                <ul>
                    {flightsAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">BOURBON</h4>
                <ul className="menu-alcohol-spacing">
                    {bourbonAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">MALT SINGLE SCOTCH</h4>
                <ul className="menu-alcohol-spacing">
                    {maltAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">BLENDED SCOTCH</h4>
                <ul className="menu-alcohol-spacing">
                    {blendedAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">IRISH WHISKEY</h4>
                <ul className="menu-alcohol-spacing">
                    {irishAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">RYE WHISKEY</h4>
                <ul className="menu-alcohol-spacing">
                    {ryeAlc}
                </ul>
            </div>
            
            <div className="menu-div three-column-view">
                <h4 className="menu-head">CANADIAN WHISKEY</h4>
                <ul className="menu-alcohol-spacing">
                    {canadianAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">FLAVORED</h4>
                <ul className="menu-alcohol-spacing">
                    {flavoredAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">MISC</h4>
                <ul className="menu-alcohol-spacing">
                    {miscAlc}
                </ul>
            </div>
            
        </div>
    )
}

export default Liquors;