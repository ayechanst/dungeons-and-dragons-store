export class Gear {
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

export const gear = [
  {
    quantity: 0,
    product: 'Cold Weather Clothes',
    price: '10 gp',
    weight: '5 lbs',
    description:
      'This outfit consists of a heavy fur coat or cloak over layers of wool clothing, as well as a fur-lined hat or hood, goggles, and fur-lined leather boots and gloves. As long as cold weather clothing remains dry, its wearer automatically succeeds on saving throws against the effects of extreme cold (see “Extreme Cold”).',
  },
  {
    quantity: 0,
    product: 'Grappling Hook',
    price: '2 gp',
    weight: '4 lbs',
    description:
      'When tied to the end of a rope, a grappling hook can secure the rope to a battlement, window ledge, tree limb, or other protrusion.',
  },
  {
    quantity: 0,
    product: 'Backpack',
    price: '5 gp',
    weight: '5 lbs',
    description:
      'A backpack is a leather pack carried on the back, typically with straps to secure it. A backpack can hold 1 cubic foot/ 30 pounds of gear.\
      You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.',
  },
  {
    quantity: 0,
    product: 'Crampons',
    price: '16 sp',
    weight: '1/4 lbs',
    description:
      "A crampon is a metal plate with spikes that is strapped to the sole of a boot. A creature wearing crampons can't fall prone while moving across slippery ice.",
  },
  {
    quantity: 0,
    product: 'Torch',
    price: '1 cp',
    weight: '1 lbs',
    description:
      'A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.',
  },
  {
    quantity: 0,
    product: 'Tent',
    price: '10 gp',
    weight: '20 lbs',
    description: 'A simple and portable canvas shelter, a tent sleeps two.',
  },
];
