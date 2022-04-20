export type Image = {
  id: number;
  href: string;
  image_src: string;
  name: string;
  user_name: string;
};

export type PokemonType = {
  id: number;
  name: string;
  genus: string;
  description: string;
  imageUrl: string;
  types: Array<string>;
  color: string;
};
