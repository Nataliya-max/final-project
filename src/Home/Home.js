import React, { useState } from 'react';
import { data } from './data';
import './Home.css';

function Home() {
    const [photoIndex, setPhotoIndex] = useState(0);

    // Protección: asegurarse de que el índice es válido
    const currentPhoto = data[photoIndex];

    if (!currentPhoto) {
        return <div>No se encontró imagen para el índice {photoIndex}.</div>;
    }

    const { id, image, description } = currentPhoto;

    // Navegación
    const handleNext = () => {
        setPhotoIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setPhotoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="container">
            <img src={image} alt={`Imagen ${id}`} className="photo" />
            <h2>{description}</h2>
            <div className="buttons">
                <button onClick={handlePrev}>More</button>
                <button onClick={handleNext}>More</button>
            </div>
        </div>
    );
}

export default Home;


