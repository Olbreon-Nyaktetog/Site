
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface LightboxProps {
  images: Image[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  // Close on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button 
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10"
        onClick={onPrev}
      >
        <ChevronLeft size={36} />
      </button>
      
      <div className="max-h-[90vh] max-w-[90vw] relative">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10"
        onClick={onNext}
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
};

export default Lightbox;
