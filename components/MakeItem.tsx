interface StoreItem {
  product: string;
  quantity: number;
  price: string;
  description: string;
}

interface MakeItemProps {
  item: StoreItem;
}

export default function MakeItem({ item }: MakeItemProps) {
  return (
    <div>
      <h4>{item.product}</h4>
      <div>In stock: {item.quantity}</div>
      <p>{item.price}</p>
      <div>{item.description}</div>
    </div>
  );
}
