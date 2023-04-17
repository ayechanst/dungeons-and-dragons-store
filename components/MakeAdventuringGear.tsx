import { useState } from 'react';
import MakeItem from '@/components/MakeItem';
import { randomPicker } from '../library/helpers';
import { gear } from '../library/items';

export default function AdveturingGear() {
  const [items, setItems] = useState<Array<number>>();
  let randomNumbers = randomPicker(4);
  setItems(randomNumbers);

  return (
    <div className='font-extrabold'>
      <div>Adventuring Gear</div>
      {items &&
        items.map((item) => {
          let newItem = gear[item];
          return <MakeItem item={newItem} />;
        })}
    </div>
  );
}
