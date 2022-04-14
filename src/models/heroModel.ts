export interface ComicItemModel {
  resourceURI: string,
  name: string
}

export interface ComicsModel {
  available: number,
  returned: number,
  collectionURI: string,
  items: ComicItemModel[]
}

export interface StorieItemsModel {
  resourceURI: string,
  name: string,
  type: string
}

export interface StoriesModel {
  available: number,
  returned: number,
  collectionURI: string,
  items: StorieItemsModel[]
}

export interface EventItemsModel {
  resourceURI: string,
  name: string
}

export interface EventsModel {
  available: number,
  returned: number,
  collectionURI: string,
  items: EventItemsModel[]
}

export interface SerieItemsModel {
  resourceURI: string,
  name: string
}

export interface SeriesModel  {
  available: number,
  returned: number,
  collectionURI: string,
  items: SerieItemsModel[]
}

export interface HeroModel {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: [
    {
      type: string,
      url: string
    }
  ],
  thumbnail: {
    path: string,
    extension: string
  },
  comics: ComicsModel,
  stories: StoriesModel,
  events: EventsModel,
  series: SeriesModel
}
