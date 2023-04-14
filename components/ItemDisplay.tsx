import { generalStore } from '@/library/items';

export default function Item() {
  let item = generalStore[3];

  return (
    <div>
      <h4>{item.product}</h4>
      <p>{item.price}</p>
      <div>{item.description}</div>
    </div>
  );
}
