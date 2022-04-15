import { Link } from "react-router-dom";
import { HeroModel } from "../../../models";
import './heroMiniCardStyles.sass'

interface HeroMiniCardProps {
  hero: HeroModel
  herosIdsOnTeam: number[]
  handleRemoveHeroFromTeam?: (hero_id: number) => void
  handleAddHeroToTeam?: (hero: HeroModel) => void
}

export const HeroMiniCard = ({hero, herosIdsOnTeam, handleRemoveHeroFromTeam, handleAddHeroToTeam}: HeroMiniCardProps) => {
  const heroOnTeam = herosIdsOnTeam.includes(hero.id)

  function handleClickButtonHero () {
    if (heroOnTeam) {
      handleRemoveHeroFromTeam && handleRemoveHeroFromTeam(hero.id)
    } else {
      handleAddHeroToTeam && handleAddHeroToTeam(hero)
    }

  }

  return (
    <div className="miniCardWrapper" key={hero.id}>
      <div className="miniHeroImgDiv">
        <img src={`${hero.thumbnail.path}/landscape_xlarge.${hero.thumbnail.extension}`} alt="" />
      </div>
      <div className="miniHeroInfoDiv">
        <button className={heroOnTeam ? 'removeTeamButton' : 'joinTeamButton'} onClick={handleClickButtonHero}>
          <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8003 6C17.4603 6 18.7903 4.66 18.7903 3C18.7903 1.34 17.4603 0 15.8003 0C14.1403 0 12.8003 1.34 12.8003 3C12.8003 4.66 14.1403 6 15.8003 6ZM7.80029 6C9.46029 6 10.7903 4.66 10.7903 3C10.7903 1.34 9.46029 0 7.80029 0C6.14029 0 4.80029 1.34 4.80029 3C4.80029 4.66 6.14029 6 7.80029 6ZM7.80029 8C5.47029 8 0.800293 9.17 0.800293 11.5V14H14.8003V11.5C14.8003 9.17 10.1303 8 7.80029 8ZM15.8003 8C15.5103 8 15.1803 8.02 14.8303 8.05C15.9903 8.89 16.8003 10.02 16.8003 11.5V14H22.8003V11.5C22.8003 9.17 18.1303 8 15.8003 8Z" fill="#212121"/>
          </svg>
        </button>
        <Link className="miniHeroInfoTexts" to={`/character/${hero.id}`}>
          <span className="miniHeroName">
            {hero.name}
          </span>
          <p className="miniHeroDescription">
            {hero.description}
          </p>
        </Link>
      </div>
    </div>
  )
}
