import { useState } from 'react';
import { generalStore } from './items';

export function Button() {
  function onClick() {
    //call the pick random function
    //call the loadstore function
  }
  return (
    <div>
      <button onClick={onClick}>Generate Store</button>
    </div>
  );
}

export default function Store() {
  return (
    <div>
      <h4>item.product</h4>
      <p>item.price</p>
      <div>item.description</div>
    </div>
  );
}
