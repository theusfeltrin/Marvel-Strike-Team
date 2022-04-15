import { HeroModel } from "../../../models";
import { HeroMiniCard } from '..';
import './heroListStyles.sass'

interface HeroTeamListProps {
  heroList: HeroModel[]
  herosIdsOnTeam: number[]
  handleRemoveHeroFromTeam: (hero_id: number) => void
}

export const HeroTeamList = ({heroList, herosIdsOnTeam, handleRemoveHeroFromTeam}: HeroTeamListProps) => {
  if (heroList === undefined || heroList.length <= 0) {
    return (
      <div className="noDataHeroTeamList">
        <p>You do not have Characters on Your Team yet</p>
      </div>
    )
  }
  return (
    <div className="bodyHerosList">
      {heroList.map((hero: HeroModel) => HeroMiniCard({hero, herosIdsOnTeam, handleRemoveHeroFromTeam}))}
    </div>
  )
}
