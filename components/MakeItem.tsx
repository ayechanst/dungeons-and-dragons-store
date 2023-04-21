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
            className='bg-white hover:bg-grey-150 text-grey-600 py-1 px-1 border border-grey-900 rounded shadow text text-xs'
            data-ripple-light='true'
          >
            Purchase
          </button>
          <button
            onClick={handleInfoClick}
            className='bg-white hover:bg-grey-150 text-grey-600 py-1 px-1 border border-grey-900 rounded shadow text text-xs'
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
