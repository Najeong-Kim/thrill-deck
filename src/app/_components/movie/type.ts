export type Tag = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  rating: number;
  image: string;
  tags: Tag[];
};
