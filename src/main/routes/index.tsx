import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Home } from '../pages'

export const Routes = () => (
  <ReactRoutes>
    <Route path='/' element={<Home/>}/>
  </ReactRoutes>
)
