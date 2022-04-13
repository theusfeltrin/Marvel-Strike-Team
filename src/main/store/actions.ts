import { action } from 'typesafe-actions'
import { SetHeroTeamParams } from './interfaces'

export enum ReduxActions {
  SET_INITIAL_STATE = './SET_INITIAL_STATE',
  SET_HERO_TEAM = './SET_HERO_TEAM'
}

export const setInitialState = () => action(ReduxActions.SET_INITIAL_STATE)
export const setHeroTeam = (data: SetHeroTeamParams) => action(ReduxActions.SET_INITIAL_STATE)
