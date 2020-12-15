import { starters, salads, pizzas, paninis } from './data';

const Food = () => {

    const starts = starters.map((item, index) => {
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

    const greens = salads.map((item, index) => {
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

    const pies = pizzas.map((item, index) => {
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

    const sammies = paninis.map((item, index) => {
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

    return (
        <div className="menu-container">

            <div className="menu-div four-column-view">
                <h4 className="menu-head">STARTERS</h4>
                <ul>
                    {starts}
                </ul>
            </div>

            <div className="menu-div four-column-view">
                <h4 className="menu-head">10" PIZZAS</h4>
                <ul>
                    {pies}
                </ul>
            </div>

            <div className="menu-div four-column-view">
                <h4 className="menu-head">PANINIS</h4>
                <ul>
                    {sammies}
                </ul>
            </div>

            <div className="menu-div four-column-view">
                <h4 className="menu-head">SALADS</h4>
                <ul>
                    {greens}
                </ul>
            </div>

        </div>
    )
}

export default Food;