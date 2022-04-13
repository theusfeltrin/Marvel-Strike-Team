export type GetHeroListOrderBy = 'name' | '-name' | 'modified' | '-modified'

export interface GetHeroListParams {
  limit?: number
  offset?: number
  orderBy?: GetHeroListOrderBy
  name?: string
  nameStartsWith?: string
  modifiedSince?: Date
  comics?: number
  series?: number
  events?: number
  stories?: number
}
