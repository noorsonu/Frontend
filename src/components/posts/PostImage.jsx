import React from 'react';
import { handleImageError } from '../../utils/imageUtils';

const PostImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-64 ${className}`}>
      <img
        key={src}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={handleImageError}
      />
    </div>
  );
};

export default PostImage;