import { useState } from 'react';
import { RandomPicker } from './itemPicker';
import { generalStore } from './items';

export default function Store() {
  function handleClick() {
    const itemIndexes = RandomPicker(5);
    //call the loadstore function
    console.log(itemIndexes);
  }

  function Item() {
    return (
      <div>
        <h4>item.product</h4>
        <p>item.price</p>
        <div>item.description</div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleClick}>Genertate Store</button>
    </div>
  );
}
