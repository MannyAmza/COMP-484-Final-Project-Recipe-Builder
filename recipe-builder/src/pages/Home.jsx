import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

/**
 * Home page component containing the main content for the application.
 */
const Home = () => {
  return (
    // Main container for the home page
    <main className='w-full flex flex-col'>
      {/* Header Section */}
      <Header
        title={
          // Custom title element for the header
          <p>CookTherapy!</p>
        }
        type='home' // Indicating the type of header (home)
      />

      {/* Recipes Section */}
      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        {/* Recipes Component */}
        <Recipes />
      </section>
    </main>
  )
}

export default Home
