import { HeroListModel, HeroModel } from "../../../models";
import { HeroMiniCard } from '../';
import './heroListStyles.sass'

interface HeroListProps {
  heroList: HeroListModel
  herosIdsOnTeam: number[]
  handleRemoveHeroFromTeam: (hero_id: number) => void
  handleAddHeroToTeam: (hero: HeroModel) => void
}

export const HeroList = ({heroList, herosIdsOnTeam, handleRemoveHeroFromTeam, handleAddHeroToTeam}: HeroListProps) => {
  if (heroList.data === undefined) {
    return (
      <div className="noDataHeroList">
        <p>No Characters found</p>
      </div>
    )
  }
  return (
    <div className="bodyHerosList">
      {heroList.data.results?.map((hero: HeroModel) => HeroMiniCard({hero, herosIdsOnTeam, handleRemoveHeroFromTeam, handleAddHeroToTeam}))}
    </div>
  )
}
