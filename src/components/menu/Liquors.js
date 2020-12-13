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
                <h3 className="menu-head">WHISKEY FLIGHTS</h3>
                <ul>
                    {flightsAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">BOURBON</h3>
                <ul>
                    {bourbonAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">MALT SINGLE SCOTCH</h3>
                <ul>
                    {maltAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">BLENDED SCOTCH</h3>
                <ul>
                    {blendedAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">IRISH WHISKEY</h3>
                <ul>
                    {irishAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">CANADIAN WHISKEY</h3>
                <ul>
                    {canadianAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">RYE WHISKEY</h3>
                <ul>
                    {ryeAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">FLAVORED</h3>
                <ul>
                    {flavoredAlc}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h3 className="menu-head">MISC</h3>
                <ul>
                    {miscAlc}
                </ul>
            </div>
            
        </div>
    )
}

export default Liquors;