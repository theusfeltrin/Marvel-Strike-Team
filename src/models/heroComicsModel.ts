export interface HeroComicsCollectedIssues {
  resourceURI: string,
  name: string
}

export interface HeroComicsCollections {
  resourceURI: string,
  name: string
}

export interface HeroComicsVariants {
  resourceURI: string,
  name: string
}

export interface HeroComicsUrls {
  type: string,
  url: string
}

export interface HeroComicsTextObjects {
  type: string,
  language: string,
  text: string
}

export interface HeroComicsPrices {
  type: string,
  price: number
}

export interface HeroComicsImages {
  path: string,
  extension: string
}

export interface HeroComicsCreatorsItems {
  resourceURI: string,
  name: string,
  role: string
}

export interface HeroComicsCreators {
  available: number,
  returned: number,
  collectionURI: string,
  items: HeroComicsCreatorsItems[]
}

export interface HeroComicsCharactersItems {
  resourceURI: string,
  name: string,
  role: string
}

export interface HeroComicsCharacters {
  available: number,
  returned: number,
  collectionURI: string,
  items: HeroComicsCharactersItems[]
}

export interface HeroComicsStoriesItems {
  resourceURI: string,
  name: string,
  type: string
}

export interface HeroComicsStories {
  available: number,
  returned: number,
  collectionURI: string,
  items: HeroComicsStoriesItems[]
}

export interface HeroComicsEventsItems {
  resourceURI: string,
  name: string
}

export interface HeroComicsEvents {
  available: number,
  returned: number,
  collectionURI: string,
  items: HeroComicsEventsItems[]
}

export interface HeroComicsSeries {
  resourceURI: string,
  name: string
}

export interface HeroComicsThumbnail {
  path: string,
  extension: string
}

export interface HeroComicsDate {
  type: string,
  date: Date
}

export interface HeroComicsModel {
  id: number,
  digitalId: number,
  title: string,
  issueNumber: number,
  variantDescription: string,
  description: string,
  modified: Date,
  isbn: string,
  upc: string,
  diamondCode: string,
  ean: string,
  issn: string,
  format: string,
  pageCount: number,
  textObjects: HeroComicsTextObjects[],
  resourceURI: string,
  urls: HeroComicsUrls[],
  series: HeroComicsSeries,
  variants: HeroComicsVariants[],
  collections: HeroComicsCollections[],
  collectedIssues: HeroComicsCollectedIssues[],
  dates: HeroComicsDate[],
  prices: HeroComicsPrices[],
  thumbnail: HeroComicsThumbnail,
  images: HeroComicsImages[],
  creators: HeroComicsCreators,
  characters: HeroComicsCharacters,
  stories: HeroComicsStories,
  events: HeroComicsEvents
}

export interface HeroComicsListModel {
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
    results: HeroComicsModel[]
  },
  etag: string
}
