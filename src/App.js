import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Divbar from './Divbar';
import Sponsors from './Sponsors';
import Testimonials from './Testimonials';
import Intinerary from './Intinerary';
import FAQ from './FAQ';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Sponsors/>
      <Divbar/>
      <Intinerary/>
      <FAQ/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
