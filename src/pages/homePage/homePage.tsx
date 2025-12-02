import PopularProductComp from '../../layouts/popularProductComp/popularProductComp'
import StatisticOnMain from '../../layouts/statisticOnMain/statisticOnMain'
import './homePage.css'
export default function HomePage(){
    return(
        <main className="home-page">
            <div className="home-page_entire-block">
                <article className="home-page_article">
                    <h1 className="home-page_title">Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h1>
                    <p className="home-page_text">We create spaces where quality and comfort are the norm. Our products help make your home more comfortable and your work more convenient. Choose items that will complement your style and last for years to come.</p>
                </article>
            </div>
            <PopularProductComp/>
            <StatisticOnMain/>
        </main>
    )
}