"use client"
import Item from "../components/Item";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase"

interface ItemData {
    name: string;
    description: string;
    price: string;
    category: string;
}

interface StoreProps {
    storeType: string;
}

function ItemList({ storeType }: StoreProps) {
    const [item, setItem] = useState<ItemData[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'items'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemsArray: ItemData[] = [];
            querySnapshot.forEach((doc: any) => {
                itemsArray.push({ ...doc.data(), id: doc.id })
            })
            setItem(itemsArray);
            return () => unsubscribe();
        })
    }, []);

    let itemsToDisplay: ItemData[] = [];

    function filterItems(storeType: string) {
        item.forEach((item) => {
            if (item.category === storeType) {
                itemsToDisplay.push(item);
            } else {
                console.log('error filtering items')
            }
        })
    }
    filterItems(storeType);

    return (
        <>
            <div style={{ backgroundImage: 'url(/store.jpg)' }}>
                <div className="flex justify-center p-20">
                    <div className="grid m-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
                        {itemsToDisplay.map((item: any, index: any) => (
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

export default ItemList;
