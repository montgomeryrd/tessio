import Breadcrumbs from './Breadcrumbs';
import MenuLists from './MenuLists';
import DiscoverTessio from './DiscoverTessio';

const Section = ({ imageText, name, pagination, title, text }) => {

    return (
        <div className="section-container">
            <div className={name}>
                <div className="ptext">
                    <span className="border" id={pagination}>
                        {imageText}
                    </span>
                    { name === 'pimg1' ? <Breadcrumbs text1={'view our menu'} text2={'discover tessio'}/> : '' }
                </div>
            </div>
            <section className="section section-light">
                <h2>{title}</h2>
                <p>{text}</p>
                { name === 'pimg2' ? <MenuLists /> : '' }
                { name === 'pimg3' ? <DiscoverTessio /> : '' }
            </section>
        </div>
    )
}

export default Section;