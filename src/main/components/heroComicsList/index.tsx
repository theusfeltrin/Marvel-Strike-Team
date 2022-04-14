import { HeroComicsModel, HeroComicsListModel } from "../../../models";
import { HeroComicsCard } from '..';
import './heroComicsListStyles.sass'


export const HeroComicsList = (comicsListParam: HeroComicsListModel) => {
  const comicsList = comicsListParam.data ? comicsListParam.data.results : [] as HeroComicsModel[]
  let comicsListFiltred = [] as HeroComicsModel[]
  comicsList.forEach((element, index) => {
    if (index < 5) {
      comicsListFiltred.push(element)
    }
  })

  if (comicsListParam.data === undefined) {
    return (<p>No Comics of this Characters to show</p>)
  }
  return (
    <div className="bodyComicsHerosList">
      {comicsListFiltred.map((comic: HeroComicsModel) => HeroComicsCard(comic))}
    </div>
  )
}
