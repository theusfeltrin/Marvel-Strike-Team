import { useState } from "react";
import { Hero } from "../../../models";
import { api } from '../../../infra/api'

export interface UseHeroReturn {
  data: Hero
  loading: boolean
  getHero: (heroId: number) => void
}

export function useHero(): UseHeroReturn {
  const [data, setData] = useState({} as Hero)
  const [loading, setLoading] = useState(false)

 async function getHero(heroId: number) {
   if (!heroId) {
     return
   }

   api
    .get(`/characters/${heroId}?apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}`)
    .then((response) => console.log(response))
    .catch((err) => {
      console.error(`Erro ${err}`)
    })
 }

  return {data, loading, getHero}
}
