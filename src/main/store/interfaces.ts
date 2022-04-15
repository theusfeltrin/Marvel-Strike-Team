import { HeroModel } from "../../models"

export interface ReducerProps {
  yourTeam:{
    name: string
    heros_team: HeroModel[]
  }
}

export type SetHeroTeamParams = {
  name: string
  heros_team: HeroModel[]
}
