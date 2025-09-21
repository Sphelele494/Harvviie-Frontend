"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import Accessories1 from "../assets/accessories-1.jpg";
import Accessories2 from "../assets/accessories-2.jpg";
import Bag from "../assets/bag.jpg";
import Landing from "../assets/landing.jpg";
import Model1 from "../assets/model-1.jpg";
import Model2 from "../assets/model-2.jpg";
import Model3 from "../assets/model-3.jpg";
import Model4 from "../assets/model-4.jpg";
import Model5 from "../assets/model-5.jpg";
import Model6 from "../assets/model-6.jpg";
import Model7 from "../assets/model-7.jpg";
import Model8 from "../assets/model-8.jpg";
import Model9 from "../assets/model-9.jpg";
import Model10 from "../assets/model-10.jpg";

const initialProducts = [
  {
    id: 1,
    name: "Elegant Red & White Set",
    price: "R89",
    image: Model1,
    category: "Outfits",
  },
  {
    id: 2,
    name: "HARVVIE Drawstring Bags",
    price: "R25",
    image: Accessories1,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Premium Canvas Bags",
    price: "R30",
    image: Model2,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Matching White Tank Set",
    price: "R65",
    image: Model3,
    category: "Outfits",
  },
  {
    id: 5,
    name: "HARVVIE Signature Bag",
    price: "R28",
    image: Model4,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Classic White Ensemble",
    price: "R95",
    image: Model5,
    category: "Outfits",
  },
  {
    id: 7,
    name: "Burgundy & White Collection",
    price: "R120",
    image: Model6,
    category: "Outfits",
  },
  {
    id: 8,
    name: "Elegant Steps Collection",
    price: "R115",
    image: Model7,
    category: "Outfits",
  },
  {
    id: 9,
    name: "Minimalist Bag Set",
    price: "R45",
    image: Model8,
    category: "Accessories",
  },
]

const additionalProducts = [
  {
    id: 10,
    name: "Summer Breeze Set",
    price: "R78",
    image: Model9,
    category: "Outfits",
  },
  {
    id: 11,
    name: "Urban Chic Collection",
    price: "R92",
    image: Model10,
    category: "Outfits",
  },
  {
    id: 12,
    name: "Minimalist Accessories",
    price: "R35",
    image: Accessories1,
    category: "Accessories",
  },
]

export default function FeaturedCollection() {
  const [displayedProducts, setDisplayedProducts] = useState(initialProducts)
  const [showingAll, setShowingAll] = useState(false)

  const toggleProducts = () => {
    if (!showingAll) {
      setDisplayedProducts([...displayedProducts, ...additionalProducts])
      setShowingAll(true)
    } else {
      setDisplayedProducts(initialProducts)
      setShowingAll(false)
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-thin tracking-wide mb-4 text-[#0D1B2A]">Featured Collection</h2>
        <p className="text-lg font-light text-[#8D6A5C] max-w-2xl mx-auto leading-relaxed">
          Discover our carefully curated selection of minimalist fashion and premium accessories
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden bg-[#F5E6CA] rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            {/* Product Image */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Desktop Hover Overlay */}
              <div className="hidden md:flex absolute inset-0 bg-[#0D1B2A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <button className="bg-[#E1E2E1] text-[#0D1B2A] hover:bg-[#D6B79E] transition-colors duration-200 font-light px-4 py-2 rounded-md text-sm flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <button className="border border-[#E1E2E1] text-[#E1E2E1] hover:bg-[#E1E2E1] hover:text-[#0D1B2A] transition-colors duration-200 bg-transparent px-3 py-2 rounded-md">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center text-[#E1E2E1] font-light">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="text-sm tracking-wide">Quick View</span>
                  </div>
                </div>
              </div>

              {/* Mobile Quick View Badge */}
              <div className="md:hidden absolute top-3 right-3 bg-[#0D1B2A]/80 backdrop-blur-sm rounded-full p-2">
                <Eye className="w-4 h-4 text-[#E1E2E1]" />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-4 bg-[#F5E6CA]">
              <div className="flex justify-between items-start mb-3 sm:mb-1">
                <div className="flex-1">
                  <h3 className="font-light text-[#0D1B2A] text-base sm:text-sm md:text-base mb-1 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-xs text-[#8D6A5C] font-light tracking-wide">{product.category}</p>
                </div>
                <span className="text-[#4B302D] font-light text-lg sm:text-sm md:text-base ml-4">{product.price}</span>
              </div>

              {/* Mobile Action Buttons */}
              <div className="md:hidden flex items-center justify-between mt-4 pt-3 border-t border-[#D6B79E]/30">
                <button className="flex items-center justify-center bg-[#0D1B2A] text-[#E1E2E1] hover:bg-[#4B302D] transition-colors duration-200 font-light px-4 py-2.5 rounded-md text-sm flex-1 mr-3">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
                <button className="border border-[#8D6A5C] text-[#8D6A5C] hover:bg-[#8D6A5C] hover:text-[#E1E2E1] transition-colors duration-200 bg-transparent p-2.5 rounded-md">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button
          onClick={toggleProducts}
          className="bg-[#0D1B2A] text-[#E1E2E1] hover:bg-[#4B302D] px-8 py-3 font-light tracking-wide transition-all duration-300 hover:scale-105 rounded-md"
        >
          {showingAll ? "Show Less" : "Load More Pieces"}
        </button>
      </div>
    </section>
  )
}
