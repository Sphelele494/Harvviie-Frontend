import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ImageSlider from "./components/ImageSlider"
import FeaturedCollections from "./components/FeaturedCollections"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-harvvie-beige">
      <Header />
      <HeroSection />
      <ImageSlider />
      <FeaturedCollections />
      <Footer />
    </div>
  )
}

export default App
