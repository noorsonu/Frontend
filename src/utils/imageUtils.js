// Utility function to construct proper image URLs
export const getImageUrl = (imageData) => {
  if (!imageData || typeof imageData !== 'string' || imageData.trim() === '') {
    return '/placeholder-image.svg';
  }

  const cleanImageData = imageData.trim();

  // If it's already a full HTTP URL, use it directly
  if (cleanImageData.startsWith('http://') || cleanImageData.startsWith('https://')) {
    return cleanImageData;
  }

  // If it's an unwanted placeholder URL, use our local placeholder
  if (cleanImageData.includes('unsplash') || cleanImageData.includes('placeholder')) {
    return '/placeholder-image.svg';
  }

  // For any image path, construct direct backend URL
  if (cleanImageData.startsWith('/api/uploads/')) {
    return `http://localhost:8081${cleanImageData}`;
  }

  if (cleanImageData.startsWith('/uploads/')) {
    return `http://localhost:8081/api${cleanImageData}`;
  }

  if (cleanImageData.startsWith('uploads/')) {
    return `http://localhost:8081/api/${cleanImageData}`;
  }

  // Otherwise, assume it's just a filename
  return `http://localhost:8081/api/uploads/${cleanImageData}`;
};

// Function to handle image loading errors
export const handleImageError = (event, fallbackUrl = '/placeholder-image.svg') => {
  // Only switch to placeholder if not already using it
  if (!event.target.src.includes('placeholder-image.svg')) {
    event.target.src = fallbackUrl;
    event.target.alt = 'Image not available';
  }
};