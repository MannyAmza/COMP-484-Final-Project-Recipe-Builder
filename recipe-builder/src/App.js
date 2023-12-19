import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';

/**
 * Layout component that serves as the common layout structure for pages.
 * It includes Navbar, Outlet (main content), and Footer components.
 */
function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>{/* Outlet renders the main content based on the nested routes */}
      <Footer/>
    </>
  )
}

/**
 * App component, the root component of the application.
 * It defines the overall structure of the app using React Router.
 */
function App() {
  return (
    <div className='bg-black'>
      <Routes>
        {/* Route with Layout as the common structure for nested routes */}
        <Route path='/' element={<Layout />}>
          {/* Index route for the Home page */}      
          <Route index element={<Home />} />
          {/* Route for displaying RecipeDetail based on the recipe ID */}
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
