import React, { useState } from 'react'
import './home.css'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay'
import { AppDownload } from '../../components/AppDownload/AppDownload'

export const Home = () => {

  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}
