import React, { useEffect, useState } from "react"
import { MainLayout } from "../../layouts/main_layout"
import '../../layouts/main_layout/mainStyles.sass'
import './homeStyles.sass'
import { useHerosList } from "../../hooks/heros/useHerosList"
import { GetHeroListParams, HeroModel } from "../../../models"
import { HeroList, Loading } from "../../components"
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from "../../store"
import { addHeroToTeam, removeHeroFromTeam, setInitialState } from "../../store/actions"
import { usePagination } from "../../hooks"

//const declarations
const limit = 8

// Home page component
export const Home = () => {
  // get redux state values
  const appState = useSelector<AppState>(state => state) as AppState
  // get team of heros on redux state
  const heroTeamListData = appState.yourTeam.heros_team
  let herosIdsOnTeam = [] as  number[]
  heroTeamListData.forEach(hero => {
    herosIdsOnTeam.push(hero.id)
  })

  // hooks declaration
  const dispatch = useDispatch()
  const {getHeroList, data: heroListData, loading} = useHerosList()
  // states declaration
  const [currentPage, setCurrentPage] = useState(0)
  const [totalOfPages, setTotalOfPages] = useState(0)
  const [searchInput, setSearchInput] = useState('')
  const paginationRange = usePagination({totalOfPages, limit, siblingCount: 1, currentPage})
  const [getHerosListParams, setGetHerosListParams] = useState({
    limit,
    offset: 0
  } as GetHeroListParams)

  // useEffects declarations
  useEffect(() => {
  },[loading])
  // useEffect running on component mount only one time
  useEffect(() => {
    getHeroList(getHerosListParams)
    heroTeamListData.length <= 0 && dispatch(setInitialState())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect running everytime heroListData change
  useEffect(() => {
    if (heroListData.data && heroListData.data.total) {
      const totalPages = Math.ceil(heroListData.data.total / limit)
      setTotalOfPages(totalPages)
    }
  }, [heroListData, setTotalOfPages])

  // ussEffect running everytime getHerosListParams change
  useEffect(() => {
    getHeroList(getHerosListParams)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getHerosListParams])

  // handle of Button search of hero`s search
  function handleClickSearch() {
    if (!loading) {
      return
    }
    const newHeroListParams = {
      ...getHerosListParams,
      offset: 0,
      nameStartsWith: searchInput
    }
    setGetHerosListParams(newHeroListParams)
  }

  // functions declarations
  // remove hero from team
  function handleRemoveHeroFromTeam(hero_id: number) {
    if (!hero_id) {
      return
    }
    dispatch(removeHeroFromTeam(hero_id))
  }

  // add hero to team
  function handleAddHeroToTeam(hero: HeroModel) {
    if (!hero) {
      return
    }
    dispatch(addHeroToTeam(hero))
  }

  // change input search value
  function handleOnChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    let text = e.target.value
    if (!text) {
      text = ''
    }
    setSearchInput(text)
  }

  // trigger search function on key Enter press
  function handleEnterOnInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!loading) {
      return
    }
    if (e.key === 'Enter') {
      handleClickSearch()
    }
  }

  // change the offset of getParams
  function setNewPageNumberToParams(pageNumber: number) {
    if (!loading) {
      return
    }
    setCurrentPage(pageNumber)
    const newHeroListParams = {
      ...getHerosListParams,
      offset: pageNumber * limit
    }
    setGetHerosListParams(newHeroListParams)
  }

  // handle of change Page down
  function handleOnPageDownChange() {
    if (!loading) {
      return
    }
    if (currentPage > 0) {
      const newPageNumber = currentPage - 1
      setNewPageNumberToParams(newPageNumber)
    }
  }

  // handle of change Page up
  function handleOnPageUpChange() {
    if (!loading) {
      return
    }
    if (currentPage + 1 < totalOfPages) {
      const newPageNumber = currentPage + 1
      setNewPageNumberToParams(newPageNumber)
    }
  }

  // change number of page by click on the numbers
  function onPageChange(pageNumber: number) {
    if (!loading) {
      return
    }
    setNewPageNumberToParams(pageNumber - 1)
  }

  // component return
  return (
    <MainLayout>
      {loading && <Loading />}
      <div className='banner'>
        <div className='container homeBannerContainer'>
          <span>Explore the most powerful characters in Marvel</span>
          <div className='searchInputWrapper'>
            <input
              className='searchInput'
              placeholder='Type in a character name'
              type="text"
              value={searchInput}
              onChange={handleOnChangeSearch}
              onKeyDown={handleEnterOnInput}
            />
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
          {HeroList({
            heroList: heroListData,
            herosIdsOnTeam,
            handleAddHeroToTeam,
            handleRemoveHeroFromTeam
          })}
          <div className="homePaginationDiv">
            <div className="homePageNumbers">
              {paginationRange?.map((pageNumber, index) => {
                if (pageNumber === 'DOTS') {
                  return <span className="pageNumbersdots" key={index}>&#8230;</span>
                }
                return (
                  <span
                    className={`homePageNumber ${pageNumber === currentPage + 1 ? 'homePageSelected' : ''}`}
                    onClick={() => onPageChange(pageNumber as number)}
                    key={index}
                  >{pageNumber}</span>
                )
              })}
            </div>
            <div className="homePrevNextPages">
              <span
                className={currentPage === 0 ? 'homePageDisable' : ''}
                onClick={handleOnPageDownChange}
              >Prev</span>
              <span
                className={currentPage + 1 === totalOfPages ? 'homePageDisable' : ''}
                onClick={handleOnPageUpChange}
              >Next</span>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  )
}
