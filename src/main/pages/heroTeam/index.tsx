import { useEffect, useState } from "react"
import { MainLayout } from "../../layouts/main_layout"
import '../../layouts/main_layout/mainStyles.sass'
import './homeStyles.sass'
import { HeroTeamList } from "../../components"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from "../../store"
import { removeHeroFromTeam } from "../../store/actions"
import { usePagination } from "../../hooks"
import { HeroModel } from "../../../models"

// const declaration
const limit = 8

export const HeroTeam = () => {
  // get redux states values
  const appState = useSelector<AppState>(state => state) as AppState
  const heroTeamListData = appState.yourTeam.heros_team

  // state declarations
  const [currentPage, setCurrentPage] = useState(0)
  const [totalOfPages, setTotalOfPages] = useState(0)
  const [filtredHerosTeam, setFiltredHerosTeam] = useState([] as HeroModel[])

  // hooks declarations
  const paginationRange = usePagination({totalOfPages, limit, siblingCount: 1, currentPage})
  const dispatch = useDispatch()

  let herosIdsOnTeam = [] as  number[]
  heroTeamListData.forEach(hero => {
    herosIdsOnTeam.push(hero.id)
  })

  // useEffect declarations
  // useEffect running everytime heroTeamListData change
  useEffect(() => {
    const totalOfHeros = heroTeamListData.length
    const totalPages = Math.ceil(totalOfHeros / limit)
    setTotalOfPages(totalPages)
    const filterindex = currentPage * limit
    const filtredHeros = heroTeamListData.filter((hero: HeroModel, index: number) => index >= filterindex && index < filterindex + limit)
    setFiltredHerosTeam(filtredHeros)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroTeamListData])

  // useEffect running everytime currentPage change
  useEffect(() => {
    const filterindex = currentPage * limit
    const filtredHeros = heroTeamListData.filter((hero: HeroModel, index: number) => index >= filterindex && index < filterindex + limit)
    setFiltredHerosTeam(filtredHeros)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  // functions declarations
  // function that remove hero from team on redux state
  function handleRemoveHeroFromTeam(hero_id: number) {
    if (!hero_id) {
      return
    }
    setCurrentPage(0)
    dispatch(removeHeroFromTeam(hero_id))
  }

  // change the offset of getParams
  function setNewPageNumberToParams(pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  // handle of change Page down
  function handleOnPageDownChange() {
    if (currentPage > 0) {
      const newPageNumber = currentPage - 1
      setNewPageNumberToParams(newPageNumber)
    }
  }

  // handle of change Page up
  function handleOnPageUpChange() {
    if (currentPage + 1 < totalOfPages) {
      const newPageNumber = currentPage + 1
      setNewPageNumberToParams(newPageNumber)
    }
  }

  // change number of page by click on the numbers
  function onPageChange(pageNumber: number) {
    setNewPageNumberToParams(pageNumber - 1)
  }

  return (
    <MainLayout>
      <div className='banner'>
        <div className='container heroTeamBannerContainer'>
          <div className='heroTeamReturnLinkDiv'>
            <Link className='heroTeamReturnLink' to='/'>
              Return to previus page
              <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1C7.85 1 5.45 1.99 3.6 3.6L0 0V9H9L5.38 5.38C6.77 4.22 8.54 3.5 10.5 3.5C14.04 3.5 17.05 5.81 18.1 9L20.47 8.22C19.08 4.03 15.15 1 10.5 1Z" fill="#FFCDD2"/>
              </svg>
            </Link>
          </div>
          <div className="heroTeamBannerTitle">
            <span>Here is your own strike team choice</span>
          </div>
        </div>
      </div>
      <section className='herosTeamList'>
        <div className="container heroListContainer">
          {HeroTeamList({
            heroList: filtredHerosTeam,
            herosIdsOnTeam,
            handleRemoveHeroFromTeam
          })}
          <div className="herosTeamPaginationDiv">
            <div className="herosTeamPageNumbers">
              {paginationRange?.map((pageNumber, index) => {
                if (pageNumber === 'DOTS') {
                  return <span className="pageNumbersdots" key={index}>&#8230;</span>
                }
                return (
                  <span
                    className={`herosTeamPageNumber ${pageNumber === currentPage + 1 ? 'herosTeamPageSelected' : ''}`}
                    onClick={() => onPageChange(pageNumber as number)}
                    key={index}
                  >{pageNumber}</span>
                )
              })}
            </div>
            <div className="herosTeamPrevNextPages">
              <span
                className={currentPage === 0 ? 'herosTeamPageDisable' : ''}
                onClick={handleOnPageDownChange}
              >Prev</span>
              <span
                className={currentPage + 1 === totalOfPages ? 'herosTeamPageDisable' : ''}
                onClick={handleOnPageUpChange}
              >Next</span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
