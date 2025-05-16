
import React, { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Sample images - can be replaced later
  const images = [
    { id: 1, src: "https://source.unsplash.com/random/800x600?sig=1", alt: "Gallery Image 1" },
    { id: 2, src: "https://source.unsplash.com/random/800x600?sig=2", alt: "Gallery Image 2" },
    { id: 3, src: "https://source.unsplash.com/random/800x600?sig=3", alt: "Gallery Image 3" },
    { id: 4, src: "https://source.unsplash.com/random/800x600?sig=4", alt: "Gallery Image 4" },
    { id: 5, src: "https://source.unsplash.com/random/800x600?sig=5", alt: "Gallery Image 5" },
    { id: 6, src: "https://source.unsplash.com/random/800x600?sig=6", alt: "Gallery Image 6" },
  ];
  
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  
  return (
    <div className="max-w-6xl mx-auto py-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-10">Image Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
            onClick={() => openLightbox(index)}
          >
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      
      {lightboxOpen && (
        <Lightbox 
          images={images}
          currentIndex={currentImage}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentImage((prev) => (prev + 1) % images.length)}
          onPrev={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
        />
      )}
    </div>
  );
};

export default GallerySection;
