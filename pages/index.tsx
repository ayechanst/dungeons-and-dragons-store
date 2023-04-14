import MakeItem from '@/components/MakeItem';
import { useState } from 'react';
import { randomPicker } from '../library/helpers';
import { gear } from '../library/items';

export default function Store() {
  const [items, setItems] = useState<Array<number>>();

  function handleClick() {
    let randomNumbers = randomPicker(3);
    // argument to randomPicker will be sizeOfStore later

    setItems(randomNumbers);
  }

  return (
    <div>
      <button onClick={handleClick} className='text-red-500'>
        Generate Small Store
      </button>
      <button onClick={handleClick}>Generate Medium Store</button>
      <button onClick={handleClick}>Generate Big Store</button>
      {items &&
        items.map((item) => {
          let newItem = gear[item];
          return <MakeItem item={newItem} />;
        })}
    </div>
  );
}
