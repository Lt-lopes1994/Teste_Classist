"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Ache, reserve ou alugue um carro com a RentCar -- fácil e rápido.
        </h1>

        <p className="hero__subtitle">
          simplifique sua experiência de aluguel de carros com nosso processo de
          reserva sem esforço
        </p>

        <CustomButton
          title="explore nossos carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
