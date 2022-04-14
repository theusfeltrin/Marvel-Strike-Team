import { HeroModel } from "../../../models";
import './heroCardStyles.sass'


export const HeroCard = (hero: HeroModel) => {
  return (
    <div className="cardWrapper" key={hero.id}>
      <div className="cardContent">
        <div className="heroImgDiv">
          <img src={`${hero?.thumbnail?.path}/landscape_xlarge.${hero?.thumbnail?.extension}`} alt="" />
        </div>
        <div className="heroInfoDiv">
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
