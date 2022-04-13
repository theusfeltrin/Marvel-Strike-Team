import { useEffect, useState } from "react"
import { MainLayout } from "../../layouts/main_layout"
import { FaSearch } from 'react-icons/fa'
import '../../layouts/main_layout/mainStyles.sass'
import './homeStyles.sass'
import { useHerosList } from "../../hooks/heros/useHerosList"
import { GetHeroListParams } from "../../../models"
import { heroList } from "../../components"

export const Home = () => {
  const {getHeroList, data: heroListData, loading} = useHerosList()
  const [getHerosListParams, setGetHerosListParams] = useState({
    limit: 8,
    offset: 0
  } as GetHeroListParams)

  useEffect(() => {
    // getHeroList(getHerosListParams)
  }, [])

  function handleClickSearch() {
    getHeroList(getHerosListParams)
  }

  return (
    <MainLayout>
      <div className='banner'>
        <div className='container bannerContainer'>
          <span>Explore the most powerful characters in Marvel</span>
          <div className='searchInputWrapper'>
            <input className='searchInput' placeholder='Type in a character name' type="text" />
            <button
              className="searchButton"
              onClick={handleClickSearch}
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <section className='herosList'>
        <div className="container heroListContainer">
          <div className="headerHerosList">
            <h3>Characters</h3>
            <span># result</span>
          </div>
          {heroList(heroListData)}
        </div>
      </section>
    </MainLayout>
  )
}
