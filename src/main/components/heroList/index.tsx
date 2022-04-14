import { HeroListModel, HeroModel } from "../../../models";
import { HeroMiniCard } from '../';
import './heroListStyles.sass'


export const HeroList = (heroList: HeroListModel, page: string) => {
  if (heroList.data === undefined) {
    return (<p>No heros here</p>)
  }
  return (
    <div className="bodyHerosList">
      {heroList.data.results?.map((hero: HeroModel) => HeroMiniCard(hero, page))}
    </div>
  )
}
