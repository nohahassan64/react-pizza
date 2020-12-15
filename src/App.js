import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import HeroSection from './components/HeoSection'
import Products from './components/Products'
import { ProductData , ProductDataTwo } from './components/Products/data'
import Feature from './components/Feature'
import { GlobalStyle } from './globalStyle'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HeroSection />
      <Products heading='Choose your favorite' data={ProductData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={ProductDataTwo} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
