import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <main classname = "w-full flex flex-col">
        <Header
        title={
            <p>RecipeBuilder!</p>
        }
        />
    </main>
  )
}

export default Home