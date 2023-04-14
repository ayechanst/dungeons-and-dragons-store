import MakeItem from '@/components/MakeItem';
import { useState } from 'react';
import { randomPicker } from '../library/helpers';
import { generalStore } from '../library/items';

export default function Store() {
  const [items, setItems] = useState<Array<number>>();
  function handleClick() {
    let randomNumbers = randomPicker(4);

    setItems(randomNumbers);
  }

  return (
    <div>
      <button onClick={handleClick}>Generate Store</button>
      {items &&
        items.map((item) => {
          let newItem = generalStore[item];
          return <MakeItem item={newItem} />;
        })}
    </div>
  );
}
