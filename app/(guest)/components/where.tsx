"use client"
import React, { useState, useRef } from 'react';
import { Check } from 'lucide-react';

const Where = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.offsetWidth;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  const scrollTo = (index:number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  return (
    <div className="w-full px-4 py-8 mx-auto max-w-7xl md:my-20">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold text-sky-500 mb-4">Where?</h2>
        <h2 className="text-3xl font-bold text-white mb-4">Simple, transparent pricing</h2>
        <p className="text-lg text-neutral-200">Choose the plan thats right for you</p>
      </div>
      
      {/* Container with horizontal scroll on mobile */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 md:overflow-x-visible"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Basic Tier */}
        <div className="relative flex-none w-full md:w-auto snap-center p-8 bg-neutral-900 rounded-2xl shadow-lg   hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neutral-50">$0</span>
              <span className="text-gray-200">/month</span>
            </div>
            <div className="border-t border-neutral-50 pt-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-50">5 Projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-50">Basic Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-50">1GB Storage</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-6 rounded-lg bg-neutral-800 hover:bg-gray-200 text-neutral-50 font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Pro Tier */}
        <div className="relative flex-none w-full md:w-auto snap-center p-8 bg-neutral-900 border border-sky-500 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-sky-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-medium">Popular</span>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span>/month</span>
            </div>
            <div className="border-t border-sky-500 pt-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Unlimited Projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>10GB Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Priority Support</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-6 rounded-lg bg-neutral-800 text-neutral-50 hover:bg-gray-100 font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Enterprise Tier */}
        <div className="relative flex-none w-full md:w-auto snap-center p-8 bg-neutral-900 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-xl font-semibold  mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl text-neutral-50 font-bold">$99</span>
              <span className="text-sky-500">/month</span>
            </div>
            <div className="border-t border-neutral-100 pt-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-200">Unlimited Everything</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-200">Custom Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-200">100GB Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-200">24/7 Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-neutral-200">Custom Integration</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-6 rounded-lg  hover:bg-gray-200 bg-neutral-700 font-medium transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Pagination dots - only visible on mobile */}
      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              activeSlide === index ? 'bg-sky-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Where;