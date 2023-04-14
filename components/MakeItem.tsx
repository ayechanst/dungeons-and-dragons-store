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
      <div className='text-lg font-bold'>{item.product}</div>
      <div>
        <div>In stock: {item.quantity}</div>
        <button
          onClick={handleClick}
          className='middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          data-ripple-light='true'
        >
          Purchase
        </button>
      </div>
      <p>{item.price}</p>
      <p>{item.weight}</p>

      <div>{item.description}</div>
    </div>
  );
}
