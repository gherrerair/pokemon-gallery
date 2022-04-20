import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Gallery } from '../components';
import { PokemonType } from '../types';

const Root: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ images }) => {
  return <Gallery images={images} />;
};

export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await supabase.from('images').select('*');
  const res = await fetch('https://pokeapi.deno.dev/pokemon');
  const pokemon: PokemonType[] = await res.json();

  return {
    props: {
      images: pokemon
    }
  };
};

export default Root;
