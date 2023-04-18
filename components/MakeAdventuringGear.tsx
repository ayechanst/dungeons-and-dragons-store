import { useState, useEffect } from 'react';
import MakeItem from '@/components/MakeItem';
import { randomPicker } from '../library/helpers';
import { gear } from '../library/items';

export default function AdveturingGear() {
  const [items, setItems] = useState<Array<number>>();
  useEffect(() => {
    let randomNumbers = randomPicker(4);
    setItems(randomNumbers);
  }, []);

  return (
    <div>
      <div className='font-extrabold'>Adventuring Gear</div>
      {items &&
        items.map((item) => {
          let newItem = gear[item];
          return <MakeItem item={newItem} />;
        })}
    </div>
  );
}
