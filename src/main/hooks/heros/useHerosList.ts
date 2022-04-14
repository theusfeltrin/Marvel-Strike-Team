import { useState } from "react";
import { GetHeroListParams, HeroListModel } from "../../../models";
import { api } from '../../../infra/api'
import { MD5 } from "crypto-js";
import { getParamsToString } from "../../../helpers";
import { format } from 'date-fns'

export interface UseHeroListReturn {
  data: HeroListModel
  loading: boolean
  getHeroList: (params: GetHeroListParams) => void
}

export function useHerosList(): UseHeroListReturn {
  const [data, setData] = useState({} as HeroListModel)
  const [loading, setLoading] = useState(false)

 async function getHeroList(params: GetHeroListParams) {
   setLoading(true)
   const ts = format(new Date(), 'yyyyMMdd')
   const md5_hash = MD5(ts + process.env.REACT_APP_MARVEL_API_PRIVATE_KEY + process.env.REACT_APP_MARVEL_API_PUBLIC_KEY)
   let baseUrl = `/characters?ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${md5_hash}`

   if (params) {
    baseUrl += getParamsToString(params)
   }

   api
    .get(baseUrl)
    .then((response) => {
      if (response.status === 200) {
        const heroList = response.data
        setData(heroList)
      }
    })
    .catch((err) => {
      console.error(`Erro ${err}`)
    })

    setLoading(false)
 }

  return {data, loading, getHeroList}
}
