import { HeroList } from "../../../models";
import { heroMiniCard } from "../heroMiniCard";
import './heroListStyles.sass'


export const heroList = (heroList: HeroList) => {
  console.log(heroList)
  if (heroList.data === undefined) {
    return (<p>No heros here</p>)
  }
  return (
    <div className="bodyHerosList">
      {heroList.data.results?.map(hero => heroMiniCard(hero))}
    </div>
  )
}
