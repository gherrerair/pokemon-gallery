import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { PokemonType } from '../types';

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const BlurredImage: NextPage<{ image: PokemonType }> = ({ image }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <a
      href={`https://www.pokemon.com/us/pokedex/${image.id}`}
      className="group"
      target="_blank"
      rel="noreferrer"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={image.name}
          src={image.imageUrl}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <p className="mt-4 pl-2 text-lg font-medium text-gray-900">{image.name}</p>
      <h3 className="pl-2 text-sm text-gray-700">{image.genus}</h3>
    </a>
  );
};

export default BlurredImage;
