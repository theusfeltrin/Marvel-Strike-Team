export interface ComicItem {
  resourceURI: string,
  name: string
}

export interface Comics {
  available: number,
  returned: number,
  collectionURI: string,
  items: ComicItem[]
}

export interface StorieItems {
  resourceURI: string,
  name: string,
  type: string
}

export interface Stories {
  available: number,
  returned: number,
  collectionURI: string,
  items: StorieItems[]
}

export interface EventItems {
  resourceURI: string,
  name: string
}

export interface Events {
  available: number,
  returned: number,
  collectionURI: string,
  items: EventItems[]
}

export interface SerieItems {
  resourceURI: string,
  name: string
}

export interface Series  {
  available: number,
  returned: number,
  collectionURI: string,
  items: SerieItems[]
}

export interface Hero {
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
  comics: Comics,
  stories: Stories,
  events: Events,
  series: Series
}
