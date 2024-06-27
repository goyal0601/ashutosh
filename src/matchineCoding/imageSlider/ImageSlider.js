import React, { useState } from 'react';

const images = [
  {
    url: 'https://picsum.photos/seed/picsum/200',
    caption: 'Image 1'
  },
  {
    url: 'https://picsum.photos/id/871/200',
    caption: 'Image 2'
  },
  {
    url: 'https://picsum.photos/200',
    caption: 'Image 3'
  },
  {
    url: 'https://picsum.photos/id/870/200',
    caption: 'Image 4'
  }
];

const ImageSlider = () => {
  const [selectedImageIndex, setImage] = useState(0);

  const selectPrevImage = index => {
    if (index === -1) return;
    setImage(index);
  };

  const selectNextImage = index => {
    if (index === images.length) return;
    setImage(index);
  };

  const selectedImage = images[selectedImageIndex];

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
          //   alignItems: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            width: '40px',

            cursor: 'pointer',
            alignItems: 'center',
            opacity: '.25',
            backgroundColor: 'black',
            color: 'red',
            height: '100%'
          }}
          onClick={() => selectPrevImage(selectedImageIndex - 1)}
        >
          <div
            style={{
              fontSize: '30px',
              color: 'white',
              fontWeight: 600
            }}
          >
            {' '}
            &lt;
          </div>
        </div>
        <img
          style={{
            width: '100%',
            height: '400px'
          }}
          src={selectedImage.url}
          alt={selectedImage.caption}
        />
        <div
          onClick={() => selectNextImage(selectedImageIndex + 1)}
          style={{
            display: 'flex',
            position: 'absolute',
            right: 0,
            justifyContent: 'center',
            width: '40px',

            cursor: 'pointer',
            backgroundColor: 'black',
            opacity: '.25',
            alignItems: 'center',
            color: 'red',
            height: '100%'
          }}
        >
          <div
            style={{
              fontSize: '30px',
              color: 'white',
              fontWeight: 600
            }}
          >
            {' '}
            &gt;
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {images.map((img, index) => (
          <div
            onClick={() => setImage(index)}
            style={{
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              backgroundColor: selectedImageIndex === index ? 'red' : 'black',
              margin: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
