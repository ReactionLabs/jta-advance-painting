'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  PaintBucket,
  Home,
  Building2,
  Brush,
  Layers,
} from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'interior' | 'exterior' | 'commercial' | 'residential';
  title: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/project-images/jta_work_1.jpg',
    alt: 'Interior painting project - living room with fresh neutral tones',
    category: 'interior',
    title: 'Living Room Transformation',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: '/project-images/jta_work_2.jpg',
    alt: 'Exterior home painting - complete exterior makeover',
    category: 'exterior',
    title: 'Full Home Exterior',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: '/project-images/jta_work_3.jpg',
    alt: 'Interior project - bedroom with modern finish',
    category: 'interior',
    title: 'Bedroom Refresh',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: '/project-images/jta_work_4.jpg',
    alt: 'Commercial painting - professional office space',
    category: 'commercial',
    title: 'Office Repaint',
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: '/project-images/jta_work_5.jpg',
    alt: 'Interior painting - kitchen area with updated colors',
    category: 'interior',
    title: 'Kitchen Update',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: '/project-images/jta_work_6.jpg',
    alt: 'Exterior painting - complete home exterior project',
    category: 'exterior',
    title: 'Curb Appeal Upgrade',
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: '/project-images/jta_work_7.jpg',
    alt: 'Residential interior - living space transformation',
    category: 'residential',
    title: 'Residential Interior',
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: '/project-images/jta_work_8.jpg',
    alt: 'Interior project - complete room makeover',
    category: 'interior',
    title: 'Room Makeover',
    width: 800,
    height: 600,
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'interior', label: 'Interior', icon: Home },
  { id: 'exterior', label: 'Exterior', icon: PaintBucket },
  { id: 'commercial', label: 'Commercial', icon: Building2 },
  { id: 'residential', label: 'Residential', icon: Brush },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div className={`flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative flex min-h-[300px] flex-col items-center justify-center bg-gradient-to-b from-muted to-background px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <Badge variant="secondary" className="mb-2">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Project Gallery
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Browse our collection of completed residential and commercial painting
            projects.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2 transition-all duration-200"
              >
                <category.icon className="size-4" aria-hidden="true" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Masonry layout using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg bg-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="relative w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                    <div className="flex flex-col items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Maximize2
                        className="size-10 text-white drop-shadow-lg"
                        aria-hidden="true"
                      />
                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
                {/* Card info */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="font-medium text-white">{image.title}</p>
                  <p className="mt-1 text-sm capitalize text-white/70">
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <PaintBucket className="size-16 text-muted-foreground/30" />
              <p className="mt-4 text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${selectedImage.title}`}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="size-8" aria-hidden="true" />
            </button>
          )}
          {currentIndex < filteredImages.length - 1 && (
            <button
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110 lg:right-[calc(50%-450px)]"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="size-8" aria-hidden="true" />
            </button>
          )}

          {/* Image container */}
          <div
            className="relative mx-4 max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="h-auto max-h-[80vh] w-full object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Image info */}
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-white">
                {selectedImage.title}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {currentIndex + 1} of {filteredImages.length}
              </p>
              <p className="mt-1 text-xs text-white/50 capitalize">
                {selectedImage.category} • Use arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-2xl font-bold tracking-tight">
            Like What You See?
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Let&apos;s discuss how we can transform your space with the same
            quality and care.
          </p>
          <div className="mt-6">
            <a href="/contact">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Start Your Project
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
