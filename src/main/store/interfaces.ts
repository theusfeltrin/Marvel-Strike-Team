import { HeroModel } from "../../models"

export interface ReducerProps {
  heroTeam:{
    name: string
    heros_team: HeroModel[]
  }
}

export type SetHeroTeamParams = {
  name: string
  heros_team: HeroModel[]
}
