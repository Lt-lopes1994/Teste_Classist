"use client";

import Gas from "@/public/gas.svg";
import SteeringWheel from "@/public/steering-wheel.svg";
import Tire from "@/public/tire.svg";
import { CarProps } from "@/types";
import {
  calculatedRentals,
  convertDriveType,
  generateCarImageUrl,
  mpgToKpl,
} from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { CarDetails, CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRental = calculatedRentals(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R$</span>
        {carRental}
        <span className="self-end text-[14px] font-semibold">/dia</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          alt={car.model + " " + car.make}
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={SteeringWheel} width={20} height={20} alt="Câmbio" />
            <p className="text-[14px]">
              {transmission === "a" ? "Automático" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={Tire} width={20} height={20} alt="Tração" />
            <p className="text-[14px]">{convertDriveType(drive)}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={Gas}
              width={20}
              height={20}
              alt="Consumo de combustível"
            />
            <p className="text-[14px]">{mpgToKpl(city_mpg)} KM/L</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Ver mais"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leadin-[17px] font-semibold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
