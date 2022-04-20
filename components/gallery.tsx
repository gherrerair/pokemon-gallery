import { NextPage } from 'next';
import { BlurredImage } from '../components';
import { PokemonType } from '../types';

const Gallery: NextPage<{ images: PokemonType[] }> = ({ images }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
        {images && images.map(image => <BlurredImage key={image.id} image={image} />)}
      </div>
    </div>
  );
};

export default Gallery;
