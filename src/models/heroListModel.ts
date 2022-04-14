import { HeroModel } from "."

export interface HeroListModel {
  code: number,
  status: string,
  copyright: string,
  attributionText: string,
  attributionHTML: string,
  data: {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: HeroModel[]
  },
  etag: string
}
