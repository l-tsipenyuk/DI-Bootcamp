import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function App() {
  const images = ['image1.jpg', 'image2.png', 'image3.png', 'image4.png'];
  const legends = ['Hong Kong', 'Macao', 'Japan', 'Las Vegas'];

  return (
    <div>
      <h1>React Carousel</h1>
      <Carousel>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt="image not found" />
            <p className="legend">{legends[index]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
