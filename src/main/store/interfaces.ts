import { Hero } from "../../models"

export interface ReducerProps {
  heroTeam:{
    name: string
    heros_team: Hero[]
  }
}

export type SetHeroTeamParams = {
  name: string
  heros_team: Hero[]
}
