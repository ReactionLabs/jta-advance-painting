'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
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
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/interior-living-room.jpg',
    alt: 'Modern living room with neutral tones',
    category: 'interior',
    title: 'Living Room Transformation',
  },
  {
    id: 2,
    src: '/gallery/exterior-home.jpg',
    alt: ' craftsman-style home with new exterior paint',
    category: 'exterior',
    title: 'Curb Appeal Upgrade',
  },
  {
    id: 3,
    src: '/gallery/kitchen-cabinets.jpg',
    alt: 'Freshly painted kitchen cabinets',
    category: 'interior',
    title: 'Kitchen Cabinet Makeover',
  },
  {
    id: 4,
    src: '/gallery/commercial-office.jpg',
    alt: 'Professional office space',
    category: 'commercial',
    title: 'Office Building Repaint',
  },
  {
    id: 5,
    src: '/gallery/bedroom-painting.jpg',
    alt: 'Calm bedroom with soft blue walls',
    category: 'interior',
    title: 'Serene Bedroom Refresh',
  },
  {
    id: 6,
    src: '/gallery/deck-staining.jpg',
    alt: 'Beautiful stained deck area',
    category: 'exterior',
    title: 'Deck Staining Project',
  },
  {
    id: 7,
    src: '/gallery/restaurant-paint.jpg',
    alt: 'Elegant restaurant interior',
    category: 'commercial',
    title: 'Restaurant ambiance',
  },
  {
    id: 8,
    src: '/gallery/bathroom-renovation.jpg',
    alt: 'Modern bathroom with fresh paint',
    category: 'interior',
    title: 'Bathroom Transformation',
  },
  {
    id: 9,
    src: '/gallery/fence-staining.jpg',
    alt: 'Beautifully stained wooden fence',
    category: 'exterior',
    title: 'Fence Staining',
  },
  {
    id: 10,
    src: '/gallery/dining-room.jpg',
    alt: 'Elegant dining room in warm tones',
    category: 'interior',
    title: 'Dining Room Elegance',
  },
  {
    id: 11,
    src: '/gallery/warehouse.jpg',
    alt: 'Clean warehouse interior',
    category: 'commercial',
    title: 'Warehouse Facility',
  },
  {
    id: 12,
    src: '/gallery/home-exterior.jpg',
    alt: 'Completed home exterior project',
    category: 'residential',
    title: 'Full Home Exterior',
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

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <div className="flex flex-col" onKeyDown={handleKeyDown} tabIndex={-1}>
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
                className="gap-2"
              >
                <category.icon className="size-4" aria-hidden="true" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* Placeholder for images - in production, replace with actual Image component */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                    <PaintBucket className="size-12 text-muted-foreground/30" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                    <Maximize2
                      className="size-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="font-medium">{image.title}</p>
                  <p className="mt-1 text-sm capitalize text-muted-foreground">
                    {image.category}
                  </p>
                </CardContent>
              </Card>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${selectedImage.title}`}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          {/* Navigation buttons */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
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
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 lg:right-[calc(50%-400px)]"
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
            className="relative mx-4 max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
              {/* Placeholder for lightbox image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PaintBucket className="size-24 text-muted-foreground/20" />
              </div>
            </div>

            {/* Image info */}
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-white">
                {selectedImage.title}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {currentIndex + 1} of {filteredImages.length}
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