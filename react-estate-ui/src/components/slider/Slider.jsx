import { useState } from 'react';
import './slider.scss';

export const Slider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === 'left') {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide('left')}>
            <img src="/arrow.png" alt="Arrow Left" />
          </div>
          <div className="imageContainer">
            <img src={images[imgIndex]} alt="Main Images" />
          </div>
          <div className="arrow" onClick={() => changeSlide('right')}>
            <img src="/arrow.png" alt="Arrow Right" className="right" />
          </div>
          <div className="close" onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="Big Image" onClick={() => setImgIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((img, i) => (
          <img
            src={img}
            key={i}
            alt="Small Images"
            onClick={() => setImgIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};