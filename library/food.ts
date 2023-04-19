class Food {
  quantity: number;
  product: string;
  price: string;
  weight: string;
  description: string;
  constructor(
    quantity: number,
    product: string,
    price: string,
    weight: string,
    description: string,
  ) {
    this.quantity = quantity;
    this.product = product;
    this.price = price;
    this.weight = weight;
    this.description = description;
  }
}

const food = [
  {
    quantity: 0,
    product: 'Meat',
    price: '2 gp',
    weight: '2 lbs',
    description: 'mafakin meat.',
  },
  {
    quantity: 0,
    product: 'Rations',
    price: '1 gp',
    weight: '1 lbs',
    description: 'Feeds one person for one day',
  },
];
