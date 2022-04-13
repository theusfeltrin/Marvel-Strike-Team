import { Reducer } from 'redux'
import { produce } from 'immer'
import { ReducerProps, SetHeroTeamParams } from './interfaces'
import { ReduxActions } from './actions'
import { Hero } from '../../models'

const INITIAL_STATE: ReducerProps = {
  heroTeam: {
    name: '',
    heros_team: [] as Hero[]
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
        draftState.heroTeam = setHeroTeamPayload
      })

    default:
      return state
  }
}

export default reducer
