"use client"
import { CarProps } from '@/types'
import { calculateRent } from '@/utils';
import Image from 'next/image';
import React from 'react'

interface CarCardProps{
    car:CarProps;
}
const CarCard = ({car}:CarCardProps) => {
    const {city_mpg,year,make,model,transmission,drive}=car;
    const carRental=calculateRent(city_mpg,year)

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className="car-card__content-title">
            {make} {model}
            </h2>
            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {carRental}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src='/hero.png ' alt='car model ' fill priority className='object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default CarCard