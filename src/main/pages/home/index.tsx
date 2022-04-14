import { useEffect, useState } from "react"
import { MainLayout } from "../../layouts/main_layout"
import '../../layouts/main_layout/mainStyles.sass'
import './homeStyles.sass'
import { useHerosList } from "../../hooks/heros/useHerosList"
import { GetHeroListParams } from "../../../models"
import { HeroList } from "../../components"

export const Home = () => {
  const {getHeroList, data: heroListData, loading} = useHerosList()
  const [getHerosListParams, setGetHerosListParams] = useState({
    limit: 8,
    offset: 0
  } as GetHeroListParams)

  useEffect(() => {
    getHeroList(getHerosListParams)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClickSearch() {
    getHeroList(getHerosListParams)
  }

  return (
    <MainLayout>
      <div className='banner'>
        <div className='container homeBannerContainer'>
          <span>Explore the most powerful characters in Marvel</span>
          <div className='searchInputWrapper'>
            <input className='searchInput' placeholder='Type in a character name' type="text" />
            <button
              className="searchButton"
              onClick={handleClickSearch}
            >
              <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.9521 17.6101H19.1486L26.7064 25.6147L24.4496 28L16.8767 20.0114V18.7467L16.4678 18.2985C14.7412 19.8674 12.4996 20.8119 10.0611 20.8119C4.62375 20.8119 0.216309 16.1532 0.216309 10.406C0.216309 4.65868 4.62375 1.52588e-05 10.0611 1.52588e-05C15.4985 1.52588e-05 19.9059 4.65868 19.9059 10.406C19.9059 12.9834 19.0123 15.3528 17.528 17.1778L17.9521 17.6101ZM3.24548 10.406C3.24548 14.3922 6.28979 17.6101 10.0611 17.6101C13.8324 17.6101 16.8767 14.3922 16.8767 10.406C16.8767 6.41968 13.8324 3.20184 10.0611 3.20184C6.28979 3.20184 3.24548 6.41968 3.24548 10.406Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <section className='herosList'>
        <div className="container heroListContainer">
          <div className="headerHerosList">
            <span>Characters</span>
            <span># results</span>
          </div>
          {HeroList(heroListData, 'home')}
        </div>
      </section>
    </MainLayout>
  )
}
