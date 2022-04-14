import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Home, HeroProfile } from '../pages'

export const Routes = () => (
  <ReactRoutes>
    <Route path='/' element={<Home/>}/>
    <Route path='/character/:hero_id' element={<HeroProfile/>}/>
  </ReactRoutes>
)
