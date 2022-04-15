import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { MainLayout } from "../../layouts/main_layout"
import '../../layouts/main_layout/mainStyles.sass'
import './heroProfileStyles.sass'
import { useHero } from "../../hooks/heros"
import { HeroCard, Loading } from "../../components"
import { HeroComicsList } from "../../components/heroComicsList"
import { useHeroComics } from "../../hooks/heros/useHeroComics"

export const HeroProfile = () => {
  // hooks declarations
  const params = useParams()
  const {getHero, data: heroData, loading: loadingHeroData} = useHero()
  const {getHeroComics, data: comicsData, loading: loadingComics} = useHeroComics()

  // useEffect declaration
  // useEffect running everytime params is changed to get characters informations
  useEffect(() => {
    if (!params.hero_id) {
      return
    }
    const heroId = parseInt(params.hero_id)
    getHero(heroId)
    getHeroComics(heroId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <MainLayout>
      {(loadingHeroData || loadingComics) && <Loading />}
      <div className='banner'>
        <div className='container profileBannerContainer'>
          <div className='profileReturnLinkDiv'>
            <Link className='profileReturnLink' to='/'>
              Return to previus page
              <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1C7.85 1 5.45 1.99 3.6 3.6L0 0V9H9L5.38 5.38C6.77 4.22 8.54 3.5 10.5 3.5C14.04 3.5 17.05 5.81 18.1 9L20.47 8.22C19.08 4.03 15.15 1 10.5 1Z" fill="#FFCDD2"/>
              </svg>
            </Link>
          </div>
          <div className="profileBannerTitle">
            <span>Discover all comics this character took part in</span>
          </div>
          <div className="profileBannerCard">
            {HeroCard(heroData)}
          </div>
        </div>
      </div>
      <section className='heroComics'>
        <div className="container heroComicsContainer">
          <div className="headerComicsList">
            <span>Comics</span>
            <span># results</span>
          </div>
          {HeroComicsList(comicsData)}
        </div>
      </section>
    </MainLayout>
  )
}
