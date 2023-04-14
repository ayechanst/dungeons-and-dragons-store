import MakeItem from '@/components/MakeItem';
import { useState } from 'react';
import { randomPicker } from '../library/helpers';
import { gear } from '../library/items';

export default function Store() {
  const [items, setItems] = useState<Array<number>>();

  function handleSmallClick() {
    let randomNumbers = randomPicker(3);
    setItems(randomNumbers);
  }

  function handleMediumClick() {
    let randomNumbers = randomPicker(4);
    setItems(randomNumbers);
  }

  function handleBigClick() {
    let randomNumbers = randomPicker(5);
    setItems(randomNumbers);
  }

  return (
    <div>
      <div className='flex gap-8'>
        <button
          onClick={handleSmallClick}
          className='class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"'
        >
          Generate Small Store
        </button>
        <button
          onClick={handleMediumClick}
          className='class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"'
        >
          Generate Medium Store
        </button>
        <button
          onClick={handleBigClick}
          className='class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"'
        >
          Generate Big Store
        </button>
      </div>
      <div className='font-extrabold'>Adveturing Gear</div>
      {items &&
        items.map((item) => {
          let newItem = gear[item];
          return <MakeItem item={newItem} />;
        })}
    </div>
  );
}
