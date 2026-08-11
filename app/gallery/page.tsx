'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PaintSplatter } from '@/components/ui/PaintDecorations';

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
    src: '/project-images/commercial_stairwell_repaint.png',
    alt: 'Commercial parking garage stairwell painting project',
    category: 'commercial',
    title: 'Parking Garage Stairwell',
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
    alt: 'Interior painting - living space transformation',
    category: 'interior',
    title: 'Living Space Update',
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
  {
    id: 9,
    src: '/project-images/commercial_hero.png',
    alt: 'Commercial painting - professional office building exterior',
    category: 'commercial',
    title: 'Office Park Repaint',
    width: 800,
    height: 600,
  },
  {
    id: 10,
    src: '/project-images/exterior_repaint_hero.png',
    alt: 'Exterior home painting - modern high-durability repaint',
    category: 'exterior',
    title: 'Exterior Repaint Makeover',
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: '/project-images/cabinets_after.png',
    alt: 'Interior cabinet painting - professional sprayed kitchen cabinets',
    category: 'interior',
    title: 'Kitchen Cabinet Refinishing',
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: '/project-images/jta_work_4.jpg',
    alt: 'Exterior painting project - home exterior transformation',
    category: 'exterior',
    title: 'Exterior Home Transformation',
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
    <div className={cn("flex flex-col bg-background text-foreground transition-opacity duration-500", isLoaded ? 'opacity-100' : 'opacity-0')}>
      {/* Hero Section (Centered & Premium) */}
      <section className="relative h-[380px] flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 size-60 rounded-full bg-logo-yellow/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 size-72 rounded-full bg-logo-red/10 blur-[110px] pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Project Gallery
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            Browse our collection of completed residential and commercial painting projects across Tampa Bay.
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
                className="gap-2 transition-all duration-200 rounded-xl"
              >
                <category.icon className="size-4" aria-hidden="true" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="flex-1 px-4 py-12 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          {/* Masonry layout using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-slate-950/60">
                    <div className="flex flex-col items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Maximize2
                        className="size-10 text-white drop-shadow-lg"
                        aria-hidden="true"
                      />
                      <span className="rounded-full bg-white/20 border border-white/30 px-3.5 py-1 text-sm font-semibold text-white backdrop-blur-sm shadow-md">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
                {/* Card info */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-slate-950/90 to-transparent p-6 transition-transform duration-300 group-hover:translate-y-0 z-10">
                  <p className="font-bold text-white text-lg">{image.title}</p>
                  <p className="mt-1 text-xs capitalize text-slate-300 font-semibold tracking-wider">
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <PaintBucket className="size-16 text-muted-foreground/30 animate-bounce" />
              <p className="mt-4 text-lg text-slate-500 font-medium">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${selectedImage.title}`}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-900/60 border border-slate-800 p-3 text-white transition-all hover:bg-slate-800 hover:scale-110 shadow-lg"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 z-10 rounded-full bg-slate-900/60 border border-slate-800 p-3 text-white transition-all hover:bg-slate-800 hover:scale-110 shadow-lg"
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
              className="absolute right-4 z-10 rounded-full bg-slate-900/60 border border-slate-800 p-3 text-white transition-all hover:bg-slate-800 hover:scale-110 shadow-lg lg:right-[calc(50%-450px)]"
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
            className="relative mx-4 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl bg-muted border border-slate-800 shadow-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="h-auto max-h-[75vh] w-full object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Image info */}
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-white">
                {selectedImage.title}
              </p>
              <p className="mt-1 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {currentIndex + 1} of {filteredImages.length} &bull; {selectedImage.category}
              </p>
              <p className="mt-2 text-xs text-slate-500 font-medium">
                Use arrow keys or swipe to navigate
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section (PREMIUM PAINT GRADIENT) */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 rounded-3xl mx-4 my-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-logo-red via-logo-orange to-logo-gold" />
        <div className="absolute inset-0 opacity-15">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
              fill="currentColor"
              className="text-white"
            />
          </svg>
        </div>
        <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-48 rounded-full bg-white/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Like What You See?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Let&apos;s discuss how we can transform your space with the same premium quality and care.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-slate-950 font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-xl w-full sm:w-auto"
              >
                Request Free Quote
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <a href="tel:813-392-8301" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white font-bold px-8 py-6 rounded-xl transition-all hover:bg-white/10 w-full sm:w-auto"
              >
                <Phone className="mr-2 size-4" />
                Call 813-392-8301
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
