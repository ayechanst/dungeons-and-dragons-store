import Item from "../components/Item";

async function getItems() {
    const res = await fetch('http://localhost:4000/items');
    return res.json();
}

export default async function ItemList() {
    const items = await getItems();

    return (
        <>
            {items.map((item: any, index: any) => (
                <div key={index}>
                    <Item
                       item={item}
                    />
                </div>
            ))}
        </>
    );
}
