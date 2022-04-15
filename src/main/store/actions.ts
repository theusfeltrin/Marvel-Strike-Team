import { action } from 'typesafe-actions'
import { HeroModel } from '../../models'
import { SetHeroTeamParams } from './interfaces'

export enum ReduxActions {
  SET_INITIAL_STATE = '@store/SET_INITIAL_STATE',
  SET_HERO_TEAM = '@store/SET_HERO_TEAM',
  ADD_HERO_TEAM = '@store/ADD_HERO_TEAM',
  REMOVE_HERO_TEAM = '@store/REMOVE_HERO_TEAM'
}

export const setInitialState = () => action(ReduxActions.SET_INITIAL_STATE)
export const setHeroTeam = (data: SetHeroTeamParams) => action(ReduxActions.SET_HERO_TEAM, data)
export const addHeroToTeam = (data: HeroModel) => action(ReduxActions.ADD_HERO_TEAM, data)
export const removeHeroFromTeam = (data: number) => action(ReduxActions.REMOVE_HERO_TEAM, data)
