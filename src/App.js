import React from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import ProductsSection from "./components/ProductsSection"
import './components/styles/Style.css'

function App() {
  const displayHandler = () => {
    document.getElementById("pop_box").style.display = "block"
  }
  return (
    <>
      <NavBar displayHandler={displayHandler} />
      <ContactUs contactClass="pop_up_container" wrapper={true} />
      <Banner />
      <About />
      <ProductsSection />
      <Home />
      <Footer displayHandler={displayHandler} />
    </>
  )
}

export default App
