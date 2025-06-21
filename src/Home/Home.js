import React, { useState } from 'react';
import { data } from './data';
import './Home.css';

function Home() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const currentPhoto = data[photoIndex];

    if (!currentPhoto) {
        return <div>No se encontró imagen para el índice {photoIndex}.</div>;
    }

    const { id, image, description } = currentPhoto;

    const handleNext = () => {
        setPhotoIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setPhotoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="wrapper">
            <div className="text-column text-one">
                <h4><span>The Importance of Security in the</span> Digital Era</h4>
                <p>In an increasingly connected world,</p>
                <p>protecting information and digital assets</p>
                <p>has become a top priority for businesses.</p>
                <p>Cybersecurity is no longer just an IT issue—</p>
                <p>it’s a strategic necessity that ensures trust,</p>
                <p>safeguards customer data, and protects a company’s</p>                
            </div>

            <div className="container">
                <img src={image} alt={`Imagen ${id}`} className="photo" />
                <h2>{description}</h2>
                <div className="buttons">
                    <button onClick={handlePrev}>Know</button>
                    <button onClick={handleNext}>More</button>
                </div>
            </div>

            <div className="text-column text-two">
                <h4><span>The Mission of Digidrive</span></h4>
                <p>In today’s business world,</p>
                <p>adapting to the digital age</p>
                <p>is no longer an option, but a necessity.</p>
                <p> We provide cutting-edge tools and strategic guidance</p>
                <p>that help businesses optimize operations</p>
                <p>Our solutions are designed to be scalable, secure, </p>
                <p>and tailored to meet the unique needs of each client.</p>
            </div>
        </div>
    );
}

export default Home;





