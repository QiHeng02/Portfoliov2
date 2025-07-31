import { useState } from 'react';
import './GridGallery.css';

const GridGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${image.size || 'gallery-item-medium'}`}
            style={{
              gridRowEnd: image.rowSpan ? `span ${image.rowSpan}` : undefined,
              gridColumnEnd: image.colSpan ? `span ${image.colSpan}` : undefined,
              ...(image.customStyle || {})
            }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <h3 className="gallery-title">{image.title}</h3>
              <p className="gallery-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GridGallery;