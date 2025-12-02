import PopularProductComp from '../../layouts/popularProductComp/popularProductComp'
import './homePage.css'
export default function HomePage(){
    return(
        <main className="home-page">
            <div className="home-page_entire-block">
                <article className="home-page_article">
                    <h1 className="home-page_title">Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
                    <p className="home-page_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
                </article>
            </div>
            <PopularProductComp/>
        </main>
    )
}