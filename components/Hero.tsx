import Image from 'next/image';
import React from 'react';
import HeroImg from '../public/hero_farm.png';
import { FaFacebook } from 'react-icons/fa';
import { Button } from './ui/button';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative w-full">
      <Image src={HeroImg} alt="Assorted farm pictures" layout="responsive" objectFit="cover" objectPosition="center" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-shadow-md bg-black bg-opacity-90 p-4 rounded-md w-full">
        <h2 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Explore Your Sanctuary of Celebration
        </h2>
        <br className="hidden sm:block" />
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">
          Join us at Hidden Acres Farm, where every corner is a celebration of diversity and every event is an
          invitation to belong.
        </h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <Button className="flex items-center justify-center bg-blue-600 hover:bg-blue-500">
            <a
              className="flex items-center justify-between w-full text-white"
              href="https://www.facebook.com/HiddenAcresFarmaVenue"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
