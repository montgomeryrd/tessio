import { cocktails, beers, wines } from './data';

const Drinks = () => {

    const mixedDrinks = cocktails.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item}, ${item.price}
                </p>
                <p className="menu-description">
                    {item.description}
                </p>
            </li>
        )
    });

    const beer = beers.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item}, ${item.price}
                </p>
                <p className="menu-description">
                    {item.description}
                </p>
            </li>
        )
    });

    const wine = wines.map((item, index) => {
        return (
            <li key={index}>
                <p className="menu-item">
                    {item.item}, ${item.price}
                </p>
                <p className="menu-description">
                    {item.type} - {item.description}
                </p>
            </li>
        )
    });

    return (
        <div className="menu-container">

            <div className="menu-div three-column-view">
                <h4 className="menu-head">COCKTAILS</h4>
                <ul>
                    {mixedDrinks}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">WINE</h4>
                <ul>
                    {wine}
                </ul>
            </div>

            <div className="menu-div three-column-view">
                <h4 className="menu-head">BEER</h4>
                <ul>
                    {beer}
                </ul>
            </div>

        </div>
    )
}

export default Drinks;