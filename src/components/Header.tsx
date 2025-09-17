import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Logo from "../assets/harvviie-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent px-4 md:px-8 lg:px-12 py-6 absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center text-harvvie-navy font-light tracking-widest">
          <img
            src={Logo || "/placeholder.svg"}
            alt="HARVVIE Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation - Centered and limited to 40% width */}
        <nav className="hidden md:flex items-center justify-center w-[40%] mx-auto">
          <div className="flex items-center justify-between w-full space-x-4 lg:space-x-8">
            <a
              href="#"
              className="text-harvvie-navy hover:text-harvvie-brown transition-colors text-sm font-light tracking-wide whitespace-nowrap"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-harvvie-navy hover:text-harvvie-brown transition-colors text-sm font-light tracking-wide whitespace-nowrap"
            >
              COLLECTION
            </a>
            <a
              href="#"
              className="text-harvvie-navy hover:text-harvvie-cream transition-colors text-sm font-light tracking-wide whitespace-nowrap"
            >
              FEATURED-COLLECTION
            </a>
            <a
              href="#"
              className="text-harvvie-navy hover:text-harvvie-cream transition-colors text-sm font-light tracking-wide whitespace-nowrap"
            >
              CONTACT-US
            </a>
          </div>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Search className="w-5 h-5 text-harvvie-navy font-light hover:text-harvvie-cream cursor-pointer transition-colors" />
          <ShoppingBag className="w-5 h-5 text-harvvie-navy font-light hover:text-harvvie-cream cursor-pointer transition-colors" />
          <Menu 
            className="w-5 h-5 text-harvvie-navy font-light hover:text-harvvie-cream cursor-pointer transition-colors md:hidden" 
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <X 
                  className="w-6 h-6 text-harvvie-navy cursor-pointer" 
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              
              {/* Mobile navigation */}
              <nav className="flex flex-col space-y-6">
                <a
                  href="#"
                  className="text-harvvie-navy text-lg font-light tracking-wide py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-harvvie-navy text-lg font-light tracking-wide py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  COLLECTION
                </a>
                <a
                  href="#"
                  className="text-harvvie-navy text-lg font-light tracking-wide py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PHILOSOPHY
                </a>
                <a
                  href="#"
                  className="text-harvvie-navy text-lg font-light tracking-wide py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;