import { Play, ArrowRight } from "lucide-react";
import bagImage from "../assets/landing.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-harvvie-light-gray min-h-screen">
      <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
        {/* Image - Top on mobile, Right on desktop */}
        <div className="relative w-full h-96 sm:h-[500px] lg:h-screen order-1 lg:order-2">
          <img
            src={bagImage || "/placeholder.svg"}
            alt="HARVVIE Bag Collection"
            className="w-full h-full object-cover"
          />

          {/* Featured Card */}
          <div className="absolute top-4 right-4 bg-harvvie-light-gray bg-opacity-90 backdrop-blur-sm p-4 mt-12 shadow-lg max-w-48 rounded-xl whitespace-nowrap">
            <p className="text-harvvie-navy text-xs font-light tracking-wide uppercase mb-1">
              FEATURED  
            </p>
            <h3 className="text-harvvie-navy text-sm font-light mb-1">
              Wool & Cashmere Blazer
            </h3>
            <p className="text-harvvie-brown text-xs font-light">From R2,499</p>
          </div>

          {/* Sustainability Badge */}
          <div className="absolute bottom-4 left-4 bg-harvvie-light-gray bg-opacity-90 backdrop-blur-sm p-4 rounded-xl shadow-lg whitespace-nowrap">
            <p className="text-harvvie-navy text-xs font-light tracking-wide uppercase mb-1">
              SUSTAINABILITY
            </p>
            <h3 className="text-harvvie-navy text-sm font-light mb-1">
              100% Organic Cotton  
            </h3>
            <p className="text-harvvie-brown text-xs font-light">
              Low-Impact Dyes
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 right-4">
            <p className="text-harvvie-light-gray text-xs font-light tracking-wide uppercase transform rotate-90 origin-center">
              SCROLL
            </p>
          </div>
        </div>

        {/* Content - Below image on mobile, Left on desktop */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 px-4 md:px-8 lg:px-12 py-8 lg:py-0 order-2 lg:order-1 flex-1">
          <div className="space-y-4 md:space-y-6">
            <p className="inline-block bg-white text-harvvie-brown rounded-full px-4 py-1 text-xs md:text-sm font-light tracking-widest uppercase whitespace-nowrap">
              NEW COLLECTION
            </p>

            <div className="space-y-2">
              <h1 className="text-3xl whitespace-nowrap md:text-4xl lg:text-5xl xl:text-5xl font-light text-harvvie-navy leading-tight">
                Crafted for the Confident. 
              </h1>
              <h1 className="text-3xl whitespace-nowrap md:text-4xl lg:text-5xl xl:text-4xl font-light text-harvvie-brown italic leading-tight">
                Designed for the Timeless.
              </h1>
            </div>

            <p className="text-harvvie-navy text-sm font-light md:text-base lg:text-lg leading-relaxed max-w-md">
              Discover Harvviie’s curated pieces — where 1980s old-money elegance meets modern inclusivity. Every garment is made to empower, inspire, and let you own every room you walk into.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button className="bg-harvvie-navy text-white px-6 md:px-8 py-3 md:py-4 text-sm font-light tracking-wide hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group">
              EXPLORE COLLECTION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="text-harvvie-navy px-6 md:px-8 py-3 md:py-4 text-sm font-light tracking-wide hover:text-harvvie-brown transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              WATCH STORY
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 pt-4 md:pt-8">
            <div>
              <div className="text-2xl md:text-3xl font-light text-harvvie-navy">
                2.5k+
              </div>
              <div className="text-harvvie-navy text-xs md:text-sm">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-light text-harvvie-navy">
                98%
              </div>
              <div className="text-harvvie-navy font-light text-xs md:text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
