import { GetHeroListParams } from "../models";

export function getParamsToString (params: GetHeroListParams) {
  let returnText = ''

  if (!params) {
    return returnText
  }

  if (params.limit) {
    returnText += `&limit=${params.limit}`
  }
  if (params.offset) {
    returnText += `&offset=${params.offset}`
  }
  if (params.orderBy) {
    returnText += `&.orderBy=${params.orderBy}`
  }
  if (params.name) {
    returnText += `&.name=${params.name}`
  }
  if (params.nameStartsWith) {
    returnText += `&nameStartsWith=${params.nameStartsWith}`
  }
  if (params.modifiedSince) {
    returnText += `&modifiedSince=${params.modifiedSince}`
  }
  if (params.comics) {
    returnText += `&.comics=${params.comics}`
  }
  if (params.events) {
    returnText += `&.events=${params.events}`
  }
  if (params.series) {
    returnText += `&.series=${params.series}`
  }
  if (params.stories) {
    returnText += `&.stories=${params.stories}`
  }

  return returnText
}
