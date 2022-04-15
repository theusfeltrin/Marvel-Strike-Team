import { Reducer } from 'redux'
import { produce } from 'immer'
import { ReducerProps, SetHeroTeamParams } from './interfaces'
import { ReduxActions } from './actions'
import { HeroModel } from '../../models'

const INITIAL_STATE: ReducerProps = {
  yourTeam: {
    name: '',
    heros_team: [] as HeroModel[]
  }
}

const reducer: Reducer<ReducerProps> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxActions.SET_INITIAL_STATE:
      state = INITIAL_STATE
      return state
    case ReduxActions.SET_HERO_TEAM:
      const setHeroTeamPayload = action.payload as SetHeroTeamParams
      return produce(state, (draftState) => {
        if (setHeroTeamPayload === undefined) {
          return draftState
        }
        draftState.yourTeam = setHeroTeamPayload
      })
    case ReduxActions.ADD_HERO_TEAM:
      const addHeroToTeamPayload = action.payload as HeroModel
      return produce(state, (draftState) => {
        if (addHeroToTeamPayload === undefined) {
          return draftState
        }
        draftState.yourTeam.heros_team = [...draftState.yourTeam.heros_team, addHeroToTeamPayload]
      })
    case ReduxActions.REMOVE_HERO_TEAM:
      const removeHeroFromTeamPayload = action.payload as number
      return produce(state, (draftState) => {
        if (removeHeroFromTeamPayload === undefined) {
          return draftState
        }
        const filtredHerosTeam = draftState.yourTeam.heros_team.filter(hero => hero.id !== removeHeroFromTeamPayload)
        draftState.yourTeam.heros_team = filtredHerosTeam
      })

    default:
      return state
  }
}

export default reducer
