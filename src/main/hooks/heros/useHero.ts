import { useState } from "react";
import { HeroModel } from "../../../models";
import { api } from '../../../infra/api'
import { format } from "date-fns";
import { MD5 } from "crypto-js";

export interface UseHeroReturn {
  data: HeroModel
  loading: boolean
  getHero: (heroId: number) => void
}

export function useHero(): UseHeroReturn {
  const [data, setData] = useState({} as HeroModel)
  const [loading, setLoading] = useState(false)

 async function getHero(heroId: number) {
   if (!heroId) {
     return
   }
   setLoading(true)
   const ts = format(new Date(), 'yyyyMMdd')
   const md5_hash = MD5(ts + process.env.REACT_APP_MARVEL_API_PRIVATE_KEY + process.env.REACT_APP_MARVEL_API_PUBLIC_KEY)
   let baseUrl = `/characters/${heroId}?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${md5_hash}`
   await api
    .get(baseUrl)
    .then((response) => {
      if (response.status === 200) {
        const heroReturn = response.data.data.results
        const heroData = heroReturn[0]
        setData(heroData)
      }
    })
    .catch((err) => {
      console.error(`Erro ${err}`)
    })
    setLoading(false)
 }

  return {data, loading, getHero}
}
