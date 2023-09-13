"use client"
import Item from "../components/Item";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase"

interface ItemData {
    name: string;
    description: string;
    price: string;
}

export default function ItemList() {
    const [item, setItem] = useState<ItemData[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'items'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemsArray: ItemData[] = [];
            querySnapshot.forEach((doc: any) => {
                itemsArray.push({ ...doc.data(), id: doc.id })
            })
            setItem(itemsArray);
            // where is items array?
            return () => unsubscribe();
        })
    }, []);

    return (
        <>
            <div style={{ backgroundImage: 'url(/store.jpg)' }}>
                <div className="flex justify-center py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {item.map((item: any, index: any) => (
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
