"use client"

import type React from "react"
import { useState } from "react"
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react"

interface SliderItem {
  id: number
  image: string
  title: string
  category: string
  price: string
  rating?: number
  reviews?: number
}

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedItems, setLikedItems] = useState<number[]>([])

  const sliderItems: SliderItem[] = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model-7.jpg-7hHaei4rtmiYoIiaaUByzPX0OEa0Yo.jpeg",
      title: "Elegant Collection",
      category: "FASHION",
      price: "$89.00",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model-2.jpg-DlFhSQsMt7zI0Os2SiNy5hHM36V5mX.jpeg",
      title: "Urban Style",
      category: "FASHION",
      price: "$125.00",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model-10.jpg-QQE4OU6jbYAH3bGE8CS5pRaNyi1Lre.jpeg",
      title: "Casual Wear",
      category: "FASHION",
      price: "$45.00",
      rating: 4.2,
      reviews: 67
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1525299374597-911581e1bdef",
      title: "Summer Essentials",
      category: "SEASONAL",
      price: "$75.00",
      rating: 4.7,
      reviews: 203
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      title: "Formal Attire",
      category: "OFFICE",
      price: "$149.00",
      rating: 4.9,
      reviews: 156
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= sliderItems.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? sliderItems.length - 1 : prevIndex - 1))
  }

  const toggleLike = (id: number) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(itemId => itemId !== id))
    } else {
      setLikedItems([...likedItems, id])
    }
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % sliderItems.length
      items.push(sliderItems[index])
    }
    return items
  }

  // Render star ratings
  const renderStars = (rating: number = 0) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${index < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="w-full bg-gradient-to-b from-[#faf7f5] to-[#fdfcfb] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4 tracking-wide">
            Curated Collection
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light tracking-wide">
            Handpicked fashion pieces for your timeless wardrobe
          </p>
        </div>
        
        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleItems().map((item, index) => (
                <div
                  key={`${item.id}-${currentIndex}-${index}`}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                    index === 2 ? "hidden lg:block" : index === 1 ? "hidden md:block" : ""
                  }`}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-gray-100/30 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                    <button 
                      onClick={() => toggleLike(item.id)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white hover:scale-110 transition-all duration-200 flex items-center justify-center"
                    >
                      <Heart 
                        className={`w-5 h-5 ${likedItems.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-600"} hover:text-red-500 transition-colors duration-200`} 
                      />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white hover:scale-110 transition-all duration-200 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-200" />
                    </button>
                  </div>

                  {/* Image container */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-xs text-gray-700 font-medium tracking-wide">{item.category}</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 bg-white relative">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-gray-900 font-normal text-xl tracking-wide leading-tight">{item.title}</h3>
                    </div>
                    
                    {/* Rating */}
                    {item.rating && (
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="flex items-center gap-0.5">
                          {renderStars(item.rating)}
                        </div>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <p className="text-gray-900 text-xl font-light tracking-wide">{item.price}</p>
                      <button className="text-xs uppercase tracking-wider text-gray-600 font-medium hover:text-gray-900 transition-colors duration-300 border-b border-transparent hover:border-gray-400 pb-0.5">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group border border-gray-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group border border-gray-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider