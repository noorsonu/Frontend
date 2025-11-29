import { API_BASE_URL } from '../services/api';

// Utility function to construct proper image URLs
export const getImageUrl = (imageData) => {
  if (!imageData || typeof imageData !== 'string' || imageData.trim() === '') {
    return '/placeholder-image.svg';
  }

  const cleanImageData = imageData.trim();

  // Fix old localhost URLs from when backend ran on http://localhost:8081
  if (cleanImageData.startsWith('http://localhost:8081')) {
    const path = cleanImageData.replace('http://localhost:8081', '');
    return `${API_BASE_URL}${path}`;
  }

  // If it's already a full HTTP/HTTPS URL (and not localhost), use it directly
  if (cleanImageData.startsWith('http://') || cleanImageData.startsWith('https://')) {
    return cleanImageData;
  }

  // If it's an unwanted placeholder URL, use our local placeholder
  if (cleanImageData.includes('unsplash') || cleanImageData.includes('placeholder')) {
    return '/placeholder-image.svg';
  }

  // For any image path, construct direct backend URL
  if (cleanImageData.startsWith('/api/uploads/')) {
    return `${API_BASE_URL}${cleanImageData}`;
  }

  if (cleanImageData.startsWith('/uploads/')) {
    return `${API_BASE_URL}/api${cleanImageData}`;
  }

  if (cleanImageData.startsWith('uploads/')) {
    return `${API_BASE_URL}/api/${cleanImageData}`;
  }

  // Otherwise, assume it's just a filename
  return `${API_BASE_URL}/api/uploads/${cleanImageData}`;
};

// Function to handle image loading errors
export const handleImageError = (event, fallbackUrl = '/placeholder-image.svg') => {
  // Only switch to placeholder if not already using it
  if (!event.target.src.includes('placeholder-image.svg')) {
    event.target.src = fallbackUrl;
    event.target.alt = 'Image not available';
  }
};
