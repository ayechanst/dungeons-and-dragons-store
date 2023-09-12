import Item from "../components/Item";

async function getItems() {
    const res = await fetch('http://localhost:4000/items');
    return res.json();
}

export default async function ItemList() {
    const items = await getItems();

    return (
        <>
            <div style={{ backgroundImage: 'url(/store.jpg)' }}>
                <div className="flex justify-center py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {items.map((item: any, index: any) => (
                            <div key={index}>
                                <Item
                                    item={item}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
