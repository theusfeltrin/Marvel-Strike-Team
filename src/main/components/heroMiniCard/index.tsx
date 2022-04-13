import { Hero } from "../../../models";
import './heroMiniCardStyles.sass'
import { MdGroup } from 'react-icons/md'


export const heroMiniCard = (hero: Hero) => {
  return (
    <div className="cardWrapper">
      <div className="heroImgDiv">
        <img src={`${hero.thumbnail.path}/landscape_large.${hero.thumbnail.extension}`} alt="" />
      </div>
      <div className="heroInfoDiv">
        <button className="joinTeamButton"><MdGroup size={20}/></button>
        <div className="heroInfoTexts">
          <span className="heroName">
            {hero.name}
          </span>
          <p className="heroDescription">
            {hero.description}
          </p>
        </div>
      </div>
    </div>
  )
}
