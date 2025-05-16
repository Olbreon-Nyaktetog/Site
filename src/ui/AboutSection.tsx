
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-10">About</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <AspectRatio ratio={1} className="bg-muted">
            <img 
              src="https://source.unsplash.com/random/600x600?portrait" 
              alt="About" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Welcome to my portfolio</h3>
          
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
            Donec in efficitur ipsum, in dignissim lorem.
          </p>
          
          <p className="text-gray-700">
            Praesent interdum dictum ex, eu interdum magna vulputate eget. Nullam at tortor a purus 
            condimentum congue vel id tellus. Maecenas ac lobortis est. Morbi elementum eleifend 
            libero, quis bibendum dui commodo lobortis.
          </p>
          
          <p className="text-gray-700">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Quisque commodo vestibulum mauris, non interdum orci aliquet at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
