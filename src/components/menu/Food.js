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
        <div className="menu-container food-container">
            <div className="menu-div">
                <h3 className="menu-head">STARTERS</h3>
                <ul>
                    {starts}
                </ul>
            </div>
            <div className="divider">
                <div className="vertical-line"></div>
            </div>
            <div className="menu-div">
                <h3 className="menu-head">10" PIZZAS</h3>
                <ul>
                    {pies}
                </ul>
            </div>
            <div className="divider">
                <div className="vertical-line"></div>
            </div>
            <div className="menu-div">
                <h3 className="menu-head">TESSIO PANINIS</h3>
                <ul>
                    {sammies}
                </ul>
            </div>
            <div className="divider">
                <div className="vertical-line"></div>
            </div>
            <div className="menu-div">
                <h3 className="menu-head">TESSIO SALADS</h3>
                <ul>
                    {greens}
                </ul>
            </div>
        </div>
    )
}

export default Food;