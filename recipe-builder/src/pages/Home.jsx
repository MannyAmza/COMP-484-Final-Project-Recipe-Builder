import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <main classname = "w-full flex flex-col">
        <Header
        title={
            <p>CookTherapy!</p>
        }
        type='home'
        />
        <section id="recipes" className='cd:max-w-[1440px] mx-auto px-4 md:px-20'>
          <Recipes/>
        </section>
    </main>
  )
}

export default Home