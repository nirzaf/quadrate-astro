import { useState, useEffect, memo } from 'react';

interface MapEmbedProps {
  src: string;
  title: string;
  className?: string;
}

const MapEmbed = memo(({ src, title, className = '' }: MapEmbedProps) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Start loading when map is 100px from viewport
    );

    // Start observing the placeholder
    const placeholder = document.getElementById(`map-placeholder-${title}`);
    if (placeholder) {
      observer.observe(placeholder);
    }

    return () => observer.disconnect();
  }, [title]);

  return (
    <div className="relative w-full h-full">
      {/* Static Map Placeholder */}
      <div
        id={`map-placeholder-${title}`}
        className={`absolute inset-0 bg-gray-100 dark:bg-gray-800 ${
          !isMapLoaded ? 'visible' : 'invisible'
        } ${className}`}
      >
        {/* Placeholder Image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(title)}&zoom=15&size=600x300&scale=2&format=png&style=feature:all|element:labels|visibility:off')`,
            filter: 'grayscale(1) opacity(0.7)'
          }}
        />
        
        {/* Loading Indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Actual Map Embed */}
      {shouldLoadMap && (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          className={`${className} ${isMapLoaded ? 'visible' : 'invisible'}`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsMapLoaded(true)}
        />
      )}
    </div>
  );
});

MapEmbed.displayName = 'MapEmbed';

export default MapEmbed;
