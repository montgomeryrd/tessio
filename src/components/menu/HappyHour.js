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
        <div className="menu-container happy-hour-container">
            <div className="menu-div">
                <h3 className="menu-head">APPETIZERS</h3>
                <ul>
                    {apps}
                </ul>
            </div>
            <div className="divider">
                <div className="vertical-line">
                    <span>AND</span>
                </div>
            </div>
            <div className="menu-div">
                <h3 className="menu-head">BEVERAGES</h3>
                <ul>
                    {beers}
                    {wines}
                    {well}
                </ul>
            </div>
        </div>
    )
}

export default HappyHour;