import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <main classname = "w-full flex flex-col">
        <Header
        title={
            <p>CookTherapy!</p>
        }
        type='home'
        />
    </main>
  )
}

export default Home