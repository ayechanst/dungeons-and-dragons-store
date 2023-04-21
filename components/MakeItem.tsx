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
  const [infoClick, setInfoClick] = useState(false);

  function handlePurchase() {
    setQuantity((item.quantity -= 1));
  }

  function handleInfoClick() {
    setInfoClick(!infoClick);
  }

  return (
    <div className='bg-fixed m-3 w-212'>
      <div className='bg-parchment-pattern p-6 rounded-lg'>
        <div className='text-lg font-bold'>
          {item.product} x {item.quantity}
        </div>
        <div className='flex gap-5'>
          <button
            onClick={handlePurchase}
            className='middle none center rounded-lg bg-red-500 py-1 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            data-ripple-light='true'
          >
            Purchase
          </button>
          <button
            onClick={handleInfoClick}
            className='middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            data-ripple-light='true'
          >
            Show Info
          </button>
        </div>
        <p>Price: {item.price}</p>
        <p>Weight: {item.weight}</p>
        {infoClick && <div>{item.description} </div>}
      </div>
    </div>
  );
}
