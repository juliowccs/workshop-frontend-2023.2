/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

const images = [
    "images/yoda.jpg",
    "images/darth.jpg",
    "images/chew.jpg",
    "images/et.jpg",
    "images/feeling.jpg",
];

// Passar as imagens em loop
export default function Slider() {
    const [atual, setAtual] = useState(0);

    function nextSlide() {
        setAtual(atual === images.length - 1 ? 0 : atual + 1);
    }
   
    function prevSlide() {
       setAtual(atual === 0 ? images.length - 1 : atual - 1);
    }
    return (
      // Setas para ir/voltar junto da configuração da imagem
        <div>
            <div className="slider flex justify-evenly p-5 items-center h-screen">
                <img src="images/leftarrow.png" className=" bg-zinc-200 p-2 rounded-lg cursor-pointer w-14 hover:scale-110 transition" onClick={prevSlide}>
                </img>
                {images.map(
                    (image, index) =>
                        atual === index && (
                            <div key={image} className="slide flex justify-center">
                                <img className='slide w-fit rounded-2xl transition-all border-zinc-200 border-8' src={image} alt="images" />
                            </div>
                        )
                )}
                <img src="images/rightarrow.png" className=" bg-gray-200 p-2 rounded-lg cursor-pointer w-14 hover:scale-110 transition" onClick={nextSlide}>
                </img>

            </div>
        </div>
    )
}

