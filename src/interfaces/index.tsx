type Rating = {
  rate: number;
  count: number;
};
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  image: string;
  rating: Rating;
}

export interface CardType {
  id: number;
  image: string;
  describtion: string;
}
