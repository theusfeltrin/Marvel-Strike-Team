import { format } from "date-fns";
import { HeroComicsDate, HeroComicsModel, HeroComicsPrices } from "../../../models";
import './heroComicsCardStyles.sass'


export const HeroComicsCard = (comic: HeroComicsModel) => {
  const comicDates: HeroComicsDate[] = comic.dates.filter(element => element.type === 'onsaleDate')
  const comicFiltredDate: HeroComicsDate = comicDates[0]
  const formatedData = format(new Date(comicFiltredDate.date), 'dd-MM-yyyy')
  const comicPrices: HeroComicsPrices[] = comic.prices.filter(element => element.type === 'printPrice')
  const comicFiltredPrice: HeroComicsPrices = comicPrices[0]
  return (
    <div className="comicCardWrapper" key={comic.id}>
      <div className="comicCardContent">
        <div className="comicImgDiv">
          <img src={`${comic?.thumbnail?.path}/landscape_xlarge.${comic?.thumbnail?.extension}`} alt="" />
        </div>
        <div className="comicInfoDiv">
          <span className="comicName">
            {comic.title}
          </span>
          <div className="comicCharacteristics">
            <div className="characteristicsDiv">
              <span>
                {formatedData}
              </span>
            </div>
            <div className="characteristicsDiv">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53994 0.954834C2.49029 0.954834 0.0180664 2.78611 0.0180664 5.04511C0.0180664 7.30412 2.49029 9.13539 5.53994 9.13539C8.5896 9.13539 11.0618 7.30412 11.0618 5.04511C11.0618 2.78611 8.5896 0.954834 5.53994 0.954834ZM7.32119 5.04511C7.32119 5.77265 6.52212 6.36456 5.53994 6.36456C4.55776 6.36456 3.75869 5.77265 3.75869 5.04511C3.75869 4.31757 4.55776 3.72567 5.53994 3.72567C6.52212 3.72567 7.32119 4.31757 7.32119 5.04511Z" fill="black"/>
            </svg>
              <span>
                {`${comic.pageCount} pages`}
              </span>
            </div>
            <div className="characteristicsDiv">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53994 0.954834C2.49029 0.954834 0.0180664 2.78611 0.0180664 5.04511C0.0180664 7.30412 2.49029 9.13539 5.53994 9.13539C8.5896 9.13539 11.0618 7.30412 11.0618 5.04511C11.0618 2.78611 8.5896 0.954834 5.53994 0.954834ZM7.32119 5.04511C7.32119 5.77265 6.52212 6.36456 5.53994 6.36456C4.55776 6.36456 3.75869 5.77265 3.75869 5.04511C3.75869 4.31757 4.55776 3.72567 5.53994 3.72567C6.52212 3.72567 7.32119 4.31757 7.32119 5.04511Z" fill="black"/>
              </svg>
              <span>
                {`U$${comicFiltredPrice.price}`}
              </span>
            </div>
          </div>
          <p className="comicDescription">
            {comic.description.substring(0, 200)}
          </p>
        </div>
      </div>
    </div>
  )
}
