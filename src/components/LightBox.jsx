// components/LightBox.jsx
import React, { useEffect, useRef } from 'react';
import './index.css';

function Lightbox({ content, onClose, originRect }) {
  const lightboxRef = useRef();

  useEffect(() => {
    const box = lightboxRef.current;
    if (!box || !originRect) return;

    const { top, left, width, height } = originRect;
    box.style.transformOrigin = `${left + width / 2}px ${top + height / 2}px`;
    box.classList.add('lightbox-animate-in');
  }, [originRect]);

  if (!content) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-wrapper"
        onClick={(e) => e.stopPropagation()}
        ref={lightboxRef}
      >
        <button className="close-button" onClick={onClose}>×</button>

        {Array.isArray(content) ? (
          content.map((item, index) => {
            switch (item.type) {
              case 'image':
                return <img key={index} src={item.src} alt={item.alt || ''} style={{ width: '100%', marginBottom: '1rem' }} />;
              case 'video':
                return (
                  <video key={index} controls style={{ width: '100%', marginBottom: '1rem' }}>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                );
              case 'text':
                return <p key={index} style={{ marginBottom: '1rem' }}>{item.text}</p>;
              default:
                return null;
            }
          })
        ) : (
          content
        )}
      </div>
    </div>
  );
}

export default Lightbox;
