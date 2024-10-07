"use client"
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoProps extends Photo {
  priority?: boolean;
  photos: Photo[];
  index: number;
}

const Photo: React.FC<PhotoProps> = ({ src, alt, width, height, priority = false, photos, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setCurrentIndex(index);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isExpanded) return;

    if (e.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    } else if (e.key === "Escape") {
      setIsExpanded(false);
    }
  }, [isExpanded, photos.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentPhoto = photos[currentIndex];
  const isVertical = currentPhoto.height > currentPhoto.width;

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onClick={toggleExpand}
        priority={priority}
        className="cursor-pointer transition-all duration-300 hover:opacity-90 object-cover w-full h-auto rounded"
      />
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-[93%] "
            onClick={toggleExpand}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="90vw"
                priority
                className={`object-contain  ${isVertical ? 'object-contain-vertical' : 'object-contain-horizontal'}`}
              />
              <button 
                className="absolute top-4 right-4 text-xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center text-red-700"
                onClick={toggleExpand}
              >
                ✕
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
                }}
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
                }}
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photo;