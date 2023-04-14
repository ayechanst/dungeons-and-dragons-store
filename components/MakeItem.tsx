import { restock } from '@/library/helpers';
import { useState } from 'react';

interface StoreItem {
  product: string;
  quantity: number;
  price: string;
  weight: string;
  description: string;
}

interface MakeItemProps {
  item: StoreItem;
}

export default function MakeItem({ item }: MakeItemProps) {
  const [stock, setStock] = useState(item);
  const [quantity, setQuantity] = useState(item.quantity);

  function handleClick() {
    setQuantity((item.quantity -= 1));
  }

  return (
    <div>
      <div>{item.product}</div>
      <div>
        <div>In stock: {item.quantity}</div>
        <button onClick={handleClick}>Purchase</button>
      </div>
      <p>{item.price}</p>
      <p>{item.weight}</p>

      <div>{item.description}</div>
    </div>
  );
}
