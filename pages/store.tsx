import { useState } from 'react';
import { RandomPicker } from './itemPicker';
import { generalStore } from './items';

export function Button() {
  function onClick() {
    const itemIndexes = RandomPicker(4);
    //call the loadstore function
    console.log(itemIndexes);
  }
  return (
    <div>
      <button onClick={onClick}>Generate Store</button>
    </div>
  );
}

export function Item() {
  return (
    <div>
      <h4>item.product</h4>
      <p>item.price</p>
      <div>item.description</div>
    </div>
  );
}

export default function Store() {
  return (
    <Button></Button>
    // store
  );
}
